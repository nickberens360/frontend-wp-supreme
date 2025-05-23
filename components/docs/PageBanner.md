# PageBanner Component

The PageBanner component is a versatile hero section for marketing sites, built with Vuetify's v-img component. It features a background image with a customizable gradient overlay, heading, content text, and call-to-action buttons.

## Features

- Background image with gradient overlay
- Customizable height
- Responsive layout
- Support for heading and content text
- Two optional call-to-action buttons
- Slot for additional custom content

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| backgroundImage | String | Yes | - | URL of the background image |
| bannerHeading | String | No | - | Main heading text |
| bannerContent | String | No | - | Supporting content text |
| height | Number/String | No | 500 | Height of the banner in pixels |
| contentWidth | Number/String | No | 8 | Width of the content column (1-12 grid system) |
| gradient | String | No | 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)' | CSS gradient for the overlay |
| ctaButtonOne | Object | No | {} | Primary call-to-action button |
| ctaButtonTwo | Object | No | {} | Secondary call-to-action button |

### Button Object Properties

Both `ctaButtonOne` and `ctaButtonTwo` accept objects with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| title | String | Button text |
| url | String | Button link URL |
| target | String | Link target (e.g., '_self', '_blank') |

## Usage Example

```vue
<template>
  <PageBanner 
    backgroundImage="/images/hero-background.jpg"
    bannerHeading="Welcome to Our Site"
    bannerContent="Discover our amazing products and services"
    :ctaButtonOne="{
      title: 'Learn More',
      url: '/about',
      target: '_self'
    }"
    :ctaButtonTwo="{
      title: 'Contact Us',
      url: '/contact',
      target: '_self'
    }"
    gradient="to bottom, rgba(25,32,72,.7), rgba(25,32,72,.9)"
    height="600"
  />
</template>
```

## Customization Examples

### Different Gradient Styles

```vue
<!-- Blue gradient -->
<PageBanner 
  gradient="to bottom, rgba(25,32,72,.7), rgba(25,32,72,.9)"
  ...
/>

<!-- Red gradient -->
<PageBanner 
  gradient="to bottom, rgba(220,20,60,.6), rgba(139,0,0,.8)"
  ...
/>

<!-- Diagonal gradient -->
<PageBanner 
  gradient="to bottom right, rgba(0,0,0,.2), rgba(0,0,0,.8)"
  ...
/>
```

### Using the Slot

You can add additional content using the default slot:

```vue
<PageBanner backgroundImage="/images/hero.jpg">
  <v-chip class="mt-4" color="primary">Limited Time Offer</v-chip>
  <div class="mt-8">
    <v-rating :value="4.5" readonly></v-rating>
    <p class="text-caption">Based on 200+ reviews</p>
  </div>
</PageBanner>
```

## Responsive Behavior

The component is fully responsive:
- On mobile devices, the content takes the full width (12 columns)
- On medium and larger screens, the content width is determined by the `contentWidth` prop (default: 8 columns)