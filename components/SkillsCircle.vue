<template>
  <div class="skills-circle">
    <div class="skills-circle__center">
      {{ centerText }}
    </div>
    <div 
      v-for="(petal, index) in petals" 
      :key="index"
      class="skills-circle__petal d-flex flex-column justify-center align-center"
      :class="`skills-circle__${petal.location}`"
    >
      <div>
        <v-icon
          color="secondary"
          :icon="petal.icon"
          size="64"
        />
      </div>
      <div class="skills-circle__title">
        {{ petal.title }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  centerText?: string
  petals?: Array<{
    title: string
    icon: string
    location: 'top' | 'right' | 'bottom' | 'left'
  }>
}>(), {
  centerText: 'NB',
  petals: () => [
    { title: 'Vue.js', icon: 'mdi-vuejs', location: 'top' },
    { title: 'WordPress', icon: 'mdi-wordpress', location: 'right' },
    { title: 'Node.js', icon: 'mdi-nodejs', location: 'bottom' },
    { title: 'TypeScript', icon: 'mdi-language-typescript', location: 'left' }
  ]
})
</script>
<style
  scoped
  lang="scss"
>
.skills-circle {
  position: relative;
  width: 560px;
  height: 560px;
  border: 1px solid red;
  &__petal {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(166, 190, 248, 0.63);
    border: 2px solid white
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
    z-index: 1;
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
