import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchComments } from "../services/fetchPost";
import PostResponseCard from "./PostResponseCard";
import BlogContext from "../context/BlogContext";
import Loader from "./Loader";
export default function PostCard({ title, body, id }) {
  const [showResponses, setShowResponses] = useState(false);
  const [responses, setResponses] = useState([]);
  const { loading, setLoading } = useContext(BlogContext);

  useEffect(() => {
    const getComments = async () => {
      if (responses?.length === 0) {
        setLoading(true);
        const data = await fetchComments(id);
        setResponses(data);
        setLoading(false);
      }
    };
    getComments();
  }, [showResponses]);

  return (
    <div className="my-4 shadow-xl w-[calc(100vw-73px)] mx-auto p-5 rounded-xl">
      <h1 className="font-extrabold text-[#222328] text-xl">{title}</h1>
      <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">{body}</p>

      {loading && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}

      {showResponses && (
        <section className="mt-4">
          {responses?.map((resp) => (
            <PostResponseCard {...resp} />
          ))}
        </section>
      )}
      <button
        className="font-bold text-gray-600 mt-3"
        onClick={() => setShowResponses(!showResponses)}
      >
        {showResponses ? "Esconder Respostas" : "Ver Respostas"}
      </button>
    </div>
  );
}
