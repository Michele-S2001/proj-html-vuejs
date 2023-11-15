<script>
import AppHeader from './components/AppHeader.vue';

export default {
  
  components: {
    AppHeader
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
</template>

<style lang="scss">
  @use './styles/global.scss';
</style>
