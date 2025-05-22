<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-progress-circular v-if="pending" indeterminate color="primary"></v-progress-circular>
          <v-alert v-else-if="error" type="error">Error loading page</v-alert>
          <v-card v-else-if="data">
            <v-card-title v-html="data?.title"></v-card-title>
            <v-card-text v-html="data?.content"></v-card-text>
            <v-card-text v-html="data?.acf"></v-card-text>
          </v-card>
          <v-alert v-else type="warning">Page not found</v-alert>
        </v-col>
      </v-row>
    </v-container>
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
