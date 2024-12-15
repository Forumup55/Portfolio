<script setup>
import { defineAsyncComponent } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: false,
  },
});

// feel free to update this with an svg directory of your choice
const icon = defineAsyncComponent(() =>
  import(`~/assets/images/icons/${props.name}.svg`)
);
</script>

<template>
  <component :is="icon" :class="`${classes}`" />
</template>
