import React, { useEffect, useState, useContext } from "react";
import { fetchUser } from "../services/fetchUsers";
import { Link, useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import { Loader } from "../components";

function UserDetails() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const { loading, setLoading } = useContext(BlogContext);

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true);
      const data = await fetchUser(id);
      setUser(data);
      setLoading(false);
    };
    getUserInfo();
  }, []);

  return (
    <>
      {loading && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
      {user.name ? (
        <div className="rounded-lg p-6 border-b dark:border-b-slate-50 border-slate-300">
          <div className="flex items-center mb-6 w-full justify-center">
            <h2 className="text-2xl font-medium mr-4 dark:text-slate-50 text-[#222328] text-center">{user.name}</h2>
            <p className="text-gray-500 dark:text-slate-200 italic">@{user.username}</p>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <h3 className="text-lg font-medium mb-2 dark:text-orange-400 text-[#222328]">Informações pessoais</h3>
              <p className="text-gray-500 mb-1 dark:text-slate-50" >
                <strong >Nome:</strong> {user.name}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Username:</strong> {user.username}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Telefone:</strong> {user.phone}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Website:</strong> {user.website}
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <h3 className="text-lg font-medium mb-2 dark:text-orange-400 text-[#222328]">Endereço</h3>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Rua:</strong> {user.address.street}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Suíte:</strong> {user.address.suite}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Cidade:</strong> {user.address.city}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>CEP:</strong> {user.address.zipcode}
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <h3 className="text-lg font-medium mb-2 text-[#222328] dark:text-orange-400">Empresa</h3>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Nome:</strong> {user.company.name}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>Frase de efeito:</strong> {user.company.catchPhrase}
              </p>
              <p className="text-gray-500 mb-1 dark:text-gray-300">
                <strong>BS:</strong> {user.company.bs}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center border-b-2 border-b-slate-50">
          <h3 className="font-bold text-xl">Que pena :/ </h3>
          <p>Não foi encontrado nenhum usúario</p>
          <Link to="/"> Voltar para pagina inicial </Link>
        </div>
      )}
    </>
  );
}

export default UserDetails;
