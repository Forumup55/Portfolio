<template>
  <VeeField :name="name" v-slot="{ field, meta }">
    <div class="input-wrapper">
      <label v-if="label" :for="name">{{ label }}</label>

      <VueDatePicker
        v-model="date"
        :placeholder="placeholder"
        format="yyyy-MM-dd"
        :max-date="maxDate && new Date(maxDate)"
        :min-date="minDate && new Date(minDate)"
        :disabled="disabled"
        autocomplete="off"
      />
    </div>
    <VeeErrorMessage class="text-sm text-red-500" :name="name" />
  </VeeField>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: false },
  placeholder: { type: String, required: false },
  value: { type: String, required: false },
  maxDate: { type: String, required: false },
  minDate: { type: String, required: false },
  disabled: { type: Boolean, required: false },
});
const emits = defineEmits(["update:value"]);

const inputField = useField(props.name);
const date = ref(null);

watch(
  () => props.value,
  (val) => {
    if (val) {
      inputField.setValue(val);
      date.value = new Date(val);
    }
  },
  { deep: true, immediate: true }
);

watch(
  () => date.value,
  (val, oldVal) => {
    if (val) {
      const formattedDate = date?.value?.toISOString().slice(0, 10);
      inputField.setValue(formattedDate);
      emits("update:value", formattedDate);
    } else if (val != oldVal) {
      inputField.setValue(undefined);
      emits("update:value", undefined);
    }
  },
  { deep: true, immediate: true }
);
</script>

<style lang="scss" scoped></style>
