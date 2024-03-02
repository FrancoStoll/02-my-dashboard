import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from '@reduxjs/toolkit'




interface PokemonsState {
  favorites: { [key: string]: SimplePokemon }
}

// function getLocalPokemons(): PokemonsState {
//   // if( typeof localStorage === 'undefined' ) return {};

//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');

//   return favorites;
// }

const initialState: PokemonsState = {
  favorites: {},
  // '1': { id: '1', name: 'Bulbasaur' },
  // '2': { id: '2', name: 'Ivysaur' },
  // '3': { id: '3', name: 'Venasaur' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    initFavorites(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {

      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;

      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return
      } else {
        state.favorites[id] = pokemon
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    }
  }
});

export const { toggleFavorite, initFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer