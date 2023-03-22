import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

function PostResponseCard({ body, email, name }) {
  return (
    <div className=" my-2 rounded-lg shadow-md p-6 md:w-1/2 lg:w-1/3">
      <div className="flex">
        <FaRegUserCircle  size="1.5em"  className="text-gray-400"/>
        <p className="ml-2 text-gray-500 dark:text-gray-300 italic">{email}</p>
      </div>
      <div className="mt-2">
          <h4 className="font-semibold text-orange-600 dark:text-orange-400">{name}</h4>
          <i className="dark:text-slate-400">{body}</i>
      </div>
    </div>
  );
}

export default PostResponseCard;
