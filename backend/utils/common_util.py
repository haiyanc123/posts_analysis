from utils.custom_exceptions import BadRequestException


def not_blank(value):
    if not value or not value.strip():
        raise BadRequestException("value cannot be blank.")