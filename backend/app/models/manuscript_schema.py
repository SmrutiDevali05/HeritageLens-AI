from sqlalchemy import Column, Integer, String, Text
from app.db.database import Base

class Manuscript(Base):
    __tablename__ = "manuscripts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    language = Column(String)
    region = Column(String)
    original_text = Column(Text)
    translated_text = Column(Text)
    summary = Column(Text)