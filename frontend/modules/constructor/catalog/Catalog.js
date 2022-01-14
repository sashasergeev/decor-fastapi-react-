import { useState, useEffect } from "react";

import CatalogList from "./CatalogList";
import * as styled from "../../../styles/constructor";

const Catalog = ({ usage, applies, changeElement }) => {
  const [category, setCategory] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  const fetchCategories = async () => {
    const url = `http://127.0.0.1:8000/category/usage?applies=${applies.toLowerCase()}&usage=${usage}`;
    const res = await fetch(url);
    const data = await res.json();
    setCategoriesList(data);
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
