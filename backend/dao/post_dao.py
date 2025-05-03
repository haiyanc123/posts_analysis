from models.post import Post
from dao.db_helper import execute_query


def find_posts(post_username,post_social_media,start_time,end_time, first_name,last_name):
    base_query = """
          select 
            p.*, r. proj_name
        from post p
        join user u on p.post_username = u.username and p.post_social_media = u.social_media
        left join result r
          on p.post_username = r.post_username 
          and p.post_social_media = r.post_social_media 
          and p.post_time = r.post_time
        where 1 = 1
      """
    params = []

    if post_username:
        base_query += " AND p.post_username = %s"
        params.append(post_username)
    if post_social_media:
        base_query+="and p.post_social_media=%s "
        params.append(post_social_media)

    if start_time:
        base_query += " AND p.post_time >= %s"
        params.append(start_time)

    if end_time:
        base_query += " AND p.post_time <= %s"
        params.append(end_time)
    if first_name:
        base_query += " AND u.first_name = %s"
        params.append(first_name)

    if last_name:
        base_query += " AND u.last_name = %s"
        params.append(last_name)
    return execute_query(base_query, params, fetchall=True)

def get_post_by_pk(post_username,post_social_media,post_time):
    query="""
    select * from post where post_username=%s and post_social_media=%s and post_time=%s
    """
    return execute_query(query,(post_username,post_social_media,post_time), fetchone=True)

def qry_all():
    query="""
    select * from post
    """
    return execute_query(query,fetchall=True)

def insert_post(data):
    query = """
        INSERT INTO post (
            post_username, post_social_media, text, has_multimedia, post_time,
            likes_num, dislike_num, city, state, country
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s,%s)
    """
    values = (
        data.get('post_username'),
        data.get('post_social_media'),
        data.get('text'),
        data.get('has_multimedia'),
        data.get('post_time'),
        data.get('likes_num'),
        data.get('dislike_num'),
        data.get('city'),
        data.get('state'),
        data.get('country')
    )
    return execute_query(query, values, commit=True)

