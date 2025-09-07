from datetime import datetime

from mysql.connector import IntegrityError, DataError

from dao import post_dao
from models.post import Post
from utils.covert_util import map_rows_to_objects,map_row_to_object
from services import user_service
from utils.custom_exceptions import BusinessException


def create_post(data):
    # Example business rule
    username=data["post_username"]
    social_media=data['post_social_media']
    if  " & "  in username:
        raise BusinessException("username is not allowed to have ' & '")
    if  " & "  in social_media:
        raise BusinessException("social_media is not allowed to have ' & '")
    if  " & "  in data["text"]:
        raise BusinessException("text is not allowed to have ' & '")
    user=user_service.find_user_by_pk(username,social_media)
    if not user:
        raise BusinessException("poster not exists")
    try:
        flag=post_dao.insert_post(data)
    except IntegrityError as e:
        if e.errno == 1062:  # 1062 = duplicate entry
            raise BusinessException("a user cannot post more than one post in one media at the same time")
        else:
            raise BusinessException()
    except DataError as dataerro:
        if dataerro.errno == 1264:
            raise BusinessException("number is out of range")
        else:
            raise BusinessException()
    return flag


def qry_posts(post_username,post_social_media,start_time,end_time, first_name,last_name):
    rows = post_dao.find_posts(post_username,post_social_media,start_time,end_time, first_name,last_name)
    # convert dicts to dataclass objects
    return group_full_posts_with_experiments(rows)

def get_by_pk(post_username,post_social_media,post_time):
    row=post_dao.get_post_by_pk(post_username,post_social_media,post_time)
    return map_row_to_object(Post,row)

def group_full_posts_with_experiments(rows):
    grouped = {}

    for row in rows:
        post_key = (row["post_username"], row["post_social_media"], row["post_time"])

        if post_key not in grouped:
            # Format time for output
            formatted_time = (
                row["post_time"].strftime("%Y-%m-%d %H:%M:%S")
                if isinstance(row["post_time"], datetime)
                else row["post_time"]
            )

            grouped[post_key] = {
                "post_username": row["post_username"],
                "post_social_media": row["post_social_media"],
                "text": row["text"],
                "has_multimedia": row.get("has_multimedia"),
                "likes_num": row.get("likes_num"),
                "dislike_num": row.get("dislike_num"),
                "city": row.get("city"),
                "state": row.get("state"),
                "country": row.get("country"),
                "post_time": formatted_time,
                "experiments": []
            }

        if row.get("proj_name") and row["proj_name"] not in grouped[post_key]["experiments"]:
            grouped[post_key]["experiments"].append(row["proj_name"])

    return list(grouped.values())

def qry_dropdown():
    rows=post_dao.qry_all()
    res=[]
    for row in rows:
        username=row["post_username"]
        social_media=row["post_social_media"]
        post_time=row["post_time"]
        text = row["text"]
        text_snippet = text[:4] + "..." if len(text) > 4 else text

        str = f"{username} & {social_media} & {post_time} & {text_snippet}"
        res.append(str)
    return res


