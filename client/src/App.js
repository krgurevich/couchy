import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import CSS
import "./App.css";

// Import Components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Portal from "./components/Portal";
import LoginForm from "./components/LoginForm";
import Contact from "./components/Contact";
import SignupForm from "./components/SignupForm";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Current Page Set State
export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route exact element={<Home />} path="/" />
            <Route element={<Explore />} path="/explore" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<LoginForm />} path="/login" />
            <Route element={<Portal />} path="/portal" />
            <Route element={<SignupForm />} path="/signup" />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  );
}
