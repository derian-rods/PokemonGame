<template>
  <section>
      <ol class="mt-5">
        <li v-for="pokemon in pokemones" :key="pokemon.id" class="bg-white shadow-md rounded-lg p3 m-3 cursor-pointer w-40 text-center transition-all hover:bg-gray-100">
           {{ pokemon.name }}
        </li>
      </ol>
  </section>
</template>

<script setup lang="ts">
  import type { Pokemon } from '../interface';


  defineProps<{
      pokemones: Pokemon[]
  }>()
</script>

