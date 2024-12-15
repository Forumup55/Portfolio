<template>
  <VeeField :name="name" v-slot="{ field, meta }">
    <div class="input-wrapper">
      <label for="label" v-if="label">{{ label }}</label>

      <Listbox v-model="selectedItem">
        <ListboxButton>
          <span class="text-desc" v-if="placeholder && !selectedItem?.name">
            {{ placeholder }}
          </span>

          <span v-if="selectedItem?.name">
            {{ selectedItem?.name }}
          </span>

          <span class="absolute top-1/2 -translate-y-1/2 end-5">
            <svg-icon name="arrow-down" />
          </span>

          <button
            v-if="selectedItem && selectedItem?.id"
            @click="
              $event.stopPropagation();
              selectedItem = null;
            "
            class="absolute top-1/2 -translate-y-1/2 end-12"
          >
            <svg-icon name="xmark" class="text-desc h-4 w-full" />
          </button>
        </ListboxButton>

        <transition name="fade">
          <ListboxOptions>
            <ListboxOption
              as="template"
              v-slot="{ active, selected }"
              v-for="item in items"
              :key="item.id"
              :value="item"
            >
              <li
                :class="[
                  active && 'bg-primary bg-opacity-20',
                  selected && 'bg-primary bg-opacity-20',
                ]"
              >
                {{ item?.name }}
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </Listbox>
    </div>

    <VeeErrorMessage class="text-sm text-red-500" :name="name" />
  </VeeField>
</template>

<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

import { useField } from "vee-validate";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  name: { type: String, required: true },
  label: { type: String, required: false },
  placeholder: { type: String, required: false },
  value: { type: Object, required: false },
});

const inputField = useField(props.name);

const selectedItem = ref(null);

watch(
  () => selectedItem.value,
  (val, oldVal) => {
    if (val) {
      inputField.setValue(val);
      emits("update:value", val);
    } else if (val != oldVal) {
      inputField.setValue(null);
      emits("update:value", undefined);
    }
  },
  { deep: true, immediate: true }
);

const emptyInput = () => {
  selectedItem.value = null;
};

defineExpose({
  emptyInput,
});

const emits = defineEmits(["update:value"]);
</script>

<style lang="scss" scoped></style>
