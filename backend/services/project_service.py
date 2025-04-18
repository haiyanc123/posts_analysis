from mysql.connector import IntegrityError

from dao import project_dao
from models.project import Project
from utils.covert_util import map_row_to_object, map_rows_to_objects
from utils.custom_exceptions import BusinessException


def qry_projects(proj_name,institute):
    rows=project_dao.qry_projects(proj_name, institute)
    return map_rows_to_objects(Project,rows)

def find_by_pk(proj_name):
    row=project_dao.get_by_pk(proj_name)
    return map_row_to_object(Project, row)

def create_project(data):
    start_date=data['start_date']
    end_date=data['end_date']
    if end_date < start_date:
        raise BusinessException("end date has to be at least the same as the start time")
    try:
        flag=project_dao.insert_project(data)
    except IntegrityError as e:
        if e.errno == 1062:  # 1062 = duplicate entry
            raise BusinessException("Duplicate entry: project already exists")
        else:
            raise BusinessException()
    return flag