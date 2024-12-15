<template>
  <VeeField :name="name" type="file" v-slot="{ field, meta }">
    <div class="input-file-wrapper">
      <label v-if="!file && !disabled" class="base-btn-reverse" :for="name">
        {{ $t("TITLES.upload") }}
      </label>

      <button @click="emptyInput" type="button" class="xmark" v-else-if="file">
        <svg-icon name="xmark" class="size-4" />
      </button>

      <p v-if="!file && placeholder" class="text-desc">{{ placeholder }}</p>
      <p v-else>{{ file.name }}</p>

      <input
        :disabled="disabled"
        v-bind="field"
        @change="uploadImage"
        type="file"
        :id="name"
        class="hidden"
        :accept="accept"
      />
    </div>
    <VeeErrorMessage class="text-sm text-red-500" :name="name" />
  </VeeField>

  <div v-if="previewFile && file" class="mt-2">
    <video
      v-if="file.type.startsWith('video/')"
      class="rounded-xl h-96 object-contain"
      controls
    >
      <source :src="filePreview" type="video/mp4" />
    </video>

    <img
      v-else-if="file.type.startsWith('image/')"
      class="rounded-xl h-96 object-contain"
      :src="filePreview"
      alt="Image Preview"
    />

    <iframe
      v-else-if="file.type === 'application/pdf'"
      :src="filePreview"
      frameborder="0"
      class="w-full h-96 rounded-xl"
    ></iframe>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  accept: {
    type: String,
    required: false,
  },
  previewFile: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});

const inputField = useField(props.name);

const file = ref(null);
const filePreview = ref(null);

const uploadImage = (e) => {
  file.value = e.target.files[0];
  emits("update:value", file.value);
  inputField.setValue(file.value);

  if (file.value) {
    filePreview.value = URL.createObjectURL(file.value);
  }
};

const emptyInput = () => {
  file.value = null;
  emits("update:value", null);
  inputField.setValue(null);
  filePreview.value = null;
};

defineExpose({
  emptyInput,
});

const emits = defineEmits(["update:value"]);
</script>

<style lang="scss" scoped></style>
