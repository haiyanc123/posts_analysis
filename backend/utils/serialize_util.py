from dataclasses import asdict, is_dataclass
from datetime import datetime, date


def serialize(obj):
    """
    Convert dataclass to dict and format datetime fields as strings.
    Works for single object or list.
    """
    if isinstance(obj, list):
        return [serialize(o) for o in obj]

    if is_dataclass(obj):
        obj = asdict(obj)

    for key, value in obj.items():
        if isinstance(value, datetime):
            obj[key] = value.strftime("%Y-%m-%d %H:%M:%S")
        elif isinstance(value,date):
            obj[key] = value.strftime("%Y-%m-%d")
    return obj
