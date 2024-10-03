<script setup>
import { Icon } from '@iconify/vue';
const utils = [
    'Javascript',
    'Python',
    'Django',
    'Webpack',
    'Laravel',
    'Filament',
    'Pytorch',
    'Git',
    'MySQL',
    'Php',
    'MongoDB',
    'CSS & Html',
    'Linux',
    'React',
    'Redux',
    'Node JS',
    'Express',
    'SQL Server',
    'Bootstrap',
    'Postgress SQL',
    'Docker'
];
</script>

<template>
    <h1 class="text-2xl text-center">Utilities</h1>
    <ul class="grid lg:grid-cols-6 grid-cols-3 mt-8 gap-6 mb-8">
        <li v-for="item in utils" class="flex items-center gap-2">
            <Icon icon="material-symbols:verified" class="lg:size-6 size-8" /><span>{{ item }}</span>
        </li>
    </ul>
    <div class="divider divider-primary mt-10"></div>
</template>