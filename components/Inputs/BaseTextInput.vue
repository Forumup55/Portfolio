<template>
  <VeeField :name="name" :type="currentType" v-slot="{ field, meta }">
    <div class="input-wrapper" :class="type == 'textarea' ? '' : 'h-14'">
      <label v-if="label" :for="name">{{ label }}</label>

      <input
        v-if="type !== 'textarea'"
        :disabled="disabled"
        :id="name"
        :type="currentType"
        :placeholder="placeholder"
        v-bind="field"
        @input="$emit('update:value', $event.target.value)"
        class="appearance-none"
        autocomplete="off"
      />

      <textarea
        v-else
        :disabled="disabled"
        :id="name"
        :type="type"
        :placeholder="placeholder"
        v-bind="field"
        @input="$emit('update:value', $event.target.value)"
        class="appearance-none"
      ></textarea>

      <button
        type="button"
        @click="
          currentType == 'password'
            ? (currentType = 'text')
            : (currentType = 'password')
        "
        v-if="type == 'password' && value"
        class="absolute bottom-[18px] end-5 flex items-center justify-center"
      >
        <SvgIcon
          v-if="currentType == 'password'"
          name="eye"
          class="text-[#808080]"
        />
        <SvgIcon v-else name="eye-slash" class="text-[#808080]" />
      </button>
    </div>
    <VeeErrorMessage class="text-sm text-red-500" :name="name" />
  </VeeField>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  name: { type: String, required: true },
  type: { type: String, required: false, default: "text" },
  label: { type: String, required: false },
  placeholder: { type: String, required: false },
  value: { type: String, required: false },
  disabled: { type: Boolean, required: false },
});

const inputField = useField(props.name);

const currentType = ref(props.type);

watch(
  () => props.value,
  (val) => {
    if (val) {
      inputField.setValue(val);
    }
  },
  { deep: true, immediate: true }
);

const emits = defineEmits(["update:value"]);
</script>

<style lang="scss" scoped></style>
