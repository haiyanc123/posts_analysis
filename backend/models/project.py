from dataclasses import dataclass
from typing import Optional
from datetime import datetime

@dataclass
class Project:
    proj_name: str
    institute: str
    manager: str
    start_date: datetime
    end_date: datetime