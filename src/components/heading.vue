<script setup>
    import {ref} from 'vue';
    const date = ref(new Date());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<template>
    <div class="mt-16">
        <h1 class="text-center mb-10 text-6xl">Portfolio</h1>
        <hr class="border-[0.3px] border-primary">
            <p class="text-center p-4 text-xl">
                {{ date.toLocaleDateString('en-GB', options) }}
            </p>
        <hr class="border-[0.3px] border-primary">
    </div>
</template>