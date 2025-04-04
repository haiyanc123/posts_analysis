from flask import Flask
from flasgger import Swagger

from api.user_api import users_bp
from api.post_api import posts_bp

app = Flask(__name__)
swagger = Swagger(app)

# Register blueprints
app.register_blueprint(users_bp, url_prefix='/user')
app.register_blueprint(posts_bp, url_prefix='/post')

if __name__ == '__main__':
    app.run(debug=True)
