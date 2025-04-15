from marshmallow import Schema, fields,validate
class ProjectCreateSchema(Schema):
    proj_name=fields.String(required=True, validate=validate.Length(max=100))
    institute=fields.String(required=True, validate=validate.Length(max=255))
    manager=fields.String(required=True, validate=validate.Length(max=255))
    start_date=fields.DateTime(required=True, format="%Y-%m-%d %H:%M:%S")
    end_date=fields.DateTime(required=True, format="%Y-%m-%d %H:%M:%S")

class ProjectFilterSchema(Schema):
    proj_name = fields.String(required=True)
    institute = fields.String(required=True)
