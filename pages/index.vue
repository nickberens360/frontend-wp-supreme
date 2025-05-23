<template>
  <div>
    <PageBanner 
      v-if="data?.pageBanner"
      :backgroundImage="data.pageBanner.backgroundImage"
      :bannerHeading="data.pageBanner.bannerHeading"
      :bannerContent="data.pageBanner.bannerContent"
      :ctaButtonOne="data.pageBanner.ctaButtonOne"
      :ctaButtonTwo="data.pageBanner.ctaButtonTwo"
      gradient="to bottom right, #152a5a, #09183d, #041c2e, #09324c, #4a7022"
      height="600"
    />
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

<script setup lang="ts">
const config = useRuntimeConfig();
const { data, pending, error } = useFetch(() => `${config.public.wordpressUrl}/pages`, {
  query: {
    slug: 'sample-page',
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform: (response: any[]) => {
    if (!response || !response[0]) return null;
    return {
      title: response[0].title?.rendered,
      content: response[0].content?.rendered,
      acf: response[0].acf?.text_field,
      pageBanner: {
        bannerLabel: response[0].acf?.page_banner?.banner_label,
        bannerHeading: response[0].acf?.page_banner?.banner_heading,
        bannerContent: response[0].acf?.page_banner?.banner_content,
        backgroundImage: response[0].acf?.page_banner?.banner_image?.url,
        ctaButtonOne: {
          title: response[0].acf?.page_banner?.cta_button_one?.title,
          url: response[0].acf?.page_banner?.cta_button_one?.url,
          target: response[0].acf?.page_banner?.cta_button_one?.target,
        },
        ctaButtonTwo: {
          title: response[0].acf?.page_banner?.cta_button_two?.title,
          url: response[0].acf?.page_banner?.cta_button_two?.url,
          target: response[0].acf?.page_banner?.cta_button_two?.target,
        }
      }
    };
  }
});
</script>
