import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// Import CSS
import "./App.css";

// Import Components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Portal from "./components/Portal";
import Login from "./components/Login";
import Contact from "./components/Contact";

// Current Page Set State
export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Explore") {
      return <Explore />;
    }
    if (currentPage === "Portal") {
      return <Portal />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}
