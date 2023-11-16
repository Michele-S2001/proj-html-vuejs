<script>

export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}

</script>

<template>

  <ul class="footer-links flex flex-column">
    <li v-for="(link, i) in links" class="footer-link">
      <a :href="link.href">{{ link.text }}</a>
    </li>
  </ul>

</template>

<style lang="scss" scoped>

  .footer-links {
    gap: 30px;

    & > * {
      font-size: 15px;
    }
  }

</style>