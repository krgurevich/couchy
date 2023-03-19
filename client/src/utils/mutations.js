import { gql } from '@apollo-client';
// user crud
export const CREATE_USER = gql`
mutation createUser($input:userInput!) {
createUser(userInput:$input){
name
email
password
}
}
`;
export const UPDATE_USER = gql`mutation updateUser($id:ID!, $input:userInput) {
updateUser(userInput:$input){
name
email
password
}
}
`;

export const DELETE_USER = gql`deleteUser($id:ID!){

deleteUser(id:$id){id 
name 
email
posts}
} `;

// listing crud
export const CREATE_LISTING = gql`mutation createListing($input: ListingInput){
createListing(input:$input){
_id
title
description
price
location
host
}}`;
export const UPDATE_LISTING = gql` mutation updateListing($_id: ID!, $input: ListingInput){
updateListing(input:$input){
title
description
total
price
location
}
}`;
export const DELETE_LISTING = gql`mutation deleteListing($_id:ID!)
{
deleteListing(_id:$_id) {
_id
title
description
price
location 
host
}
}`;

// comment crud
export const CREATE_COMMENT = gql`mutation createComment($input:CommentInput) {
createComment(input:$input){
listing
user
text
}
}`;
export const UPDATE_COMMENT = gql` mutation updateComment($_id: ID!, $input:CommentInput){
updateComment(_id:$_id, input:$input)
{
listing 
user
text
}
}
`;
export const DELETE_COMMENT = gql` mutation deleteComment($_id:ID!){
deleteComment(_id:$id)
{
_id
listing
user
text
}
}`;