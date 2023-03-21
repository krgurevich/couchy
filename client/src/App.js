import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import "bootstrap/dist/css/bootstrap.min.css";

// Import CSS
import "./App.css";

// Import Components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Portal from "./components/Portal";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Contact from "./components/Contact";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// return (
//   <Router>
//     <div>
//       <LoginForm />
//       <Switch>
//         <Route exact path="/SignupForm" component={SignupForm} />
//       </Switch>
//     </div>
//   </Router>
// );

// Current Page Set State
export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    else if (currentPage === "Explore") {
      return <Explore />;
    }
    else if (currentPage === "Portal") {
      return <Portal />;
    }
    else if (currentPage === "LoginForm") {
      return <LoginForm />;
    }
    else if (currentPage === "SignupForm") {
      return <SignupForm />;
    }
    else { return <Contact />; }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <ApolloProvider client={client}>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </ ApolloProvider>
    </>
  );
}
