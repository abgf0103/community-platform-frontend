import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/Login/Login";
import PostPage from "./components/PostPage/PostPage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<PostPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
