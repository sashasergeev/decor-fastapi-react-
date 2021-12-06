from sqlalchemy import Column, DateTime, String, Integer, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import column
from sqlalchemy.sql.schema import Table

from database import Base

class BasicColumnMixin(object):
    id = Column(Integer, primary_key=True)
    name = Column(String(40), unique=True)


category_to_usage = Table("category_to_usage", Base.metadata, 
                        Column("category_id", ForeignKey("category.id"), primary_key=True),
                        Column("usage_id", ForeignKey("category_usage.id"), primary_key=True))


class Usage(BasicColumnMixin, Base):
    __tablename__ = "category_usage"


class Category(BasicColumnMixin, Base):
    __tablename__ = "category"
    items = relationship("DecorItem", backref="category", passive_deletes=True)
    usage = relationship("Usage", secondary=category_to_usage, backref="category")


class DecorItem(BasicColumnMixin, Base):
    __tablename__ = "decor_item"
    name = Column(String(40), unique=True)
    category_id = Column(Integer, ForeignKey("category.id", ondelete="CASCADE"))
    height = Column(Integer)
    width = Column(Integer)

    # Store image as link
    image = Column(String)
    # Store file for 3d as link
    model_3d = Column(String)

    price = column(Integer)
