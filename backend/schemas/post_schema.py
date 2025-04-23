from marshmallow import Schema,fields,validate

from utils.common_util import not_blank


class PostCreateSchema(Schema):
    post_username= fields.String(required=True,validate=[not_blank,validate.Length(min=1,max=40)])
    post_social_media=fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    text=fields.String(required=True, validate=[not_blank,validate.Length(min=1)])
    has_multimedia=fields.Integer(validate=validate.OneOf([0,1]))
    post_time=fields.DateTime(format="%Y-%m-%d %H:%M:%S")
    likes_num=fields.Integer(validate=validate.Range(min=0))
    dislike_num=fields.Integer(validate=validate.Range(min=0))
    city=fields.String(validate=validate.Length(max=255))
    state=fields.String(validate=validate.Length(max=255))
    country=fields.String(validate=validate.Length(max=255))

class PostQuerySchema(Schema):
    post_username = fields.String(validate=validate.Length(max=40))
    post_social_media = fields.String()
    start_time=fields.DateTime(format='%Y-%m-%d %H:%M:%S')
    end_time = fields.DateTime(format='%Y-%m-%d %H:%M:%S')
    first_name=fields.String()
    last_name=fields.String()





