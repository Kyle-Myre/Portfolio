<script setup>

</script>
<template>
    <main class="flex lg:flex-row flex-col mt-32 gap-6 items-stretch">
        <div>
            <hidden />
            <h1 class="text-5xl mb-10 lg:text-left text-center">Hi I'm
                <span v-motion :initial="{ opacity: 0, y: 50, }"
                    :enter="{ opacity: 1, y: 0, transition: { delay: 1200 } }">
                    Kyle Myre
                </span>
            </h1>
            <p class="text-justify">
                Good day, I am a Full Stack Web Developer, with a particular focus on Backend Development. I have been
                engaged in programming for four years and am grateful to have achieved my two-year full stack diploma in
                2024, with a specialisation in Full Stack Web Development. I would say that my journey was not without
                its challenges, but I do feel that the effort was worthwhile.
            </p>
        </div>
        <div class="divider divider-primary lg:divider-horizontal"></div>
        <div>
            <p class="text-justify">
                When I first started learning to program, I began with Java and Python with the intention of creating
                web apps, and I was fortunate to have some success.
                I attempted to keep it as straightforward as possible due to my limited understanding of colours and
                design, but I persevered nonetheless.
                I have found that a simple design with minimal colours works well for websites. This portfolio is an
                example of a newspaper-style design.
                <br>
                It is important to remember that receiving a negative or lack of feedback does not necessarily mean that
                you are doing something wrong. It is always an opportunity to try again and learn from your mistakes.
                Accepting feedback and criticism is an essential part of success.
            </p>
        </div>
    </main>
    <div class="divider divider-primary mt-10"></div>
</template>