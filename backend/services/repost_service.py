from datetime import datetime

from mysql.connector import IntegrityError

from dao import post_dao, repost_dao
from models.post import Post
from models.repost import RePost
from utils.covert_util import map_rows_to_objects,map_row_to_object
from services import user_service, post_service
from utils.custom_exceptions import BusinessException


def create_repost(data):
    # Example business rule
    post_username=data["post_username"]
    post_social_media=data['post_social_media']
    post_time = data['post_time']
    repo_username = data["repo_username"]
    repo_social_media = data['repo_social_media']
    user=user_service.find_user_by_pk(repo_username,repo_social_media)
    if not user:
        raise BusinessException("reposter not exists")

    post=post_service.get_by_pk(post_username,post_social_media,post_time)
    if not post:
        raise BusinessException("post not exists")

    try:
        flag=repost_dao.insert_repost(data)
    except IntegrityError as e:
        if e.errno == 1062:
            raise BusinessException("Duplicate entry: repost already exists")
        else:
            raise BusinessException()
    return flag


def qry_reposts(post_username,post_social_media):
    rows = repost_dao.find_reposts(post_username,post_social_media)
    # convert dicts to dataclass objects
    return map_rows_to_objects(RePost,rows)