from datetime import datetime

from mysql.connector import IntegrityError

from dao import post_dao
from models.post import Post
from utils.covert_util import map_rows_to_objects,map_row_to_object
from services import user_service
from utils.custom_exceptions import BusinessException


def create_post(data):
    # Example business rule
    username=data["post_username"]
    social_media=data['post_social_media']
    user=user_service.find_user_by_pk(username,social_media)
    if not user:
        raise BusinessException("poster not exists")
    try:
        flag=post_dao.insert_post(data)
    except IntegrityError as e:
        if e.errno == 1062:  # 1062 = duplicate entry
            raise BusinessException("Duplicate entry: post already exists")
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

        if row.get("proj_name"):
            grouped[post_key]["experiments"].append(row["proj_name"])

    return list(grouped.values())
