<script>
export default {
  props:['text']
}

</script>

<template>
  <div class="banner">
    <h3 class="banner__title">{{ text }}</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .banner {
    padding: 5px 0 10px 20px;
    border-left: 3px solid $green;
    border-bottom: 2px solid $borderBlue;

    &__title {
      margin-bottom: 10px;
    }
  }

</style>