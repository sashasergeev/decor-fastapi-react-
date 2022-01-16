import { useState, useEffect } from "react";

import CatalogList from "./CatalogList";
import * as styled from "../../../styles/constructor";

import { gql } from "@apollo/client";
import client from "../../../apollo-client";

const Catalog = ({ usage, applies, changeElement }) => {
  const [category, setCategory] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  const fetchCategories = async () => {
    const { data } = await client.query({
      query: gql`
        query Categories${applies}${usage} {
          categories(
            where: {
              usages: {
                usage: { applied: { _eq: ${applies} }, name: { _eq: ${usage} } }
              }
            }
          ) {
            id
            name
            description
          }
        }
      `,
    });

    setCategoriesList(data.categories);
  };

  useEffect(() => fetchCategories(), []);

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
