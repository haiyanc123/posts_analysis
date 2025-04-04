from flask import Blueprint, jsonify, request
from services import user_service
from models.user import User

users_bp = Blueprint('user', __name__)

@users_bp.route('/', methods=['GET'])
def list_users():
    """
    Get all users
    ---
    responses:
      200:
        description: A list of users
    """
    users = user_service.get_all_users()
    return jsonify(users)

@users_bp.route('/', methods=['POST'])
def create_user():
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
            username:
              type: string
            social_media:
              type: string
            is_verified:
              type: boolean
            first_name:
              type: string
            last_name:
              type: string
            birth_country:
              type: string
            residence_country:
              type: string
            age:
              type: integer
            gender:
              type: integer
    responses:
      201:
        description: User created
    """
    data = request.json
    user = User(**data)
    user_service.create_user(user)
    return jsonify({'message': 'User created'}), 201

@users_bp.route('/detail', methods=['GET'])
def list_or_find_user():
    """
    Get all users or find user by username and social_media
    ---
    parameters:
      - name: username
        in: query
        type: string
        required: false
      - name: social_media
        in: query
        type: string
        required: false
    responses:
      200:
        description: a single user
      404:
        description: User not found
    """
    username = request.args.get('username')
    social_media = request.args.get('social_media')

    if username and social_media:
        user = user_service.find_user_by_pk(username, social_media)
        if user:
            return jsonify(user.__dict__)
        else:
            return jsonify({'message': 'User not found'}), 404