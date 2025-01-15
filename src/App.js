import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/Login/Login";
import PostPage from "./components/PostPage/PostPage";
import SignUp from "./components/Login/SignUp";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
