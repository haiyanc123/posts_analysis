from marshmallow import Schema, fields, validate

from utils.common_util import not_blank


class ResultCreateSchema(Schema):
    proj_name = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=100)])
    post = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=500)])
    field_name = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    field_value = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
