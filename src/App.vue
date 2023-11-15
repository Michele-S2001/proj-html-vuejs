<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      message: 'ciao mega progetto'
    }
  }
}

</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss">
  @use './styles/global.scss';
</style>
