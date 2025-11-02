<template>
  <section>
      <ol class="mt-5 flex flex-wrap flex-col md:flex-row ">
        <button
        v-for="{id, name } in options"
        :key="id"
        :title="name"
        :disabled="blockSelection"
        @click="$emit('selectedOption', id)"
        :class="['bg-white capitalize shadow-md rounded-lg p3 m-3 cursor-pointer w-40 text-center transition-all hover:bg-gray-100 disabled:bg-gray-300'
        , {
          correct: id === correctAnswer && blockSelection,
          incorrect: id !== correctAnswer && blockSelection
        }]"
        >
           {{ name }}
        </button>
      </ol>
  </section>
</template>

<script setup lang="ts">
  import type { Pokemon } from '../interface';


  defineProps<{
      options: Pokemon[],
      blockSelection: boolean,
      correctAnswer: number
  }>()

  defineEmits<{
    selectedOption: [id:number]
  }>()
</script>

