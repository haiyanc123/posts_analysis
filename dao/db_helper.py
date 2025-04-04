from db_config import get_db_connection

def execute_query(query, params=None, fetchone=False, fetchall=False, commit=False):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute(query, params or ())

    result = None
    if fetchone:
        result = cursor.fetchone()
    elif fetchall:
        result = cursor.fetchall()
    elif commit:
        conn.commit()
        if query.strip().lower().startswith("insert"):
            result = cursor.lastrowid
        else:
            result = cursor.rowcount

    cursor.close()
    conn.close()
    return result
