<script setup>
import navbar from './components/navbar.vue';
import hero from './components/hero.vue';
import heading from './components/heading.vue'
import projects from './components/projects.vue'
import utilities from './components/utilities.vue'
</script>

<template>
  <div class="container font-plex">
    <navbar />
    <heading />
    <hero />
    <utilities/>
    <projects/>
  </div>
</template>