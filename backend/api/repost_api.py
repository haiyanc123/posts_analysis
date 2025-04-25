from flask import Blueprint, jsonify, request
from models.post import Post
from schemas.repost_schema import RePostCreateSchema
from services import post_service, repost_service
from schemas.post_schema import PostCreateSchema,PostQuerySchema
from utils.response_util import success_response, error_response
from utils.serialize_util import serialize

repost_bp = Blueprint('repost', __name__)



@repost_bp.route('/', methods=['POST'])
def create_repost():
    """
    repost a post
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          properties:
            repo_username:
              type: string
            repo_social_media:
              type: string
            repo_time:
              type: string
            post_username:
              type: string
            post_social_media:
              type: string
            post_time:
              type: string
    responses:
      201:
        description: post created
    """
    data=RePostCreateSchema().load(request.json)
    repost_service.create_repost(data)
    return success_response()

@repost_bp.route('/', methods=['GET'])
def qry_list():
    """
    Find posts of a certain social media
    ---
    parameters:
      - name: post_social_media
        in: query
        type: string
        required: false
      - name: post_username
        in: query
        type: string
        required: false
    responses:
      200:
        description: A list of posts
    """
    post_username = request.args.get('post_username')
    post_social_media = request.args.get('post_social_media')

    reposts=repost_service.qry_reposts(post_username,post_social_media)
    return success_response(data=serialize(reposts))

