from app.db.database import engine
from app.db.database import Base
from app.models.manuscript import Manuscript

Base.metadata.create_all(bind=engine)

print("Database tables created successfully")