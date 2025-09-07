from mysql.connector import IntegrityError

from dao import user_dao
from models.user import User
from utils.covert_util import map_rows_to_objects,map_row_to_object
from utils.custom_exceptions import BusinessException

def create_user(data):
    try:
        flag=user_dao.insert_user(data)
    except IntegrityError as e:
        if e.errno == 1062:  # 1062 = duplicate entry
            raise BusinessException("Duplicate entry: user already exists")
        else:
            raise BusinessException()
    return flag


def get_all_users(username, social_media):
    rows = user_dao.get_all_users(username, social_media)
    # convert dicts to dataclass objects
    return map_rows_to_objects(User, rows)

def find_user_by_pk(username, social_media):
    row=user_dao.get_user_by_pk(username, social_media)
    return map_row_to_object(User,row)

def update_status(data):
    username = data["username"]
    social_media = data['social_media']
    is_verified = data['is_verified']
    user=find_user_by_pk(username,social_media)
    if not user:
        raise BusinessException("user not exists")
    temp_is_verified=user.is_verified
    if temp_is_verified==is_verified:
        raise BusinessException("user has already been in this status")
    try:
        user_dao.update_status(data)
    except IntegrityError:
        raise BusinessException()

