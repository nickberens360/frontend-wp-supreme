<template>
  <v-card
    border="false"
    elevation="0"
    class="resource-box text-left">
    <NuxtImg
      v-if="imageUrl"
      :src="imageUrl"
      width="668"
      max-width="100%"
      class="resource-box__image" />
    <v-card-text class="resource-box__text">
      <p class="text-h3 text-accent">
        {{excerpt}}
      </p>
      <p>{{intro}}</p>
    </v-card-text>
    <v-card-actions class="resource-box__actions">
      <v-btn
        variant="outlined"
        color="accent"
        size="large"
        :to="`/project/${link}`"
        class="px-8"
      >
        View Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    excerpt?: string;
    intro?: string;
    imageUrl?: string;
    link?: string;
  }>(),
  {
    title: 'Resource Title',
    excerpt: 'This is a brief description of the resource.',
    intro: 'This is an introductory text for the resource.',
    imageUrl: ''
  }
);
</script>

<style
  scoped
  lang="scss"
>
.resource-box__image {
  border-radius: 16px;
}
</style>
