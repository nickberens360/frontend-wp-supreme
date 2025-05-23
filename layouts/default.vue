<template>
  <v-app>
    <AppBar />

    <v-main>
      <!-- This is where page content will be rendered -->
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '~/components/AppBar.vue';
</script>
