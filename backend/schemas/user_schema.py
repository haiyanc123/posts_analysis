from marshmallow import Schema, fields, validate

from utils.common_util import not_blank


class CreateUserSchema(Schema):
    username = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=40)])
    social_media = fields.String(required=True, validate=[not_blank,validate.Length(min=1,max=255)])
    is_verified = fields.Integer(validate=validate.OneOf([0, 1]))
    first_name = fields.String(required=False, validate=validate.Length(max=255))
    last_name = fields.String(required=False,validate=validate.Length(max=255))
    birth_country = fields.String(required=False, validate=validate.Length(max=255))
    residence_country = fields.String(required=False, validate=validate.Length(max=255))
    age = fields.Integer(validate=validate.Range(min=0, max=120))
    gender = fields.Integer(validate=validate.OneOf([0, 1, 2]))

class UserQuerySchema(Schema):
    username = fields.String()
    social_media = fields.String()
    first_name = fields.String()
    last_name = fields.String()
