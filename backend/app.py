from flask import Flask
from flasgger import Swagger
from flask_cors import CORS

from api.repost_api import repost_bp
from api.user_api import user_bp
from api.post_api import post_bp
from api.project_api import project_bp
from api.result_api import result_bp

from utils.error_handlers import register_error_handlers


app = Flask(__name__)
swagger = Swagger(app=app)

# Register blueprints
app.register_blueprint(user_bp, url_prefix='/user')
app.register_blueprint(post_bp, url_prefix='/post')
app.register_blueprint(project_bp, url_prefix='/project')
app.register_blueprint(result_bp, url_prefix='/result')
app.register_blueprint(repost_bp, url_prefix='/repost')

CORS(app)

register_error_handlers(app)

if __name__ == '__main__':
    app.run(debug=True)
