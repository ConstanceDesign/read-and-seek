// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type savedBooks {
    _id: ID
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
  }
`;

// export the typeDefs
module.exports = typeDefs;
