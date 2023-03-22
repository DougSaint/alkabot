import React, { useContext, useState } from "react";
import { UserCard } from "../components";

import BlogContext from "../context/BlogContext";

const ListUsers = () => {
  const { users } = useContext(BlogContext);
  return (
    <section className="">
     { users?.map((user) => <UserCard {...user} /> )}
    </section>
  );
};

export default function Users() {
  return (
    <main>
      <h1 className="text-center font-bold text-orange-600 mt-5 text-[32px]">
        Usúarios
      </h1>
        <ListUsers />
    </main>
  );
}
