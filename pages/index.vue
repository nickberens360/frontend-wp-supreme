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

    <TabbedContent
      v-if="data?.skillsCalloutBlock && data.skillsCalloutBlock.length > 0"
      :skillCircles="data.skillsCalloutBlock"
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
            <!--            <v-card-title v-html="data?.title"></v-card-title>-->
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
const config = useRuntimeConfig();
const { data, pending, error } = useFetch(() => `${config.public.wordpressUrl}/pages`, {
  query: {
    slug: 'home-page',
  },
  transform: (response) => {
    if (!response?.[0]) return null;

    const page = response[0];
    const pageBanner = page.acf?.page_banner || {};
    const skillsCalloutBlock = page.acf?.skills_callout_block?.[0] || {};

    return {
      title: page.title?.rendered || '',
      content: page.content?.rendered || '',
      acf: page.acf?.text_field || '',
      pageBanner: {
        bannerLabel: pageBanner.banner_label || '',
        bannerHeading: pageBanner.banner_heading || '',
        bannerContent: pageBanner.banner_content || '',
        backgroundImage: pageBanner.banner_image?.url || pageBanner.background_image || '',
        ctaButtonOne: {
          title: pageBanner.cta_button_one?.title || '',
          url: pageBanner.cta_button_one?.url || '',
          target: pageBanner.cta_button_one?.target || '_self'
        },
        ctaButtonTwo: {
          title: pageBanner.cta_button_two?.title || '',
          url: pageBanner.cta_button_two?.url || '',
          target: pageBanner.cta_button_two?.target || '_self'
        }
      },
      skillsCalloutBlock: Array.isArray(skillsCalloutBlock.skill_circles) 
        ? skillsCalloutBlock.skill_circles.map(item => ({
            title: item.skill || '',
            icon: item.icon || '',
            location: item.location || 'top',
            tab_content: item.tab_content || ''
          }))
        : [],
    };
  }
});
</script>
