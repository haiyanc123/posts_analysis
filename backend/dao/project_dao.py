from dao.db_helper import execute_query
from models.project import Project
def qry_projects(proj_name,institute):
    query="""
    select * from project where 1=1
    """
    parameters=[]
    if proj_name:
        query+=" and proj_name=%s "
        parameters.append(proj_name)
    if institute:
        query+=" and institute=%s "
        parameters.append(institute)
    return execute_query(query,parameters,fetchall=True)

def insert_project(data):
    query = """
            INSERT INTO project (
                proj_name, institute, manager, start_date, end_date
            ) VALUES (%s, %s, %s, %s, %s)
        """
    values = (
        data.get('proj_name'),
        data.get('institute'),
        data.get('manager'),
        data.get('start_date'),
        data.get('end_date')
    )
    return execute_query(query, values, commit=True)

def get_by_pk(proj_name):
    query="""
    select * from project where proj_name=%s
    """
    return execute_query(query,(proj_name,),fetchone=True)
