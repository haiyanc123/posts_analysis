from flask import Blueprint, jsonify, request


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
            posts_results:
              type: string
    responses:
      201:
        description: post created
    """
    data = request.json
    # user = User(**data)
    # user_service.create_user(user)
    return jsonify({'message': 'results created'}), 201