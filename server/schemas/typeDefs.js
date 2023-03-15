const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]
  }

  type Listing {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    location: String!
    host: User!
    reservations: [Reservation!]
    comments: [Comment!]
  }

  type Reservation {
    _id: ID!
    listing: Listing!
    guest: User!
    checkIn: String!
    checkOut: String!
  }

  type Comment {
    _id: ID!
    listing: Listing!
    user: User!
    text: String!
  }

  type Transaction {
    _id: ID!
    reservation: Reservation!
    totalPrice: Float!
    paid: Boolean!
  }

  type Query {
    users: [User!]
    user(id: ID!): User
    listings: [Listing!]
    listing(id: ID!): Listing
    reservations: [Reservation!]
    reservation(id: ID!): Reservation
    comments: [Comment!]
    comment(id: ID!): Comment
    transactions: [Transaction!]
    transaction(id: ID!): Transaction
  }

  input UserInput {
    name: String!
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

  input ReservationInput {
    listing: ID!
    guest: ID!
    checkIn: String!
    checkOut: String!
  }

  input CommentInput {
    listing: ID!
    user: ID!
    text: String!
  }

  input TransactionInput {
    reservation: ID!
    totalPrice: Float!
    paid: Boolean!
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User
    createListing(input: ListingInput!): Listing
    updateListing(id: ID!, input: ListingInput!): Listing
    deleteListing(id: ID!): Listing
    createReservation(input: ReservationInput!): Reservation
    updateReservation(id: ID!, input: ReservationInput!): Reservation
    deleteReservation(id: ID!): Reservation
    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deleteComment(id: ID!): Comment
    createTransaction(input: TransactionInput!): Transaction
    updateTransaction(id: ID!, input: TransactionInput!): Transaction
    deleteTransaction(id: ID!): Transaction
  }
`;


module.exports = typeDefs;
