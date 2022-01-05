import React, { useState } from "react";
import * as styled from "../styles";
import CatalogList from "./CatalogList";

import { fetchCategories } from "../../api/constructor";
import { useQuery } from "react-query";

const Catalog = ({ usage, applies, changeElement }) => {
  const [category, setCategory] = useState(false);

  const { data: categoriesList } = useQuery(
    `${usage} ${applies}`,
    fetchCategories,
    {
      select: (data) => data.data,
      staleTime: Infinity,
    }
  );

  return (
    <>
      <styled.Catalog.Title>
        <span onClick={() => setCategory(false)}>Catalog</span>
        {category && " > " + category.name}
      </styled.Catalog.Title>

      {!category ? (
        <styled.Catalog.Container>
          {categoriesList &&
            categoriesList.map((e) => (
              <styled.Catalog.CategoryBox
                key={e.id}
                onClick={() => setCategory({ id: e.id, name: e.name })}
              >
                {e.name}
              </styled.Catalog.CategoryBox>
            ))}
        </styled.Catalog.Container>
      ) : (
        <>
          <CatalogList
            usage={usage}
            changeElement={changeElement}
            category={category}
          />
        </>
      )}
    </>
  );
};

export default Catalog;
