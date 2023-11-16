<script>
import MainFooter from './FooterComponents/MainFooter.vue';
import PolicyAndRights from './FooterComponents/PolicyAndRights.vue';

export default {
  components: {
    MainFooter,
    PolicyAndRights
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
    <PolicyAndRights/>
  </footer>

</template>