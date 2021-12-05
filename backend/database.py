from sqlalchemy.engine import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine("sqlite:///deco.db", echo=True)

session = sessionmaker()
session.configure(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
