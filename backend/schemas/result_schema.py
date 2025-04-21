from marshmallow import Schema, fields, validate

from utils.common_util import not_blank


class ResultCreateSchema(Schema):
    proj_name = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=100)])
    post_username = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=40)])
    post_social_media = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    post_time = fields.DateTime(required=True,format="%Y-%m-%d %H:%M:%S")
    field_name = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    field_value = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
