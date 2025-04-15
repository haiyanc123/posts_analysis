from dao.db_helper import execute_query


def insert_result(data):
    query="""
    INSERT INTO result (
            proj_name,post_username, post_social_media, post_time, field_name, field_value
        ) VALUES (%s, %s, %s, %s,%s,%s)
    """
    values = (
        data['proj_name'],
        data['post_username'],
        data['post_social_media'],
        data['post_time'],
        data['field_name'],
        data['field_value']
    )
    return execute_query(query, values, commit=True)

def get_by_pk(proj_name, post_username, post_social_media,post_time,field_name):
    return execute_query("select * from result where proj_name=%s and post_username=%s and post_social_media=%s and post_time=%s and field_name=%s ", (proj_name,post_username, post_social_media,post_time,field_name), fetchone=True)

def qry_results(proj_name,post_username, post_social_media,post_time,field_name):
    query="""
    select * from result where 1=1
    """
    params=[]
    if proj_name:
        query += " AND proj_name = %s"
        params.append(proj_name)
    if post_username:
        query += " AND post_username = %s"
        params.append(post_username)
    if post_social_media:
        query += " AND post_social_media = %s"
        params.append(post_social_media)
    if post_time:
        query += " AND post_time = %s"
        params.append(post_username)
    if field_name:
        query += " AND field_name = %s"
        params.append(field_name)
    return execute_query(query,params,fetchall=True)

