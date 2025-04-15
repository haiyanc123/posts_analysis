from flask import jsonify

def success_response(message="Success", data=None, status_code=200):
    payload = {
        "success": True,
        "message": message,
    }
    if data is not None:
        payload["data"] = data
    return jsonify(payload), status_code

def error_response(message="An error occurred", code="ERROR", status_code=500):
    payload = {
        "success": False,
        "error": message,
        "code": code
    }
    return jsonify(payload), status_code
