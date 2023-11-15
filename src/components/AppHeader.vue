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
      navData: [
        {
          text: 'Home',
          link: '#'
        },
        {
          text: 'Celebrity',
          link: '#'
        },
        {
          text: 'Movie',
          link: '#'
        },
        {
          text: 'Page',
          link: '#'
        },
        {
          text: 'Shop',
          link: '#'
        },
        {
          text: 'Blog',
          link: '#'
        },
        {
          text: 'Contacts Us',
          link: '#'
        },
      ]
    }
  }
}

</script>

<template>
  
  <header class="page-header">
    <SocialAndLogin/>
    <SearchInputHeader/>
    <NavBar :navData="navData"/>
    <HeroHeader/>
  </header>

</template>

<style lang="scss" scoped>

</style>
