<template>
  <NuxtLayout>
    <div
      class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full text-center">
        <div
          class="mx-auto flex items-center justify-center h-20 w-24 rounded-full bg-primary-500 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="#12A2D9"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 class="mt-6 text-3xl font-extrabold text-gray-900">Oops!</h1>
        <h2 class="mt-2 text-2xl text-gray-700">
          {{ error?.statusCode }} - {{ error?.statusMessage }}
        </h2>
        <p class="mt-4 text-base text-gray-500">
          It looks like something broke
        </p>
        <p class="mt-1 text-base text-gray-500">Sorry about that</p>

        <!-- Action Buttons -->
        <div class="mt-6 flex justify-center space-x-4">
          <NuxtLink to="/" class="base-btn"> Back to Home </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
</script>

<style scoped></style>
