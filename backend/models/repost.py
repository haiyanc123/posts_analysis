from dataclasses import dataclass
from datetime import datetime

@dataclass
class RePost:
    repo_username: str
    repo_social_media: str
    repo_time: datetime
    post_username: str
    post_social_media: str
    post_time: datetime
