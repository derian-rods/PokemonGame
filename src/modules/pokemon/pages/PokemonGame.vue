<template>
    <section v-if="isLoding" class="flex flex-col justify-center items-center w-screen h-screen bg-gray-200 animate-pulse">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>
    </section>
    <section v-else class="flex flex-col justify-center items-center w-screen h-screen bg-gray-200 animate-fadeIn">
        <h1>¿Quién es este Pokémon?</h1>

        <!-- Pokemon Picture -->
           <PokemonPicture :sprite-url="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${radomPokemon.id}.svg`" />
         <!-- Pokemon Options -->
          <PokemonOptions :pokemones="OptionList" />
    </section>
</template>

<script setup lang="ts">
  import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
  import PokemonOptions from '../components/PokemonOptions.vue';
  import { usePokemonGame } from '../composables/usePokemonGame';

  const {radomPokemon, isLoding, PokemonOptions: OptionList } = usePokemonGame()

</script>

<style scoped>

</style>
