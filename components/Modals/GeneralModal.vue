<template>
  <div
    class="fixed z-[102] top-1/2 md:w-[660px] sm:w-[550px] w-[95%] bg-white rounded-3xl overflow-hidden -translate-x-1/2 -translate-y-1/2 drop-shadow-xl"
    :class="locale == 'en' ? 'start-1/2' : 'end-1/2'"
  >
    <div class="relative p-4 border-b border-border mb-2">
      <button
        v-if="backModal"
        type="button"
        @click="$emit('back')"
        class="absolute start-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <svg-icon name="arrow-left" class="scale-[0.9]" />
      </button>

      <p class="text-xl font-semibold text-center">{{ title }}</p>

      <button
        v-if="!removeClose"
        type="button"
        @click="$emit('close')"
        class="absolute end-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <svg-icon name="close-square" />
      </button>
    </div>

    <div class="py-4 max-h-[88vh] px-7 overflow-auto">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  removeClose: {
    type: Boolean,
    required: false,
  },
  backModal: {
    type: Boolean,
    required: false,
  },
});
const { locale } = useI18n();
</script>

<style lang="scss" scoped></style>
