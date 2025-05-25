<template>
  <div>
    <PageBanner
      v-if="data?.pageBanner"
      :backgroundImage="data.pageBanner.backgroundImage"
      :bannerLabel="data.pageBanner.bannerLabel"
      :bannerHeading="data.pageBanner.bannerHeading"
      :bannerContent="data.pageBanner.bannerContent"
      :ctaButtonOne="data.pageBanner.ctaButtonOne"
      :ctaButtonTwo="data.pageBanner.ctaButtonTwo"
      gradient="to bottom right, #152a5a, #09183d, #041c2e, #09324c, #4a7022"
      height="758"
    />

    <PetalCallOut />

    <v-container
      fluid
      class="pa-0"
    >
      <v-row no-gutters>
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
import { transformWordPressPageBanner } from '~/components/PageBanner/utils';

const transform = (response) => {
  const defaultResponse = {
    title: '',
    content: '',
    acf: '',
    pageBanner: transformWordPressPageBanner()
  };

  if (!response?.[0]) return defaultResponse;

  const data = response[0];

  return {
    title: data.title?.rendered,
    content: data.content?.rendered,
    acf: data.acf?.text_field,
    pageBanner: transformWordPressPageBanner(data.acf?.page_banner)
  };
};

const config = useRuntimeConfig();
const { data, pending, error } = useFetch(() => `${config.public.wordpressUrl}/pages`, {
  query: {
    slug: 'home-page',
  },
  transform
});
</script>
