<template>
  <div class="petal-callout">
    <div class="petal-callout__center">
      NB
    </div>
    <div class="petal-callout__petal petal-callout__top">
      <v-icon
        color="secondary"
        icon="mdi-wordpress"
        size="64"
      ></v-icon>
    </div>
    <div class="petal-callout__petal petal-callout__right">
      Right
    </div>
    <div class="petal-callout__petal petal-callout__bottom">
      Bottom
    </div>
    <div class="petal-callout__petal petal-callout__left">
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
.petal-callout {
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