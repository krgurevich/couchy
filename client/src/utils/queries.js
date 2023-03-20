import { gql } from "@apollo/client";

export const GET_ME = gql`
query me{
    me{
    id
    name
    email
    posts
    }
}

`;

export const GET_SINGLE_USER = gql`
query getUserById($id:ID!){
    user(id:$id) {
    id
    name
    email
    posts
    }
}
`;

export const GET_USERS = gql`
query allUsers{
    users{
        id
        name 
        email
        posts
    }
}
`;

export const GET_SINGLE_LISTING = gql`
query getListingById($id:ID!){
    listing{
        _id
        title
        description
        price
        location 
        host
        reservations
        commments
    }
}
`;


export const GET_LISTINGS = gql`
query getListings{
listings{
    _id
        title
        description
        price
        location 
        host
        reservations
        commments
}
}`;

export const GET_LISTING_USER = gql`
query getListingByUserId($id:ID!){
    listing{
        _id
        title
        description
        price
        location 
        host
        reservations
        commments
    }
}
`;
export const GET_COMMENTS = gql`
query getComments{
comments{
_id
listing
user
text
}
}
`;

// export const GET_SINGLE_RESERVATION = gql``;

// export const GET_RESERVATIONS = gql``;


// export const GET_SINGLE_TRANSACTION = gql``;

// export const GET_TRANSACTIONS = gql``;