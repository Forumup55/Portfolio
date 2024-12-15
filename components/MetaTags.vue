<template>
  <h1 class="hidden">
    {{ metaTags.title }}
  </h1>

  <Head>
    <Title>{{ metaTags.meta.title }}</Title>
    <Meta name="title" :content="metaTags.meta.title" />
    <Meta name="description" :content="metaTags.meta.description" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta name="image" :content="metaTags.meta.image" />
    <Link rel="canonical" :href="metaTags.meta.canonical" />

    <Meta itemProp="image" :content="metaTags.meta.image" />
    <Meta itemprop="name" :content="metaTags.meta.title" />
    <Meta itemprop="description" :content="metaTags.meta.description" />

    <Meta property="image" :content="metaTags.meta.image" />
    <Meta property="og:image" :content="metaTags.meta.image" />
    <Meta property="og:url" :content="metaTags.meta.url" />
    <Meta property="og:title" :content="metaTags.meta.title" />
    <Meta property="og:description" :content="metaTags.meta.description" />
    <Meta property="og:type" :content="metaTags.meta.type" />

    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:image" :content="metaTags.meta.image" />
    <Meta name="twitter:title" :content="metaTags.meta.title" />
    <Meta name="twitter:domain" :content="metaTags.meta.domain" />
    <Meta name="twitter:url" :content="metaTags.meta.url" />
    <Meta name="twitter:description" :content="metaTags.meta.description" />

    <Meta name="keywords" :content="metaTags.meta.keyword" />
  </Head>
</template>

<script setup>
const props = defineProps({
  metaTags: {
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
