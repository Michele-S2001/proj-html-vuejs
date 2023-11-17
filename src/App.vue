<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  data() {
    return {
      message: 'ciao mega progetto'
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
}

</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>

  <button class="backToTop" @click="scrollToTop()">
    <font-awesome-icon :icon="['fas', 'angle-up']" />
  </button>
</template>

<style lang="scss">
  @use './styles/partials/variables' as *;
  @use './styles/global.scss';

  .backToTop {
    position: fixed;
    right: 50px;
    bottom: 50px;
    background-color: $grey;
    color: $darkBlue;
    padding: 14px;
    border-radius: 12px;
    box-shadow: 2px 2px 5px 2px $black;
    cursor: pointer;
  }
</style>
