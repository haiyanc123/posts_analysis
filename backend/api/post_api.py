from flask import Blueprint, jsonify, request

post_bp = Blueprint('post', __name__)

@post_bp.route('/', methods=['GET'])
def list_posts():
    """
    Get all posts
    ---
    responses:
      200:
        description: A list of posts
    """
    # users = user_service.get_all_users()
    # return jsonify(users)

@post_bp.route('/', methods=['POST'])
def create_post():
    """
    Create a new user
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            post_id:
              type: integer
            username:
              type: string
            social_media:
              type: string
            text:
              type: string
            has_multimedia:
              type: integer
            time:
              type: string
            likes_num:
              type: integer
            dislike_num:
              type: integer
            city:
              type: string
            state:
              type: string
            country:
              type: string
    responses:
      201:
        description: post created
    """
    data = request.json
    # user = User(**data)
    # user_service.create_user(user)
    return jsonify({'message': 'post created'}), 201

@post_bp.route('/detail', methods=['GET'])
def find_post_detail():
    """
    Get all users or find user by username and social_media
    ---
    parameters:
      - name: post_id
        in: query
        type: integer
        required: true
    responses:
      200:
        description: a single user
      404:
        description: User not found
    """
    post_id_ = request.args.get('post_id')

@post_bp.route('list', methods=['GET'])
def qry_list_by_social_media():
    """
    Find posts of a certain social media
    ---
    parameters:
      - name: social_media
        in: query
        type: string
        required: false
      - name: start_time
        in: query
        type: string
        required: false
      - name: end_time
        in: query
        type: string
        required: false
      - name: username
        in: query
        type: string
        required: false
      - name: first_name
        in: query
        type: string
        required: false
      - name: last_name
        in: query
        type: string
        required: false
    responses:
      200:
        description: A list of posts
    """

