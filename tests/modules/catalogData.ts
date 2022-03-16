/* 
  DATA FOR MOCKING FETCH
*/

export const CATEGORIES_RES = {
  data: {
    categories: [
      { id: 1, name: "Наличники", description: "CATEGORY DESCRIPTION" },
      { id: 2, name: "Подоконники", description: "CATEGORY DESCRIPTION" },
      { id: 3, name: "Профили", description: "CATEGORY DESCRIPTION" },
    ],
  },
};

export const ITEMS_RES = {
  data: {
    categories_by_pk: {
      items: [
        {
          id: 1,
          name: "нал10",
          height: 14,
          width: 6,
          category_id: 11,
        },
        {
          id: 2,
          name: "нал01",
          height: 8,
          width: 5,
          category_id: 11,
        },
      ],
    },
  },
};
