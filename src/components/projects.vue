<script setup>
    import { Icon } from '@iconify/vue';
</script>

<template>
    <h1 class="text-2xl lg:text-start text-center">Projects</h1>
    <main class="flex lg:flex-row flex-col justify-around mt-12 mb-12 gap-2">
        <div class="flex-1 flex flex-col  grayscale">
            <img src="/TSMS.jpeg" alt="">
        </div>
        <div class="flex-1 flex flex-col items-center justify-center grayscale border border-primary border-dashed">
            <Icon icon="grommet-icons:action" class="size-10 mb-3" />
            <h1 class="text-xl text-center">comming soon...</h1>
        </div>
        <div class="flex-1 flex flex-col items-center justify-center grayscale border border-primary border-dashed">
            <Icon icon="grommet-icons:action" class="size-10 mb-3" />
            <h1 class="text-xl text-center">comming soon...</h1>
        </div>
    </main>
    <div class="divider divider-primary mt-10"></div>
</template>