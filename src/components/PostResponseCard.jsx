import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

function PostResponseCard({ body, email, id, name }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:w-1/2 lg:w-1/3">
      <div className="flex">
        <FaRegUserCircle fill="green" size="1.5em" />
        <p className="ml-2 text-gray-500">{email}</p>
      </div>
      <div className="mt-2">
          <h4 className="font-semibold">{name}</h4>
          <i>{body}</i>
      </div>
    </div>
  );
}

export default PostResponseCard;
