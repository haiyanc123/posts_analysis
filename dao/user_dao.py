from dao.db_helper import execute_query
from models.user import User


def get_all_users():
    return execute_query("SELECT * FROM user", fetchall=True)

def get_user_by_pk(username,social_media):
    return execute_query("SELECT * FROM user WHERE username = %s and social_media= %s", (username,social_media), fetchone=True)

def insert_user(user: User):
    query = """
        INSERT INTO user (
            username, social_media, is_verified, first_name, last_name,
            birth_country, residence_country, age, gender
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    values = (
        user.username,
        user.social_media,
        user.is_verified,
        user.first_name,
        user.last_name,
        user.birth_country,
        user.residence_country,
        user.age,
        user.gender
    )
    return execute_query(query, values, commit=True)