import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interface';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const isLoding = computed(() => pokemons.value.length === 0);
  const PokemonOptions = ref<Pokemon[]>([]);

  const radomPokemon = computed<Pokemon>(() => {
    const index = Math.floor(Math.random() * PokemonOptions.value.length);
    return PokemonOptions.value[index] ?? { id: 0, name: '' };
  });

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = await response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');

      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    PokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  onMounted(async () => {
    pokemons.value = await getPokemons();
    getNextOptions();
  });

  return {
    gameStatus,
    isLoding,
    radomPokemon,
    PokemonOptions,

    //Methods
    getNextOptions,
  };
};
