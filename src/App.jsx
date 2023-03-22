import React, { useState } from "react";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogProvider from "./context/BlogProvider.jsx";
import { Home, Users, Posts, Post, UserDetails } from './pages';

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/posts/:page" element = {<Posts />} />
            <Route path="/post/:id" element = {<Post />} />
            <Route path="/users" element = {<Users />} />
            <Route path="/user/:id" element = {<UserDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
