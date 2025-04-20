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

def qry_results(proj_name):
    query="""
    select  r.*, p.text
    from result r
    join post p 
      on r.post_username = p.post_username
      and r.post_social_media = p.post_social_media
      and r.post_time = p.post_time
      where r.proj_name = %s
    """
    return execute_query(query,(proj_name,),fetchall=True)

def qry_coverage(proj_name):
    query="""
    select  
    r.field_name,
    COUNT(DISTINCT CONCAT(r.post_username, '|', r.post_social_media, '|', r.post_time)) count,
    (SELECT COUNT(DISTINCT CONCAT(post_username, '|', post_social_media, '|', post_time)) 
       FROM result r2 WHERE r2.proj_name = %s) total
    from result r
    where r.proj_name =%s
    group by r.field_name;
    """
    return execute_query(query, (proj_name,proj_name), fetchall=True)


