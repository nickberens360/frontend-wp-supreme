<template>
  <v-card>
    <NuxtImg
      src="/images/resource-box-bg.jpg"
      width="668"
      max-width="100%"
      class="resource-box__image" />
    <v-card-title class="resource-box__title">
      <h2 class="text-h5 font-weight-bold">Resource Title</h2>
    </v-card-title>
    <v-card-text class="resource-box__text">
      <p>
        This is a brief description of the resource. It provides an overview of what the resource is about.
      </p>
    </v-card-text>
    <v-card-actions class="resource-box__actions">
      <v-btn
        variant="outlined"
        color="primary"
        size="small"
        class="mr-2"
        :to="{ name: 'resourceDetails' }"
      >
        View Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">

</script>

<style
  scoped
  lang="scss"
>

</style>