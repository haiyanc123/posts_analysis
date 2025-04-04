# Tech Stack:
Language: Python 3+
Framework: Flask
Database: MYSQL 5.7+(via mysql-connector-python)

# how to start program:
python app.py or click run button inside app.py


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






