<template>
  <div
    class="fixed left-0 top-0 z-[101] h-screen w-full bg-black bg-opacity-30"
    @click="$emit('click')"
  ></div>
</template>

<script setup>
onMounted(() => {
  document.body.style.overflowY = "hidden";
});

onBeforeUnmount(() => {
  document.body.style.overflowY = "auto";
});
</script>

<style lang="scss" scoped></style>
