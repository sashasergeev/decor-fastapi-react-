import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, setCatalog } from "../store/actions";

import * as styled from "../../../styles/constructor";
import CatalogList from "./CatalogList";

const Catalog = () => {
  // redux
  const dispatch = useDispatch();
  const { chosenCategory: category, categories: categoriesList } = useSelector(
    ({ catalog }) => catalog
  );

  useEffect(() => dispatch(fetchCategories()), []);

  return (
    <>
      <styled.Catalog.Title>
        <span
          onClick={() =>
            dispatch(setCatalog({ chosenCategory: false, items: [] }))
          }
        >
          Catalog
        </span>
        {category && " > " + category.name}
      </styled.Catalog.Title>

      {!category ? (
        <styled.Catalog.Container>
          {categoriesList &&
            categoriesList.map((e) => (
              <styled.Catalog.CategoryBox
                key={e.id}
                onClick={() =>
                  dispatch(
                    setCatalog({ chosenCategory: { id: e.id, name: e.name } })
                  )
                }
              >
                {e.name}
              </styled.Catalog.CategoryBox>
            ))}
        </styled.Catalog.Container>
      ) : (
        <>
          <CatalogList />
        </>
      )}
    </>
  );
};

export default Catalog;
