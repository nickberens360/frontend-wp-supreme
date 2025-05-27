<template>
  <div class="app-bar-wrapper">
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
              :src="route.path === '/' ? '/WhiteNBLogo.svg' : '/BlackNBLogo.svg'"
              alt="Logo"
              height="57"
              :width="$vuetify.display.smAndDown ? '120' : '180'"
              placeholder
              class="mr-4 mr-sm-8"
            />
          </div>

          <!-- Desktop Navigation -->
          <div class="d-none d-md-flex">
            <v-btn
              text
              :color="route.path === '/' ? 'white' : 'secondary'"
              to="/">Home</v-btn>
            <v-menu
              open-on-hover
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  text
                  :color="route.path === '/' ? 'white' : 'secondary'"
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
          </div>

          <v-spacer></v-spacer>

          <!-- Contact Button (visible on medium screens and up) -->
          <v-btn
            variant="flat"
            color="primary"
            text-color="white"
            to="/contact"
            class="d-none d-md-flex">Contact</v-btn>

          <!-- Mobile Menu Button -->
          <v-app-bar-nav-icon
            class="d-flex d-md-none"
            :color="route.path === '/' ? 'white' : 'secondary'"
            @click="mobileMenuOpen = !mobileMenuOpen"></v-app-bar-nav-icon>
        </div>
      </v-container>
    </v-app-bar>

    <!-- Mobile Menu Slide Down -->
    <div
      class="mobile-menu-container"
      :class="{ 'mobile-menu-open': mobileMenuOpen }"
      :style="{
        backgroundColor: route.path === '/' ? 'rgba(21, 42, 90, 0.95)' : 'rgba(255, 255, 255, 0.95)'
      }"
    >
      <v-container>
        <v-list bg-color="transparent">
          <v-list-item
            to="/"
            @click="mobileMenuOpen = false"
            :class="{ 'white--text': route.path === '/' }"
          >
            <v-list-item-title
              :style="{ color: route.path === '/' ? 'white' : 'var(--v-secondary-base)' }"
            >
              Home
            </v-list-item-title>
          </v-list-item>

          <v-list-item
            class="mobile-submenu-trigger"
            @click="aboutSubmenuOpen = !aboutSubmenuOpen"
            :class="{ 'white--text': route.path === '/' }"
          >
            <v-list-item-title
              :style="{ color: route.path === '/' ? 'white' : 'var(--v-secondary-base)' }"
            >
              About
              <v-icon
                :color="route.path === '/' ? 'white' : 'secondary'"
                :icon="aboutSubmenuOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              ></v-icon>
            </v-list-item-title>
          </v-list-item>

          <!-- About Submenu -->
          <div
            class="submenu"
            :class="{ 'submenu-open': aboutSubmenuOpen }">
            <v-list-item
              to="/about/team"
              @click="mobileMenuOpen = false"
              :class="{ 'white--text': route.path === '/' }"
            >
              <v-list-item-title
                :style="{ color: route.path === '/' ? 'white' : 'var(--v-secondary-base)' }"
              >
                Our Team
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/about/mission"
              @click="mobileMenuOpen = false"
              :class="{ 'white--text': route.path === '/' }"
            >
              <v-list-item-title
                :style="{ color: route.path === '/' ? 'white' : 'var(--v-secondary-base)' }"
              >
                Our Mission
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/about/history"
              @click="mobileMenuOpen = false"
              :class="{ 'white--text': route.path === '/' }"
            >
              <v-list-item-title
                :style="{ color: route.path === '/' ? 'white' : 'var(--v-secondary-base)' }"
              >
                Our History
              </v-list-item-title>
            </v-list-item>
          </div>

          <v-list-item
            to="/contact"
            @click="mobileMenuOpen = false"
            :class="{ 'white--text': route.path === '/' }"
          >
            <v-list-item-title
              :style="{ color: route.path === '/' ? 'white' : 'var(--v-secondary-base)' }"
            >
              Contact
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-container>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const mobileMenuOpen = ref(false)
const aboutSubmenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
  aboutSubmenuOpen.value = false
})
</script>

<style scoped>
.app-bar {
  margin-bottom: -240px;
  z-index: 100;
}

.app-bar-wrapper {
  position: relative;
}

.mobile-menu-container {
  position: fixed;
  top: 120px; /* Match the AppBar height */
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
  z-index: 99;
}

.mobile-menu-open {
  height: calc(100vh - 120px); /* Full height minus AppBar */
  overflow-y: auto;
}

.mobile-submenu-trigger {
  cursor: pointer;
}

.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-left: 16px;
}

.submenu-open {
  max-height: 300px; /* Adjust as needed */
}

@media (max-width: 600px) {
  .app-bar {
    height: 80px !important;
    margin-bottom: -160px;
  }

  .mobile-menu-container {
    top: 80px; /* Match the smaller AppBar height */
  }

  .mobile-menu-open {
    height: calc(100vh - 80px); /* Full height minus smaller AppBar */
  }
}
</style>