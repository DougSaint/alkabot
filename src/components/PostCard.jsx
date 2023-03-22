import React, { useState, useEffect, useContext } from "react";
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
    <div className="my-4 shadow-xl w-[calc(100vw-73px)] mx-auto p-5 rounded-xl dark:shadow-gray-700">
      <h1 className="font-extrabold text-[#222328] dark:text-white text-xl">{title}</h1>
      <p className="mt-2 text-[#666e75] text-[16px] max-w[500px] dark:text-gray-300">{body}</p>

      {loading && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
      <section
        className={`mt-4 ${
          showResponses
            ? "max-h-[500px] transition-max-height duration-500 ease-out overflow-y-scroll  "
            : "max-h-0 transition-max-height duration-500 ease-in"
        }`}
      >
        {showResponses && (
          <div className="animate-fade-in">
            {responses?.map((resp) => (
              <PostResponseCard {...resp} />
            ))}
          </div>
        )}
      </section>

      <button
        className="font-bold text-gray-600 mt-3 dark:text-orange-500"
        onClick={() => setShowResponses(!showResponses)}
      >
        {showResponses ? "Esconder Respostas" : "Ver Respostas"}
      </button>
    </div>
  );
}
