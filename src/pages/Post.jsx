import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../services/fetchPost";

export default function Post() {
  const { id } = useParams();
  const [ postInfo, setPostInfo ] = useState({});

  useEffect(() => {
    const getComments = async () => {
      const data = await fetchComments(id);
      setPostInfo(data);
    };
    getComments();

  }, [id]);

  console.log(postInfo)
  
  return (
    <main>
      <h1 className="font-extrabold text-[#222328] text-xl">t</h1>
      <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]"></p>
    </main>
  );
}
