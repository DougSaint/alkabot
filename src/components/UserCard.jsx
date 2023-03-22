import React from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserCard({ name, userName, email, id }) {
  return (
    <div className="rounded-lg shadow-md dark:shadow-gray-700 p-6">
      <div className="flex items-center mb-6">
        <FaUser className="text-green-500 dark:text-green-500 text-3xl mr-4" />
        <div>
          <Link to={`/user/${id}`}>
            <h2 className="text-2xl font-medium dark:text-orange-400">{name}</h2>
          </Link>
          <p className="text-gray-500">{userName}</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="text-gray-500 dark:text-white text-xl mr-4" />
        <p className="text-gray-500 dark:text-gray-200">{email}</p>
      </div>
    </div>
  );
}

export default UserCard;
