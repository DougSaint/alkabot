import React from "react";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogProvider from "./context/BlogProvider.jsx";
import { Home, Users, Posts, Post, UserDetails, NotFound } from './pages';


function App() {
  return (
    <BlogProvider>
      <BrowserRouter basename="/alkabot">
        <div className="dark:bg-gray-800 min-h-screen">
          <Navbar />
          <Routes>
            <Route exact path ="/" element = {<Home />} />
            <Route path="/posts/:page" element = {<Posts />} />
            <Route path="/post/:id" element = {<Post />} />
            <Route path="/users" element = {<Users />} />
            <Route path="/user/:id" element = {<UserDetails />} />
            <Route path ="/*" element = {<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
