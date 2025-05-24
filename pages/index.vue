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
interface PageBannerButton {
  title?: string;
  url?: string;
  target?: string;
}

interface CtaButton {
  title: string;
  url: string;
  target: string;
}

interface PageBanner {
  bannerLabel?: string;
  bannerHeading?: string;
  bannerContent?: string;
  backgroundImage?: string;
  ctaButtonOne: PageBannerButton;
  ctaButtonTwo: PageBannerButton;
}

interface TransformedResponse {
  title?: string;
  content?: string;
  acf?: string;
  pageBanner: PageBanner;
}

interface WordPressResponse {
  title?: { rendered: string };
  content?: { rendered: string };
  acf?: {
    text_field?: string;
    page_banner?: {
      banner_label?: string;
      banner_heading?: string;
      banner_content?: string;
      banner_image?: { url: string };
      cta_button_one?: PageBannerButton;
      cta_button_two?: PageBannerButton;
    };
  };
}

const transformButton = (button?: PageBannerButton): CtaButton => ({
  title: button?.title ?? '',
  url: button?.url ?? '#',
  target: button?.target ?? '_self'
});

const transform = (response: WordPressResponse[]): TransformedResponse => {
  const defaultResponse: TransformedResponse = {
    title: '',
    content: '',
    acf: '',
    pageBanner: {
      bannerLabel: '',
      bannerHeading: '',
      bannerContent: '',
      backgroundImage: '',
      ctaButtonOne: transformButton(),
      ctaButtonTwo: transformButton()
    }
  };

  if (!response?.[0]) return defaultResponse;

  const data = response[0];
  const pageBanner = data.acf?.page_banner;

  return {
    title: data.title?.rendered,
    content: data.content?.rendered,
    acf: data.acf?.text_field,
    pageBanner: {
      bannerLabel: pageBanner?.banner_label,
      bannerHeading: pageBanner?.banner_heading,
      bannerContent: pageBanner?.banner_content,
      backgroundImage: pageBanner?.banner_image?.url,
      ctaButtonOne: transformButton(pageBanner?.cta_button_one),
      ctaButtonTwo: transformButton(pageBanner?.cta_button_two)
    }
  };
};
const config = useRuntimeConfig();
const { data, pending, error } = useFetch(() => `${config.public.wordpressUrl}/pages`, {
  query: {
    slug: 'sample-page',
  },
  transform
});
</script>
