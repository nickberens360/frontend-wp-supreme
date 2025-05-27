<template>
  <v-container
    fluid
    max-width="1400">
    <v-row>
      <v-col>
        <SkillsCircle
          centerText="NB"
          :circles="tabData.skill_circles"
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
            v-for="(circle, index) in tabData.skill_circles"
            :key="index"
            :value="index"
          >
            {{ circle.skill }}
          </v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="(circle, index) in tabData.skill_circles"
            :key="index"
            :value="index"
          >
            <div
              class="text-body-6"
              v-html="circle.tab_content"></div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const tab = ref(0);
defineProps<{
  tabData?: {
    skill_circles?: Array<{
      skill?: string;
      icon?: string;
      location?: string;
      tab_content?: string;
    }>;
  };
}>();

function handleCircleClick(index: number) {
  tab.value = index;
}
</script>
