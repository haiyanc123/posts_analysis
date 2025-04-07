# Tech Stack:

Language: Python 3+, Javascript
Framework: Flask, React
Database: MYSQL 5.7+(via mysql-connector-python)

# how to start program:

python app.py or click run button inside app.py

## Prerequisites for running frontend

Installed the latest version of nodeJs from this link: https://nodejs.org/en

### Build and Run the Frontend

1. Navigate to the frontend module directory using the command below or manually(Frontend Folder):
   ```bash
   cd frontend
   ```
2. Install dependencies and build the project:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm run dev
   ```
   This will typically start the application on port **5173** and open it in your default browser. If not, navigate manually to:
   ```
   http://localhost:5173
   ```

# API docs:

after program starts, visit the following link:
http://127.0.0.1:5000/apidocs

# Dependencies

including flask, mysql-connector-python, flasgger, command as follows:

pip install flask mysql-connector-python flasgger

Note: flasgger is used to add swagger so that api doc can be generated automically

# code structure(multiple packages)

- models/: define entities for each table in the database. E.g. we have user, post, project. etc.
- dao/: handles database CRUD operation (raw SQL)
- services/: business logic layer, middle layer between dao and api package. The implementation of each function inside involves calling function from dao/
- api/: interface, exposed its api in RESTful APIs styles. The implementation of each function inside involves calling function from services/
- utils/: some common util, such as datetime util, convert row into object, etc.

# configurage

all configuration can be placed inside config.py, such as database configuration, swagger config, etc.
