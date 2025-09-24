import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Navbar } from "./Navbar";
import { GiLightSabers } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import '../../index.css';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

useEffect(() => {
  setLoading(true);
  const searchParam = search ? `&search=${search}` : "";
  fetch(`https://swapi.bry.com.br/api/people/?page=${page}${searchParam}`)
    .then((res) => res.json())
    .then((data) => {
      setCharacters(data.results);
      setHasNext(Boolean(data.next));
      setHasPrevious(Boolean(data.previous));
      setLoading(false);
    });
}, [page, search]);

  if (loading) return (
    <div className="w-full bg-stars min-h-screen flex items-center justify-center ml-10rem relative text-white">
      Carregando...
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-stars flex items-center justify-center ml-10rem relative">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 w-full">
        <h1 className="text2xl md:text-4xl text-center font-bold bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent mt-20">
          PERSONAGENS
        </h1>
        <div className="flex justify-center items-center my-6">
          <input
            type="text"
            className="block w-full max-w-sm px-4 py-2 rounded h-10 text-xs md:text-base text-white"
            placeholder="Digite um personagem"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button
            className="bg-gradient-to-br from-amber-300 to-yellow-500 text-2xl md:text-3xl mr-5 font-semibold text-stone-900 ml-5 px-1 py-1 rounded shadow-md border border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-lg hover:brightness-190 active:brightness-95"
            onClick={() => { setSearch(inputSearch); setPage(1); }}
          >
            <GiLightSabers />
          </button>
        </div>       
        <ul>
          {characters.map((character) => {
            const urlParts = character.url.split("/");
            const id = urlParts[urlParts.length - 2];
            return (
              <li key={id} className="text-sm md:text-base flex items-center justify-center py-2 text-white">
                <span>{character.name}</span>
                <button
                  className="bg-gradient-to-br from-green-400 to-emerald-700 text-xs md:text-xl font-semibold text-stone-900 ml-5 px-1 py-1 rounded shadow-md border border-green-700 transition-all duration-300 cursor-pointer hover:shadow-lg hover:brightness-190 active:brightness-95"
                  onClick={() => navigate(`/character/${id}`)}
                >
                  <FaEye />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between mt-8">
          <button
            className="bg-gray-600 text-xs md:text-base text-white px-2 md:px-4 py-1 md:py-2 mb-3 rounded cursor-pointer disabled:opacity-50 disabled:cursor-default"
            disabled={!hasPrevious}
            onClick={() => setPage(page - 1)}
          >
            Anterior
          </button>
          <button
            className="bg-gray-600 text-xs md:text-base text-white px-2 md:px-4 py-1 md:py-2 mb-3 rounded cursor-pointer disabled:opacity-50 disabled:cursor-default"
            disabled={!hasNext}
            onClick={() => setPage(page + 1)}
          >
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
}