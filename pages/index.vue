<template>
  <div>
    <PageBanner
      v-if="data?.page?.acf?.page_banner"
      :bannerData="data.page.acf.page_banner"
      gradient="to bottom right, #152a5a, #09183d, #041c2e, #09324c, #4a7022"
      height="758"
    />
    <scetion>
      <TabbedContent
        v-if="data?.page_skills?.acf?.skills_callout_block?.[0]?.skill_circles"
        :tabData="data.page_skills.acf.skills_callout_block[0]"
        class="pt-16"
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
              <v-card-text v-html="data?.content"></v-card-text>
              <v-card-text v-html="data?.acf"></v-card-text>
            </v-card>
            <v-alert
              v-else
              type="warning">Page not found</v-alert>
          </v-col>
        </v-row>
      </v-container>
    </scetion>

    <section class="py-16">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            class="text-center">
            <h1 class="display-1 font-weight-bold">Success Stories</h1>
          </v-col>
        </v-row>
      </v-container>
    </section>

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

    return {
      title: page.title?.rendered || '',
      content: page.content?.rendered || '',
      acf: page.acf?.text_field || '',
      page: { acf: { page_banner: page.acf?.page_banner } }, // Pass raw page_banner data
      page_skills: { acf: { skills_callout_block: page.acf?.skills_callout_block } } // Pass raw skills_callout_block data
    };
  }
});
</script>
