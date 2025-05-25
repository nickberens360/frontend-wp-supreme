<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-progress-circular
            v-if="pending"
            indeterminate
            color="primary"></v-progress-circular>
          <v-alert
            v-else-if="error"
            type="error">Error loading page</v-alert>
          <v-card v-else-if="data">
            <v-card-title v-html="data?.title"></v-card-title>
            <v-card-text v-html="data?.content"></v-card-text>
            <v-card-text v-html="data?.acf"></v-card-text>
          </v-card>
          <v-alert
            v-else
            type="warning">Page not found</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
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
