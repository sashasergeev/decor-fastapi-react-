import { useEffect } from "react";

import { fetchCategories, setCatalog } from "../store/actions";

import SkeletonList from "./SkeletonList";

import * as styled from "../../../styles/constructor";
import CatalogList from "./CatalogList";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Catalog = () => {
  // redux
  const dispatch = useAppDispatch();
  const { chosenCategory: category, categories: categoriesList } =
    useAppSelector(({ catalog }) => catalog);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

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
        {category && category.name && ` > ${category.name}`}
      </styled.Catalog.Title>

      {!category ? (
        <styled.Catalog.Container>
          {categoriesList?.length !== 0 ? (
            categoriesList?.map((e) => (
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
            ))
          ) : (
            <SkeletonList width={234} height={23} size={5} />
          )}
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
