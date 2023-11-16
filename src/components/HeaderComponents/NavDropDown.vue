<script>
export default {
  props: {
    links: {
      type: Object,
      required: true
    }
  }
}

</script>

<template>

  <ul class="menu">
    <li v-for="link in links" class="menu__item">
      <a :href="link.href">{{ link.text }}</a>
    </li>
  </ul>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .menu {
    background-color: $darkBlue;
    z-index: 999;
    min-width: 200px;
    padding: 10px 0;
    font-size: 15px;

    &__item {
      white-space: nowrap;
      &:hover {
        background-color: $blue;
      }

      & a {
        line-height: 40px;
        padding: 0 20px;
      }
    }
  }

</style>