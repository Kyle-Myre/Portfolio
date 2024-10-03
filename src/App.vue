<script setup lang="js">
import navbar from './components/navbar.vue';
import hero from './components/hero.vue';
import heading from './components/heading.vue'
import projects from './components/projects.vue'
import utilities from './components/utilities.vue'
</script>

<template>
  <div class="container font-plex" v-motion 
  
    :initial="{ opacity: 0, y: -100, }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 1000 } }">

    <navbar />
    <heading />
    <hero />
    <utilities />
    <projects />
  </div>
</template>