<template>
  <div class="skills-circle">
    <div class="skills-circle__center">
      {{ centerText }}
    </div>
    <div
      v-for="(circle, index) in circles"
      :key="index"
      class="skills-circle__circle d-flex flex-column justify-center align-center"
      :class="[
        `skills-circle__${circle.location}`,
        { 'skills-circle__active': index === activeIndex }
      ]"
      @click="handleCircleClick(index)"
      style="cursor: pointer;"
    >
      <div>
        <v-icon
          color="secondary"
          :icon="circle.icon"
          size="64"
        />
      </div>
      <div class="skills-circle__title">
        {{ circle.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 withDefaults(defineProps<{
  centerText?: string
  activeIndex?: number
  circles?: Array<{
    title: string
    icon: string
    location: 'top' | 'right' | 'bottom' | 'left'
  }>
}>(), {
  centerText: 'NB',
  activeIndex: 0,
  circles: () => [
    { title: 'Vue.js', icon: 'mdi-vuejs', location: 'top' },
    { title: 'WordPress', icon: 'mdi-wordpress', location: 'right' },
    { title: 'Node.js', icon: 'mdi-nodejs', location: 'bottom' },
    { title: 'TypeScript', icon: 'mdi-language-typescript', location: 'left' }
  ]
})

const emit = defineEmits<{
  (e: 'circle-click', index: number): void
}>()

function handleCircleClick(index: number) {
  emit('circle-click', index)
}
</script>

<style
  scoped
  lang="scss"
>
.skills-circle {
  position: relative;
  width: 560px;
  height: 560px;
  &__circle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(166, 190, 248, 0.63);
    border: 2px solid white;
    transition: all 0.3s ease;
  }
  &__active {
    background: rgba(74, 144, 226, 0.8);
    transform: scale(1.05) translateX(-50%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border: 2px solid #fff;
    z-index: 10;

    &.skills-circle__top {
      transform: scale(1.05) translateX(-50%);
    }
    &.skills-circle__bottom {
      transform: scale(1.05) translateX(-50%);
    }
    &.skills-circle__left {
      transform: scale(1.05) translateY(-50%);
    }
    &.skills-circle__right {
      transform: scale(1.05) translateY(-50%);
    }
  }
  &__top{
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &__right{
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  &__bottom{
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &__left{
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &__center{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75px;
    height: 75px;
    background: rgb(var(--v-theme-secondary));
    border-radius: 50%;
    color: white;
  }

  &__title {
    margin-top: 8px;
  }
}
</style>