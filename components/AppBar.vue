<template>
  <v-app-bar
    app
    elevation="0"
    color="transparent"
    height="120"
    class="app-bar position-relative"
  >
    <v-container
      class="px-4 mx-auto"
      max-width="1400">
      <div class="d-flex align-center">
        <!-- Logo on the left -->
        <div class="logo">
          <NuxtLink
            to="/"
            class="d-flex align-center">
            <NuxtImg
              :src="route.path === '/' ? '/WhiteNBLogo.svg' : '/BlackNBLogo.svg'"
              alt="Logo"
              height="57"
              width="180"
              placeholder
              class="mr-8"
            />
          </NuxtLink>
        </div>
        <v-spacer></v-spacer>
        <v-menu
          v-model="showContactMenu"
          :close-on-content-click="false">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="flat"
              color="primary"
              text-color="white">Intro Call?</v-btn>
          </template>
          <v-card min-width="300">
            <v-card-title>Contact Information</v-card-title>
            <v-card-text>
              <div class="d-flex flex-column">
                <span>Email: <a href="mailto:nickberens360@gmail.com">nickberens360@gmail.com</a></span>
                <span>Phone: <a href="tel:9207072942">920-707-2942</a></span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                @click="showContactMenu = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
const route = useRoute()
const showContactMenu = ref(false)
</script>

<style scoped>
.app-bar {
  margin-bottom: -240px;
}
</style>
