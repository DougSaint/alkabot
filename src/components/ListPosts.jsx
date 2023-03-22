import BlogContext from "../context/BlogContext";
import React, { useContext, useEffect } from "react";
import PostCard from "./PostCard";
import { BiRightArrowCircle, BiLeftArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function ListPosts({ page }) {
  const { posts, setLoading, loading } = useContext(BlogContext);

  const showPosts = posts?.slice(page * 10, (+page + 1) * 10);

  useEffect(() => {
    if (!posts) {
      setLoading(true);
    }
  }, []);

  return (
    <section className="mt-5">
      {loading && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
      {!posts && <p>Algo deu errado</p>}
      {showPosts?.map((post) => (
        <PostCard {...post} key={post.title} />
      ))}
      <div className="border-t-4 border-t-[#e6eqbf4] w-full flex items-center justify-around">
        {page > 0 && (
          <Link
            to={`/posts/${+page - 1}`}
            className="my-5 bg-orange-400 rounded-full"
          >
            {" "}
            <BiLeftArrowCircle fill="#FFF" size="2em" />{" "}
          </Link>
        )}
        {page < 9 && (
          <Link
            to={`/posts/${+page + 1}`}
            className="my-5 bg-orange-400 rounded-full"
          >
            {" "}
            <BiRightArrowCircle fill="#FFF" size="2em" />{" "}
          </Link>
        )}
      </div>
    </section>
  );
}
