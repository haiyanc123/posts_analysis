from dao.db_helper import execute_query
from models.user import User


def get_all_users(username, social_media):
    query="""
    SELECT * FROM user where 1=1
    """
    params=[]
    if username:
        query += " AND username = %s"
        params.append(username)
    if social_media:
        query += " AND social_media = %s"
        params.append(social_media)
    return execute_query(query,params, fetchall=True)

def get_user_by_pk(username,social_media):
    return execute_query("SELECT * FROM user WHERE username = %s and social_media= %s", (username,social_media), fetchone=True)

def insert_user(data):
    query = """
        INSERT INTO user (
            username, social_media, is_verified, first_name, last_name,
            birth_country, residence_country, age, gender
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    params = (
        data.get("username"),
        data.get("social_media"),
        data.get("is_verified"),
        data.get("first_name"),
        data.get("last_name"),
        data.get("birth_country"),
        data.get("residence_country"),
        data.get("age"),
        data.get("gender")
    )
    return execute_query(query, params, commit=True)

