from dao import user_dao
from models.user import User
from utils.covert_util import map_rows_to_objects,map_row_to_object

def create_user(user: User):
    # Example business rule
    if user.age and not (0 <= user.age <= 120):
        raise ValueError("Age must be between 0 and 120")

    return user_dao.insert_user(user)

def get_all_users():
    rows = user_dao.get_all_users()
    # convert dicts to dataclass objects
    return map_rows_to_objects(User, rows)
    return users

def find_user_by_pk(username, social_media):
    row=user_dao.get_user_by_pk(username, social_media)
    return map_row_to_object(User,row)
