<script>
import SocialAndLogin from './HeaderComponents/SocialAndLogin.vue';
import SearchInputHeader from './HeaderComponents/SearchInputHeader.vue';

export default {

  components: {
    SocialAndLogin,
    SearchInputHeader
  },

  data() {
    return {
      message: 'AppHeader.vue'
    }
  }
}

</script>

<template>
  
  <header class="page-header">
    <SocialAndLogin/>
    <SearchInputHeader/>
  </header>

</template>

<style lang="scss" scoped>

</style>
