import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query {
    me {
      username
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;
