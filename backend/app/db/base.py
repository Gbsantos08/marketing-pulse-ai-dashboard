# Remova estas linhas:
# from backend.app.db.models import Base, Campaign, Comment
# from backend.app.db.session import engine

# Substitua por:
from app.db.models import Base, Campaign, Comment
from app.db.session import engine

def create_db_and_tables():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    create_db_and_tables()
    print("Database and tables created!")