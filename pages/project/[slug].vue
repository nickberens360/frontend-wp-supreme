<template>
  <div>
    <PageBanner
      v-if="project?.acf?.page_banner"
      :bannerData="project.acf.page_banner"
      gradient="to bottom right, #152a5a, #09183d, #041c2e, #09324c, #4a7022"
      height="500"
    />

    <v-container class="py-16">
      <v-row>
        <v-col>
          <v-progress-circular
            v-if="pending"
            indeterminate
            color="primary"></v-progress-circular>
          <v-alert
            v-else-if="error"
            type="error">Error loading project</v-alert>

          <template v-else-if="project">
            <h1 class="text-caption  mb-4">{{ project.title.rendered }}</h1>
            <v-divider class="mb-8" />

            <div
              class="text-h1 text-accent mb-8"
              v-html="project.acf.intro"></div>
          </template>
        </v-col>
      </v-row>
    </v-container>

    <!-- Full width section -->
    <div class="full-width-section">
      <NuxtImg
        v-if="project?.acf?.banner_image"
        :src="project.acf.banner_image.url"
        :alt="project.title.rendered"
        width="100%"
        max-width="100%"
        class="full-width-image"
      />
    </div>

    <v-container class="py-16">
      <v-row>
        <v-col>
          <template v-if="project">
            <p class="text-caption text-accent">Overview</p>
            <div
              v-html="project.acf.overview"
              class="mb-16 text-h3 font-weight-regular"></div>






            <v-divider class="mb-16" />

            <v-row v-if="project.acf.project_details">
              <v-col 
                v-for="(detail, index) in project.acf.project_details"
                :key="index"
                cols="12"
                md="4"
                class="mb-8"
              >
                <v-card
                  elevation="0"
                  border="false"
                  class="pa-4">
                  <v-card-text class="d-flex align-center">
                    <NuxtImg
                      v-if="detail.image"
                      :src="detail.image.url"
                      :alt="detail.title"
                      width="65"
                      height="65"
                      class="mr-2"
                    ></NuxtImg>
                    <h3 class="mb-0 font-weight-bold">{{ detail.title }}</h3>
                  </v-card-text>
                  <div
                    class="text-body-2"
                    v-html="detail.description"></div>
                </v-card>
              </v-col>
            </v-row>

            <v-btn
              v-if="project.acf.link"
              :href="project.acf.link.url"
              :target="project.acf.link.target || '_blank'"
              color="accent"
              variant="outlined"
              size="large"
              class="mt-8 px-8"
            >
              {{ project.acf.link.title || 'Visit Project' }}
            </v-btn>
          </template>

          <v-alert
            v-else
            type="warning">Project not found</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const config = useRuntimeConfig();

// Fetch the single project data
const { data: project, pending, error } = await useFetch(
  () => `${config.public.wordpressUrl}/projects`, 
  {
    query: {
      slug: slug,
    },
    transform: (response) => {
      if (!response || !response[0]) return null;
      return response[0];
    }
  }
);
</script>

<style scoped>
.full-width-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.full-width-image {
  display: block;
  width: 100%;
}
</style>
