import gql from "graphql-tag";

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
