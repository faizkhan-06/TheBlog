import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
