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


def get_all_users():
    rows = user_dao.get_all_users()
    # convert dicts to dataclass objects
    return map_rows_to_objects(User, rows)

def find_user_by_pk(username, social_media):
    row=user_dao.get_user_by_pk(username, social_media)
    return map_row_to_object(User,row)

