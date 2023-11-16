<script>
import MainFooter from './FooterComponents/MainFooter.vue'

export default {
  components: {
    MainFooter
  },

  data() {
    return {
      message: 'footer'
    }
  }
}

</script>

<template>

  <footer class="page-footer">
    <MainFooter/>
  </footer>

</template>