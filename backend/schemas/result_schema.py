from marshmallow import Schema, fields, validate
class ResultCreateSchema(Schema):
    proj_name = fields.String(required=True, validate=validate.Length(max=100))
    post_username = fields.String(required=True, validate=validate.Length(max=40))
    post_social_media = fields.String(required=True, validate=validate.Length(max=255))
    post_time = fields.DateTime(required=True,format="%Y-%m-%d %H:%M:%S")
    field_name = fields.String(required=True, validate=validate.Length(max=255))
    field_value = fields.String(required=True, validate=validate.Length(max=255))
