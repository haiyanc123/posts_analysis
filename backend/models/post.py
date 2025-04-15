from dataclasses import dataclass
from datetime import datetime
from typing import Optional

@dataclass
class Post:
    post_username: str
    post_social_media: str
    text: str
    post_time: datetime
    has_multimedia: Optional[int] = None
    likes_num: Optional[int] = None
    dislike_num: Optional[int] = None
    city: Optional[str] = None
    state: Optional[str] = None
    country: Optional[str] = None
