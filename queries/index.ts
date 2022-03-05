import { gql } from "@apollo/client";

export const usagesQuery = (elementOfDecor: string) =>
  gql`
    query UsagesOf${elementOfDecor} {
      usages(where: { applied: { _eq: ${elementOfDecor} } }) {
        id
        name
      }
    }
  `;

export const categoriesByUsageQuery = (applies: string, chosenUsage: string) =>
  gql`
    query Categories${applies}${chosenUsage} {
      categories(
        where: {
          usages: {
            usage: { applied: { _eq: ${applies} }, name: { _eq: ${chosenUsage} } }
          }
        }
      ) {
        id
        name
        description
      }
    }
  `;

export const itemsByCategoryQuery = (chosenCategoryID: number) =>
  gql`
    query ItemsByCategory${chosenCategoryID} {
      categories_by_pk(id: ${chosenCategoryID}) {
        items {
          id
          name
          height
          width
          category_id
        }
      }
    }

    `;
