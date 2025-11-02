<template>
  <section>
    <img v-if="showPokemon" class=" brightness-0 h-[200px] select-none pointer-events-none transition-all" :src="pokemonImage" alt="¿Quién es este Pokémon?"  draggable="false"/>
    <img v-else class=" h-[200px] select-none pointer-events-none transition-all animate-fadeIn" :src="pokemonImage" alt="¿Quién es este Pokémon?"  draggable="false"/>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  pokemonId: number;
  showPokemon?: boolean;
}>(), {
  showPokemon: false
})

  const pokemonImage = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`)

</script>




