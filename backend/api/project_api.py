from flask import Blueprint, jsonify, request

from schemas.project_schema import ProjectCreateSchema
from services import project_service
from utils.custom_exceptions import BusinessException, BadRequestException
from utils.response_util import success_response
from utils.serialize_util import serialize

project_bp = Blueprint('project', __name__)

@project_bp.route('/', methods=['GET'])
def list_posts():
    """
    Get all projects
    ---
    responses:
      200:
        description: A list of projects
    """
    proj_name=request.args.get("proj_name")
    institute=request.args.get("institute")
    results=project_service.qry_projects(proj_name,institute)
    return success_response(data=serialize(results))


@project_bp.route('/', methods=['POST'])
def create_project():
    """
    Create a new project
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            proj_name:
              type: string
            institute:
              type: string
            manager:
              type: string
            start_date:
              type: string
            end_date:
              type: string
    responses:
      201:
        description: post created
    """
    data=ProjectCreateSchema().load(request.json)
    project_service.create_project(data)
    return success_response()

@project_bp.route('/detail', methods=['GET'])
def find_project_detail():
    """
    Get all users or find user by username and social_media
    ---
    parameters:
      - name: proj_name
        in: query
        type: string
        required: true
    responses:
      200:
        description: a single project
      404:
        description: project not found
    """
    proj_name = request.args.get('proj_name')
    if not proj_name:
        raise BadRequestException(message="proj_name is not allowed empty")
    project=project_service.find_by_pk(proj_name)
    return success_response(data=project)
