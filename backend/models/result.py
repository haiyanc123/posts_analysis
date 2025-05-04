from dataclasses import dataclass
from datetime import datetime


@dataclass
class Result:
    proj_name: str
    post_username: str
    post_social_media: str
    post_time: datetime
    field_name: str
    field_value: str
