import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { FavoritePokemons } from "@/pokemons/componentes/FavoritePokemons";
import Image from "next/image";




export const metadata = {
  title: 'Favoritos',
  description: 'Pokemones favoritos',
};




export default async function PokemonsPage() {


  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2 text-center">Pokémons <small className="text-blue-500">favorites global state</small></span>

      <FavoritePokemons />
      

    </div>
  );
}


