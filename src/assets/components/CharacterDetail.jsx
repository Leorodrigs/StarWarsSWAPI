import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Navbar } from "./Navbar";

export const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://swapi.bry.com.br/api/people/${id}/`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data);
                setLoading(false);
            })

        fetch("https://akabab.github.io/starwars-api/api/all.json")
            .then(res => res.json())
            .then(data => setImages(data));
    }, [id]);

    if (loading) return (
        <div className="w-full bg-stars min-h-screen flex items-center justify-center ml-10rem relative text-white">
            Carregando...
        </div>
    );

    const getImage = () => {
        if (!character) return null;
        const imageObj = images.find(img => img.name.toLowerCase() === character.name.toLowerCase());
        return imageObj ? imageObj.image : null;
    };

    return (
      <section className="w-full min-h-screen bg-stars flex items-center justify-center ml-10rem relative">
        <Navbar />
        <div className="flex flex-col items-center gap-8 rounded-xl p-8 mt-20 border-yellow-200 border text-white text-center">          
          <h2 className="text-2xl md:text-4xl font-bold">{character.name}</h2>
          {getImage() && (
            <img
              src={getImage()}
              alt={character.name}
              className="w-50 md:w-80 h-50 md:h-80 rounded my-4 mx-auto"
            />
          )}
          <p className="text-xs md:text-base"><b>Gênero:</b> {character.gender} </p>
          <p className="text-xs md:text-base"><b>Altura:</b> {character.height}cm </p>
          <p className="text-xs md:text-base"><b>Peso:</b> {character.mass}kg </p>
          <p className="text-xs md:text-base"><b>Ano de Nascimento:</b> {character.birth_year} </p>
        </div>
      </section>
    );
}