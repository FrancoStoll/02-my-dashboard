'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useState } from "react"
import { IoHeart } from "react-icons/io5"


export const FavoritePokemons = () => {
  const pokemons = useAppSelector(state => Object.values(state.pokemons.favorites))
  // const [pokemon, setPokemon] = useState(pokemons)

  // Al pasarle el usestate al componente, lo que hacemos es que si hacemos un cambio no se desaparezca porq el componente se crea con el estado con el que se creo y no se vuelve a renderizar, pero ej si hacemos un cambio y salimos y hacemos que el componente se vuelva a renderizar va hacer el llamado ya con los cambios realizados.




  return (
    // <PokemonGrid pokemons={Object.values(pokemons)} />
    <>
      {
        pokemons.length
          ? (<PokemonGrid pokemons={pokemons} />)
          : (<NoFavorites />)
      }
    </>



  )
}

export const NoFavorites = () => {

  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeart size={100} className="text-red-500" />
      <p>No hay favoritos</p>
    </div>
  )
}