import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../services/fetchPost";
import BlogContext from "./BlogContext";
import { fetchAllUsers } from '../services/fetchUsers';

function BlogProvider({ children }) {
  const [ posts, setPosts ] = useState(null);
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialFetch = async () => {
      const savedPosts = await fetchAllPosts();
      const savedUsers = await fetchAllUsers();
      setPosts(savedPosts);
      setUsers(savedUsers);
      setLoading(false)
    }
    initialFetch();
  },[])

  return (
    <BlogContext.Provider value={ { posts, users, loading, setLoading, } }>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
