<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading page</div>
    <div v-else-if="data">
      <h1 v-html="data?.title"></h1>
      <div v-html="data?.content"></div>
      <div v-html="data?.acf"></div>
    </div>
    <div v-else>Page not found</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
// For single-segment paths like 'sample-page', we can use the first element of the array
const slug = Array.isArray(route.params.uri) ? route.params.uri[0] : route.params.uri;
console.log('Slug:', slug);
// const id = ref(1)
const config = useRuntimeConfig();
const { data, pending, error } = useFetch(() => `${config.public.wordpressUrl}/pages`, {
  query: {
    slug: slug,
  },
  transform: (response) => {
    if (!response || !response[0]) return null;

    // Pick only title and description properties
    return {
      title: response[0].title?.rendered,
      content: response[0].content?.rendered,
      acf: response[0].acf?.text_field,
    };
  }
});
</script>
