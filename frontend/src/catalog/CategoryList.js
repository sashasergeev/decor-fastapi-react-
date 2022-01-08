import React, { useState } from "react";
import { useQuery } from "react-query";

import { Category, Container, SectionTitle, Item, Icon } from "./styles";

import { fetchAllCategories } from "../api/catalog";

const CategoryList = () => {
  const { data: categories } = useQuery("categories", fetchAllCategories, {
    select: (data) => data.data,
    staleTime: Infinity,
  });
  const [current, setCurrent] = useState(false);

  return (
    <>
      <SectionTitle>Категории Декора</SectionTitle>

      <Container>
        {categories &&
          !current &&
          categories.map((e, inx) => (
            <Category.Box
              to={`category/${e.id}`}
              key={inx}
              onClick={() => setCurrent(e.name)}
            >
              <Item.Picture src={e.image} />
              <Category.Title>{e.name}</Category.Title>

              <Category.Description>
                <div>
                  <Icon.Info />
                </div>
                <div>{e.description}</div>
              </Category.Description>
            </Category.Box>
          ))}
      </Container>
    </>
  );
};

export default CategoryList;
