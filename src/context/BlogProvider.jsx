import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../services/fetchPost";
import BlogContext from "./BlogContext";
import { fetchAllUsers } from '../services/fetchUsers';

function BlogProvider({ children }) {
  const [ posts, setPosts ] = useState(null);
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false);
  const [ darkMode, setDarkMode ] = useState("light");

  useEffect(() => {
    
    const initialFetch = async () => {
      const savedPosts = await fetchAllPosts();
      const savedUsers = await fetchAllUsers();
      setPosts(savedPosts);
      setUsers(savedUsers);
      setLoading(false)
    }
    initialFetch();
    const darkModeStorage = localStorage.getItem('darkmode');
    if(darkModeStorage){
      setDarkMode(darkModeStorage)
    }else{
      localStorage.setItem('darkmode', darkMode)
    }
  },[])


  if (darkMode === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }


  return (
    <BlogContext.Provider value={ { posts, users, loading, setLoading, setDarkMode, darkMode } }>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
