import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import Layout from "./components/layout";
import MovieDetailsPage from "./pages/moviesearch/MovieDetails";
import Login from "./pages/loginpage/Loginpage";
import Signuppage from "./pages/signuppage/Signuppage";
import FavoriteMovies from "./pages/favoriteMovies/FavoriteMovies";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/moviesdetails" element={<MovieDetailsPage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signuppage/>}/>
            <Route path="/favoriteMovies" element={<FavoriteMovies/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
