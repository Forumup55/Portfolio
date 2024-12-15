<template>
  <div>
    <h3 class="text-2xl font-medium title mb-5">About Me</h3>

    <p class="leading-8">
      I am an accomplished Front-End Web Developer with over 3 years of
      experience in designing and implementing advanced web applications.
      Proficient in Vue.js, Nuxt.js. Demonstrated ability
      to lead teams, mentor junior developers, and collaborate effectively with
      cross-functional teams. Adept at creating user-centric solutions that
      improve user experience and engagement. Seeking to leverage technical
      expertise and leadership skills to contribute to innovative web
      development projects.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.title {
  position: relative;
  &::after {
    content: "";
    @apply absolute start-0 -bottom-3 border-b-[5px] rounded-lg border-primary w-[50px];
  }
  &::before {
    content: "";
    @apply absolute start-0 -bottom-3 border-b-[5px] rounded-lg border-[#ff965d] w-[20px] z-[10];
  }
}
</style>
