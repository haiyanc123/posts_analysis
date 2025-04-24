from datetime import datetime

from flask import Blueprint, jsonify, request
from models.post import Post
from services import post_service
from schemas.post_schema import PostCreateSchema,PostQuerySchema
from utils.custom_exceptions import BusinessException
from utils.response_util import success_response, error_response
from utils.serialize_util import serialize

post_bp = Blueprint('post', __name__)



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
            post_username:
              type: string
            post_social_media:
              type: string
            text:
              type: string
            has_multimedia:
              type: integer
            post_time:
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
    data=PostCreateSchema().load(request.json)
    post_service.create_post(data)
    return success_response()

# @post_bp.route('/detail', methods=['GET'])
# def find_post_detail():
#     """
#     Get all users or find user by username and social_media
#     ---
#     parameters:
#       - name: post_id
#         in: query
#         type: integer
#         required: true
#     responses:
#       200:
#         description: a single user
#       404:
#         description: User not found
#     """
#     post_id_ = request.args.get('post_id')
#     if not post_id_:
#         return error_response(message="invalid request")
#     post=post_service.find_user_by_pk(post_id_)
#     if post:
#         return success_response(data=serialize(post))
#     else:
#         return error_response(message="post not exists")

@post_bp.route('/', methods=['GET'])
def qry_list():
    """
    Find posts of a certain social media
    ---
    parameters:
      - name: post_social_media
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
      - name: post_username
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
    post_username = request.args.get('post_username')
    post_social_media = request.args.get('post_social_media')
    start_time_str = request.args.get('start_time')
    end_time_str = request.args.get('end_time')
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')
    try:
        start_time = (
            datetime.strptime(start_time_str, "%Y-%m-%d %H:%M:%S") if start_time_str else None
        )
    except ValueError:
        raise BusinessException("start_time format is not allowed")
    try:
        end_time = (
            datetime.strptime(end_time_str, "%Y-%m-%d %H:%M:%S") if end_time_str else None
        )
    except ValueError:
        raise BusinessException("end_time format is not allowed")
    if start_time and end_time and start_time > end_time:
        raise BusinessException("end_time must be after start_time")

    posts=post_service.qry_posts(post_username,post_social_media,start_time,end_time,first_name,last_name)
    return success_response(data=serialize(posts))

@post_bp.route('/dropdown', methods=['GET'])
def qry_post_dropdown():
    """
    Find dropdown for posts
    ---
    responses:
      200:
        description: A list of posts
    """

    res=post_service.qry_dropdown()
    return success_response(data=res)
