import type { WordPressPageBanner } from './types';

interface TransformedButton {
  title: string;
  url: string;
  target: string;
}

export function transformButton(button?: { title?: string; url?: string; target?: string }): TransformedButton {
  return {
    title: button?.title || '',
    url: button?.url || '',
    target: button?.target || '_self'
  };
}

export function transformWordPressPageBanner(pageBanner?: WordPressPageBanner) {
  if (!pageBanner) {
    return {
      bannerLabel: '',
      bannerHeading: '',
      bannerContent: '',
      backgroundImage: '',
      ctaButtonOne: transformButton(),
      ctaButtonTwo: transformButton()
    };
  }

  return {
    bannerLabel: pageBanner.banner_label || '',
    bannerHeading: pageBanner.banner_heading || '',
    bannerContent: pageBanner.banner_content || '',
    backgroundImage: pageBanner.banner_image?.url || pageBanner.background_image || '',
    ctaButtonOne: transformButton(pageBanner.cta_button_one),
    ctaButtonTwo: transformButton(pageBanner.cta_button_two)
  };
}
