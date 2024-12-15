<template>
  <div>
    <img
      src="~/assets/images/images/html_2.webp"
      alt="html"
      class="absolute top-0 w-full h-[300px] object-cover brightness-[0.75]"
      draggable="false"
    />
    <main class="container">
      <div class="mt-[215px] mb-5">
        <UIInfo />
      </div>

      <div class="flex items-start gap-5">
        <div>
          <div
            class="w-[120px] bg-white rounded-md drop-shadow-sm p-3 sticky top-5"
          >
            <nuxt-link to="/" class="mb-3">
              <svg-icon name="user" />
              <span>About Me</span>
            </nuxt-link>

            <nuxt-link to="/resume" class="mb-3">
              <svg-icon name="file" />

              <span> Resume </span>
            </nuxt-link>

            <nuxt-link to="/works" class="mb-3">
              <svg-icon name="list" />

              <span> Works </span>
            </nuxt-link>

            <nuxt-link to="/contact">
              <svg-icon name="email" />

              <span> Contact </span>
            </nuxt-link>
          </div>
        </div>

        <div
          class="flex-grow bg-white rounded-md drop-shadow-sm p-5 min-h-[60vh]"
        >
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
a {
  @apply h-[80px] flex flex-col items-center justify-center gap-1 rounded-lg bg-[#f7f9fa] transition-all text-[#3b4b5e];
  &.router-link-active.router-link-exact-active,
  &:hover {
    @apply bg-primary text-white;
  }
}
</style>
