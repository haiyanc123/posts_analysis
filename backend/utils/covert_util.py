
def map_rows_to_objects(cls, rows):
    return [cls(**row) for row in rows]

def map_row_to_object(cls, row):
    return cls(**row) if row else None

