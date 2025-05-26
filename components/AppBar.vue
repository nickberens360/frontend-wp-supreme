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
          <NuxtImg
            src="/WhiteSupremeGroupLogo.svg"
            alt="Logo"
            height="57"
            width="180"
            placeholder
            class="mr-8"
          />
        </div>

        <v-btn
          text
          color="white"
          to="/">Home</v-btn>
        <v-menu
          open-on-hover
        >
          <template v-slot:activator="{ props }">
            <v-btn
              text
              color="white"
              v-bind="props">
              About
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/about/team">
              <v-list-item-title>Our Team</v-list-item-title>
            </v-list-item>
            <v-list-item to="/about/mission">
              <v-list-item-title>Our Mission</v-list-item-title>
            </v-list-item>
            <v-list-item to="/about/history">
              <v-list-item-title>Our History</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn
          variant="flat"
          color="primary"
          text-color="white"
          to="/contact">Contact</v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.app-bar {
  margin-bottom: -240px;
}
</style>
