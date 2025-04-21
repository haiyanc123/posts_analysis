from marshmallow import Schema,fields,validate

from utils.common_util import not_blank


class RePostCreateSchema(Schema):
    repo_username= fields.String(required=True,validate=[not_blank,validate.Length(min=1,max=40)])
    repo_social_media=fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    repo_time=fields.DateTime(format="%Y-%m-%d %H:%M:%S")
    post_username= fields.String(required=True,validate=[not_blank,validate.Length(min=1,max=40)])
    post_social_media=fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    post_time=fields.DateTime(format="%Y-%m-%d %H:%M:%S")





