<template>
  <section>
    <img class=" brightness-0 h-[200px] select-none pointer-events-none" :src="spriteUrl" :alt="name"  draggable="false"/>
  </section>
</template>

<script setup lang="ts">
  interface props {
    spriteUrl: string;
    name?: string;

  }

  const {spriteUrl, name } = defineProps<props>()
</script>




