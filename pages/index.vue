<template>
  <div>
    <PageBanner
      v-if="data?.page?.acf?.page_banner"
      :bannerData="data.page.acf.page_banner"
      gradient="to bottom right, #152a5a, #09183d, #041c2e, #09324c, #4a7022"
      height="758"
    />
    <section>
      <TabbedContent
        v-if="data?.page_skills?.acf?.skills_callout_block?.[0]?.skill_circles"
        :tabData="data.page_skills.acf.skills_callout_block[0]"
        class="pt-16"
      />

      <v-container
        fluid
        max-width="1400">
        <v-row no-gutters>
          <v-col>
            <v-progress-circular
              v-if="pending"
              indeterminate
              color="primary"></v-progress-circular>
            <v-alert
              v-else-if="error"
              type="error">Error loading page</v-alert>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <v-container
        fluid
        max-width="1400">
        <p class="mb-8 text-uppercase">Selected Work</p>
        <h2 class="text-h2 text-accent">Success Stories</h2>
        <v-divider class="mb-8" />
        <h3
          class="text-h3 font-weight-regular mb-16"
          style="max-width: 760px">Find out how I've sparked digital transformation, built relevance, and fueled growth for small businesses to global enterprises.</h3>
        <v-row>
          <v-col
            v-for="project in projects"
            :key="project.id"
            cols="6"
            class="text-center">
            <ResourceBox
              :title="project.title.rendered"
              :excerpt="project.acf.project_excerpt"
              :intro="project.acf.intro"
              :imageUrl="project.acf.featured_img.url"
              :link="project.slug"
              class="mb-8"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

  </div>
</template>

<script setup>
const config = useRuntimeConfig();

// Fetch both home page and projects data in parallel
const { data: rawData, pending, error } = await useAsyncData('homePageAndProjects', () => {
  return Promise.all([
    $fetch(`${config.public.wordpressUrl}/pages?slug=home-page`),
    $fetch(`${config.public.wordpressUrl}/projects`)
  ]);
});


const data = computed(() => {
  if (!rawData.value || !rawData.value[0] || !rawData.value[0][0]) return null;

  const page = rawData.value[0][0];

  return {
    title: page.title?.rendered || '',
    content: page.content?.rendered || '',
    acf: page.acf?.text_field || '',
    page: { acf: { page_banner: page.acf?.page_banner } },
    page_skills: { acf: { skills_callout_block: page.acf?.skills_callout_block } }
  };
});

const projects = computed(() => rawData.value?.[1] || []);

</script>
