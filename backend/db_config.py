from config import DB_CONFIG
import mysql.connector

def get_db_connection():
    return mysql.connector.connect(**DB_CONFIG)
