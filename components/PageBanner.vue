<template>
  <v-img
    :height="height"
    cover
    :gradient="gradient"
    class="page-banner"
  >
    <v-container
      class="fill-height py-0 mx-auto"
      max-width="1400"
      fluid>
      <v-row
        align="center"
        class="h-100"
      >
        <v-col
          cols="8"
          class="text-white page-banner__content"
        >
          <p
            v-if="bannerData.banner_label"
            class="mb-8 text-uppercase">{{bannerData.banner_label}}</p>
          <h1
            class="text-h1"
            v-if="bannerData.banner_heading"
          >{{ bannerData.banner_heading }}</h1>
          <p
            class="text-caption mb-6 page-banner__supporting-text"
            v-if="bannerData.banner_content"
          >{{ bannerData.banner_content }}</p>
          <div class="d-flex flex-wrap">
            <v-btn
              v-if="bannerData.cta_button_one?.title"
              color="primary"
              size="large"
              class="me-4 mb-2"
              :href="bannerData.cta_button_one.url"
              :target="bannerData.cta_button_one.target"
            >
              {{ bannerData.cta_button_one.title }}
            </v-btn>
            <v-btn
              v-if="bannerData.cta_button_two?.title"
              variant="outlined"
              size="large"
              color="white"
              class="mb-2"
              :href="bannerData.cta_button_two.url"
              :target="bannerData.cta_button_two.target"
            >
              {{ bannerData.cta_button_two.title }}
            </v-btn>
          </div>
          <slot></slot>
        </v-col>
        <v-col
          cols="4"
          class="h-100 d-flex flex-column justify-end pb-0"
        >
          <NuxtImg
            v-if="bannerData.banner_image?.url || bannerData.background_image"
            :src="bannerData.banner_image?.url || bannerData.background_image"
            class="page-banner__img"
            width="640"
            max-width="100%"
          ></NuxtImg>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
  bannerData?: {
    banner_label?: string
    banner_heading?: string
    banner_content?: string
    banner_image?: { url: string }
    background_image?: string
    cta_button_one?: {
      title?: string
      url?: string
      target?: string
    }
    cta_button_two?: {
      title?: string
      url?: string
      target?: string
    }
  }
  height?: number | string
  contentWidth?: number | string
  gradient?: string
}>(), {
  bannerData: () => ({
    banner_label: '',
    banner_heading: '',
    banner_content: '',
    banner_image: { url: '' },
    background_image: '',
    cta_button_one: {
      title: '',
      url: '',
      target: '_self'
    },
    cta_button_two: {
      title: '',
      url: '',
      target: '_self'
    }
  }),
  height: 758,
  contentWidth: 8,
  gradient: 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
})
</script>

<style lang="scss" scoped>
.page-banner {
  &__content {
    z-index: 1;
  }
  &__supporting-text {
    max-width: 500px;
  }
  &__img {
    position: relative;
    left: -250px;
  }
}
</style>
