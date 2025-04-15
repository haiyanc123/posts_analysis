from marshmallow import ValidationError
from utils.custom_exceptions import BadRequestException, BusinessException
from utils.response_util import error_response

def register_error_handlers(app):
    @app.errorhandler(ValidationError)
    def handle_validation_error(e):
        msg = "; ".join(
            f"{field}: {', '.join(errors)}"
            for field, errors in e.messages.items()
        )
        return error_response(msg, code="VALIDATION_ERROR", status_code=400)

    @app.errorhandler(BadRequestException)
    def handle_bad_request(e):
        return error_response(e.message, code=e.code, status_code=400)

    @app.errorhandler(BusinessException)
    def handle_business_error(e):
        return error_response(e.message, code=e.code, status_code=422)

    @app.errorhandler(Exception)
    def handle_generic_error(e):
        return error_response("Internal server error", code="SERVER_ERROR", status_code=500)
