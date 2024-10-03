<script setup lang="js">

import autoAnimate from "@formkit/auto-animate"
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

const dropdown = ref()
const show = ref(false);

onMounted(() => { autoAnimate(dropdown.value, {}) });

const handleShow = () => {
  show.value = !show.value;
  console.log(show.value);
};

</script>

<template>
  <nav class="flex flex-row items-center mt-16">
    <section class="flex-1 flex flex-row items-center gap-3">
      <img src="https://avatars.githubusercontent.com/u/59917135?v=4" alt="Kyle Myre" class="size-12 rounded-[35px] shadow-lg" />
      <h1 class="text-xl font-semibold">Kyle Myre</h1>
    </section>
    <section class="lg:flex hidden">
      <a href="#about" class="mx-4 flex items-center gap-2">
        <Icon icon="grommet-icons:circle-question" class="size-6" /><span>About</span>
      </a>
      <a href="" class="mx-4 flex items-center gap-2">
        <Icon icon="grommet-icons:star" class="size-6" /><span>Stars</span>
      </a>
      <a href="https://github.com/Kyle-Myre" class="mx-4 flex items-center gap-2">
        <Icon icon="grommet-icons:github" class="size-6" /><span>Github</span>
      </a>
    </section>

    <button @click="handleShow" class="lg:hidden visible">
      <Icon icon="heroicons:bars-3" class="size-8" />
    </button>
  </nav>
  <section ref="dropdown">
    <div v-if="show" class="mt-4 flex flex-col items-start lg:hidden visible">
      <a href="#about" class="flex items-center gap-2 my-3 w-full">
        <Icon icon="grommet-icons:circle-question" class="size-6" /><span>About</span>
      </a>
      <a href="" class="flex items-center gap-2 my-3 w-full">
        <Icon icon="grommet-icons:star" class="size-6" /><span>Stars</span>
      </a>
      <a href="https://github.com/Kyle-Myre" class="flex items-center gap-2 my-3 w-full">
        <Icon icon="grommet-icons:github" class="size-6" /><span>Github</span>
      </a>
    </div>
  </section>
</template>