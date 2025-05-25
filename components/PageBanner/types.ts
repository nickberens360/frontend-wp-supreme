export interface WordPressPageBanner {
  banner_label?: string;
  banner_heading?: string;
  banner_content?: string;
  background_image?: string;
  banner_image?: { url: string };
  cta_button_one?: {
    title?: string;
    url?: string;
    target?: string;
  };
  cta_button_two?: {
    title?: string;
    url?: string;
    target?: string;
  };
}
