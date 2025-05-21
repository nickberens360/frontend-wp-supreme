<template>
  <div>
    <h1>{{data?.title}}</h1>
    <div v-html="data?.content"></div>
    <div v-html="data?.acf"></div>
  </div>
</template>

<script setup lang="ts">
// const route = useRoute();
// const uri = route.params.uri.join('/');
// const id = ref(1)
const config = useRuntimeConfig();
const { data, pending, error } = useFetch(() => `${config.public.wordpressUrl}/pages`, {
  query: {
    slug: 'sample-page',
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
