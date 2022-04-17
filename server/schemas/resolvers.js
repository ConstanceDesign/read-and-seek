const { User, Book } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("savedBooks");
    },
    books: async () => {
      return Book.find();
    },
  },
};

module.exports = resolvers;
