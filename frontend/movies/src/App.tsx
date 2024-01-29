import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import Layout from "./components/layout";
import MovieDetailsPage from "./pages/moviesearch/MovieDetails";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/moviesdetails" element={<MovieDetailsPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
