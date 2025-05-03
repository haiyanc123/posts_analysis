from models.post import Post
from dao.db_helper import execute_query

def insert_repost(data):
    query = """
        INSERT INTO repost (
            repo_username, repo_social_media,repo_time,
            post_username, post_social_media,post_time
        ) VALUES (%s, %s, %s, %s, %s, %s)
    """
    values = (
        data.get('repo_username'),
        data.get('repo_social_media'),
        data.get('repo_time'),
        data.get('post_username'),
        data.get('post_social_media'),
        data.get('post_time')
    )
    return execute_query(query, values, commit=True)

def find_reposts(post_username,post_social_media):
    base_query = """
          select  * from repost where 1 = 1
      """
    params = []

    if post_username:
        base_query += " and post_username = %s"
        params.append(post_username)
    if post_social_media:
        base_query+="and post_social_media=%s "
        params.append(post_social_media)

    return execute_query(base_query, params, fetchall=True)

