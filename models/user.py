from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    username: str
    social_media: str
    is_verified: Optional[bool] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    birth_country: Optional[str] = None
    residence_country: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[int] = None
