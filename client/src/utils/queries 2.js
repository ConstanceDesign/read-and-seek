import { gql } from "@apollo/client";

export const GET_ME = gql`
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
