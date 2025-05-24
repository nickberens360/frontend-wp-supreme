<template>
  <v-img
    :height="height"
    cover
    :gradient="gradient"
    class="page-banner"
  >
    <v-container
      class="fill-height pa-0 mx-auto"
      max-width="1400"
      fluid>
      <v-row
        align="center"
        class="h-100"
      >
        <v-col
          cols="7"
          class="text-white"
        >
          <p
            v-if="bannerLabel"
            class="mb-8 text-uppercase">{{bannerLabel}}</p>
          <h1
            class="text-h2 font-weight-bold mb-4"
            v-if="bannerHeading"
          >{{ bannerHeading }}</h1>
          <p
            class="text-h6 mb-6"
            v-if="bannerContent"
          >{{ bannerContent }}</p>
          <div class="d-flex flex-wrap">
            <v-btn
              v-if="ctaButtonOne?.title"
              color="primary"
              size="large"
              class="me-4 mb-2"
              :href="ctaButtonOne.url"
              :target="ctaButtonOne.target"
            >
              {{ ctaButtonOne.title }}
            </v-btn>
            <v-btn
              v-if="ctaButtonTwo?.title"
              variant="outlined"
              size="large"
              color="white"
              class="mb-2"
              :href="ctaButtonTwo.url"
              :target="ctaButtonTwo.target"
            >
              {{ ctaButtonTwo.title }}
            </v-btn>
          </div>
          <slot></slot>
        </v-col>
        <v-col
          cols="5"
          class="h-100 d-flex flex-column justify-end pb-0"
        >
          <NuxtImg
            v-if="backgroundImage"
            :src="backgroundImage"
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
interface CtaButton {
  title: string
  url: string
  target: string
}
withDefaults(defineProps<{
  bannerLabel?: string
  bannerHeading?: string
  bannerContent?: string
  backgroundImage?: string
  height?: number | string
  contentWidth?: number | string
  gradient?: string
  ctaButtonOne?: CtaButton
  ctaButtonTwo?: CtaButton
}>(), {
  bannerLabel: '',
  backgroundImage: '',
  height: 758,
  contentWidth: 8,
  gradient: 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)',
  ctaButtonOne: () => ({
    title: '',
    url: '',
    target: '_self'
  }),
  ctaButtonTwo: () => ({
    title: '',
    url: '',
    target: '_self'
  })
})
</script>

<style lang="scss" scoped>
.page-banner {
  &__img {
    position: relative;
    max-height: 100%;
    object-fit: contain;

    @media (min-width: 960px) {
      left: -50px;
    }

    @media (min-width: 1264px) {
      left: -100px;
    }

    @media (min-width: 1904px) {
      left: -150px;
    }
  }
}
</style>
