import { gql } from "@apollo/client";

export const usagesQuery = (elementOfDecor) =>
  gql`
    query UsagesOf${elementOfDecor} {
      usages(where: { applied: { _eq: ${elementOfDecor} } }) {
        id
        name
      }
    }
  `;

export const categoriesByUsageQuery = (applies, chosenUsage) =>
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

export const itemsByCategoryQuery = (chosenCategory) =>
  gql`
    query ItemsByCategory${chosenCategory.id} {
      categories_by_pk(id: ${chosenCategory.id}) {
        items {
          id
          name
          height
          width
        }
      }
    }

    `;
