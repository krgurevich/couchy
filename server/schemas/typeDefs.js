const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    listings: [Listing]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Listing {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    location: String!
    host: User
    createdAt: String
    updatedAt: String
  }
  type Query {
    me: User
    getUsers: [User!]
    getUserById(id: ID!): User
    getListings: [Listing!]
    getListingById(id: ID!): Listing
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input ListingInput {
    title: String!
    description: String!
    price: Float!
    location: String!
    host: ID!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User
    createListing(input: ListingInput!): Listing
    updateListing(id: ID!, input: ListingInput!): Listing
    deleteListing(id: ID!): Listing
  }
`;

module.exports = typeDefs;
