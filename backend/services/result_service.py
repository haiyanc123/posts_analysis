from datetime import datetime

from mysql.connector import IntegrityError

from dao import post_dao, result_dao
from models.result import Result
from services import post_service, project_service
from utils.covert_util import map_rows_to_objects,map_row_to_object
from utils.custom_exceptions import BusinessException
from collections import defaultdict


def create_result(data):
    proj_name = data['proj_name']
    post_username=data["post_username"]
    post_social_media = data["post_social_media"]
    post_time = data["post_time"]
    field_name=data['field_name']
    # check if project exist
    project = project_service.find_by_pk(proj_name)
    if not project:
        raise BusinessException("project not exists")

    # check if post exist:
    post=post_service.get_by_pk(post_username,post_social_media,post_time)
    if not post:
        raise BusinessException("post not exists")

    try:
        flag=result_dao.insert_result(data)
    except IntegrityError as e:
        if e.errno == 1062:  # 1062 = duplicate entry
            raise BusinessException("Duplicate entry: result already exists")
        else:
            raise BusinessException()
    return flag

def qry_results(proj_name, post_username,post_social_media,post_time,field_name):
    rows = result_dao.qry_results(proj_name, post_username,post_social_media,post_time,field_name)
    res=group_result_rows(rows)
    return res



def find_one(proj_name,post_username,post_social_media,post_time,field_name):
    row=result_dao.get_by_pk(proj_name,post_username,post_social_media,post_time,field_name)
    return map_row_to_object(Result,row)




def group_result_rows(rows):
    result = []
    proj_map = {}

    for row in rows:
        proj_name = row["proj_name"]
        post_key = (row["post_username"], row["post_social_media"], row["post_time"])

        if proj_name not in proj_map:
            proj_map[proj_name] = {}
            result.append({
                "proj_name": proj_name,
                "posts": []
            })

        proj = proj_map[proj_name]

        if post_key not in proj:
            # Format the time
            formatted_time = row["post_time"]
            if isinstance(formatted_time, datetime):
                formatted_time = formatted_time.strftime("%Y-%m-%d %H:%M:%S")

            post_obj = {
                "post_username": row["post_username"],
                "post_socialmedia": row["post_social_media"],
                "post_time": formatted_time,
                "fileds": []
            }
            proj[post_key] = post_obj
            # Append to outer "posts" list
            for p in result:
                if p["proj_name"] == proj_name:
                    p["posts"].append(post_obj)

        proj[post_key]["fileds"].append({
            "field_name": row["field_name"],
            "field_value": row["field_value"]
        })

    return result