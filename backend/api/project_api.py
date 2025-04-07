from flask import Blueprint, jsonify, request


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
    # users = user_service.get_all_users()
    # return jsonify(users)

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
    data = request.json
    # user = User(**data)
    # user_service.create_user(user)
    return jsonify({'message': 'post created'}), 201

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
