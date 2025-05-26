<template>
  <v-container
    fluid
    max-width="1400">
    <v-row>
      <v-col>
        <SkillsCircle
          centerText="NB"
          :circles="skillCircles"
          :activeIndex="tab"
          @circle-click="handleCircleClick"
        />
      </v-col>
      <v-col>
        <v-tabs
          v-model="tab"
          :mobile="false"
          variant="flat"
          class="mb-8"
        >
          <v-tab
            v-for="(circle, index) in skillCircles"
            :key="index"
            :value="index"
          >
            {{ circle.title }}
          </v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="(circle, index) in skillCircles"
            :key="index"
            :value="index"
          >
            <ClientOnly>
              <div
                class="text-body-6"
                v-html="circle.tab_content"></div>
            </ClientOnly>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const tab = ref(0);
defineProps<{
  skillCircles: Array<{
    title: string;
    icon: string;
    location: 'top' | 'right' | 'bottom' | 'left';
    tab_content: string;
  }>;
}>();

function handleCircleClick(index: number) {
  tab.value = index;
}
</script>