from flask import Blueprint, jsonify, request

from schemas.result_schema import ResultCreateSchema
from services import result_service
from utils.custom_exceptions import BusinessException
from utils.response_util import success_response
from utils.serialize_util import serialize

result_bp = Blueprint('result', __name__)
@result_bp.route('/', methods=['POST'])
def create_result():
    """
    For a project, entering the analysis result
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
            post_username:
              type: string
            post_social_media:
              type: string
            post_time:
              type: string
            field_name:
              type: string
            field_value:
              type: string
    responses:
      201:
        description: post created
    """
    data=ResultCreateSchema().load(request.json)
    result_service.create_result(data)
    return success_response()

@result_bp.route('/', methods=['GET'])
def qry_list():
    """
    Find posts of a certain social media
    ---
    parameters:
      - name: proj_name
        in: query
        type: string
        required: true
    responses:
      200:
        description: A list of analysis results
    """
    proj_name = request.args.get('proj_name')
    if not proj_name:
        raise BusinessException("project_name must not be null")
    res=result_service.qry_results(proj_name)
    return success_response(data=serialize(res))
