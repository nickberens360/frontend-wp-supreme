<template>
  <div class="skills-circle">
    <div class="skills-circle__center">
      NB
    </div>
    <div class="skills-circle__petal skills-circle__top">
      <v-icon
        color="secondary"
        icon="mdi-vuejs"
        size="64"
      ></v-icon>
    </div>
    <div class="skills-circle__petal skills-circle__right">
      Right
    </div>
    <div class="skills-circle__petal skills-circle__bottom">
      Bottom
    </div>
    <div class="skills-circle__petal skills-circle__left">
      Left
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>

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
}

</style>
