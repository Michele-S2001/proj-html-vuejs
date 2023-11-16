<script>
import SocialAndLogin from './HeaderComponents/SocialAndLogin.vue';
import SearchInputHeader from './HeaderComponents/SearchInputHeader.vue';
import NavBar from './HeaderComponents/NavBar.vue';
import HeroHeader from './HeaderComponents/HeroHeader.vue';

export default {

  components: {
    SocialAndLogin,
    SearchInputHeader,
    NavBar,
    HeroHeader
  },

  data() {
    return {
      message: 'AppHeader.vue',
    }
  }
}

</script>

<template>
  
  <header class="page-header">
    <SocialAndLogin/>
    <SearchInputHeader/>
    <NavBar/>
    <HeroHeader/>
  </header>

</template>

<style lang="scss" scoped>

</style>
