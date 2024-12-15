<template>
  <veeField :name="name" v-slot="{ field, meta }">
    <div class="input-phone-wrapper">
      <label v-if="label" :for="name + 'id'">{{ label }}</label>

      <div dir="ltr" class="flex items-center">
        <div>
          <Listbox v-model="selectedCountry">
            <ListboxButton>
              <div class="flex items-center gap-1">
                <img
                  class="h-5 w-7 object-cover"
                  :src="selectedCountry.image"
                  :alt="selectedCountry.name"
                />
                <span>+{{ selectedCountry.phone_code }}</span>
              </div>
            </ListboxButton>

            <transition name="fade">
              <ListboxOptions>
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-for="item in store.countries"
                  :key="item.id"
                  :value="item"
                >
                  <li
                    class="flex items-center gap-1"
                    :class="[
                      active && 'bg-primary bg-opacity-20',
                      selected && 'bg-primary bg-opacity-20',
                    ]"
                  >
                    <img
                      class="h-5 w-7 object-cover"
                      :src="item?.image"
                      :alt="item?.name"
                    />
                    <span>+{{ item?.phone_code }}</span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </Listbox>
        </div>

        <div class="flex-grow">
          <input
            :disabled="disabled"
            v-model="phone_number"
            type="number"
            class="appearance-none"
            @input="valueChanged"
            :placeholder="placeholder"
          />
        </div>
      </div>
    </div>
    <VeeErrorMessage
      v-if="+phone_number?.toString()?.length !== +selectedCountry?.phone_limit"
      class="text-sm text-red-500"
      :name="name"
    />
  </veeField>
</template>

<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

import { useField } from "vee-validate";
import { useStore } from "@/store";

const store = useStore();

const emits = defineEmits(["update:value"]);
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: false },
  placeholder: { type: String, required: false },
  value: { type: Object, required: false },
  disabled: { type: Boolean, required: false },
});

const inputField = useField(props.name);

const selectedCountry = ref(store.countries[0]);
const phone_number = ref(null);

const valueChanged = () => {
  const newValue = {
    phone_number: phone_number.value,
    phone_code: selectedCountry.value.phone_code,
    phone_limit: +selectedCountry.value.phone_limit,
  };

  if (
    props.value?.phone_number != phone_number.value ||
    props.value?.phone_code != selectedCountry.value.phone_code
  ) {
    inputField.setValue(newValue);
    emits("update:value", newValue);
  }
};

watch(
  () => props.value,
  (val) => {
    if (val) {
      const country = store.countries.find(
        (el) => el.phone_code == val.phone_code
      );

      if (
        selectedCountry.value.phone_code != val.phone_code ||
        phone_number.value != val.phone_number
      ) {
        selectedCountry.value = country;
        phone_number.value = val.phone_number;

        inputField.setValue({
          phone_number: val.phone_number,
          phone_code: country.phone_code,
          phone_limit: +country.phone_limit,
        });

        emits("update:value", {
          phone_number: val.phone_number,
          phone_code: country.phone_code,
          phone_limit: +country.phone_limit,
        });
      }
    }
  },
  { deep: true, immediate: true }
);
</script>

<style lang="scss" scoped></style>
