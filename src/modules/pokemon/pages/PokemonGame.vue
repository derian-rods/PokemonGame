<template>
    <section v-if="isLoading || randomPokemon.id === null" class="flex flex-col justify-center items-center w-screen h-screen bg-gray-50 animate-pulse">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>
    </section>
    <section v-else class="flex flex-col justify-center items-center w-screen h-screen bg-gray-50 animate-fadeIn">
        <h1 class="text-2xl font-bold mb-4">¿Quién es este Pokémon?</h1>
        <button
        v-if="gameStatus !== GameStatus.Playing"
        @click="getNextRound(4)"
        class="bg-blue-500 rounded  capitalize p-2 text-white mb-4 cursor-pointer transition-all duration-300 ease-in-out animate-fadeIn hover:bg-blue-200 ">
          ¿Jugar de nuevo?
        </button>


        <!-- Pokemon Picture -->
           <PokemonPicture  :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus === GameStatus.Playing" />
         <!-- Pokemon Options -->
          <pokemonOptions
          :options="OptionList"
          :block-selection="gameStatus !== GameStatus.Playing"
          :correct-answer="randomPokemon.id"
          @selected-option="checkAnswer($event)"
          />
    </section>
</template>

<script setup lang="ts">
  import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
  import pokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
  import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
  import { GameStatus } from '../interface';
  const {gameStatus, isLoading, randomPokemon, pokemonOptions:OptionList, checkAnswer, getNextRound} = usePokemonGame();
  console.log(randomPokemon.value)
</script>
