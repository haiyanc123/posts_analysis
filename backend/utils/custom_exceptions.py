# exceptions/custom_exceptions.py

class BusinessException(Exception):
    def __init__(self, message="Business logic error", code="BUSINESS_ERROR"):
        self.message = message
        self.code = code

class BadRequestException(Exception):
    def __init__(self, message="Invalid request", code="BAD_REQUEST"):
        self.message = message
        self.code = code
