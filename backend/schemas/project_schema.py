from marshmallow import Schema, fields,validate

from utils.common_util import not_blank


class ProjectCreateSchema(Schema):
    proj_name=fields.String(required=True,validate=[not_blank,validate.Length(min=1,max=100)])
    institute=fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    manager=fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    start_date=fields.DateTime(required=True, format="%Y-%m-%d")
    end_date=fields.DateTime(required=True, format="%Y-%m-%d")

class ProjectFilterSchema(Schema):
    proj_name = fields.String(required=True)
    institute = fields.String(required=True)
