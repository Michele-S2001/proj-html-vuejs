<script>
import NewMovie from './MainComponents/NewMovie.vue';
import MoviePlaylist from './MainComponents/MoviePlaylist.vue';
import ComingSoon from './MainComponents/ComingSoon.vue';

export default {
  components: {
    NewMovie,
    MoviePlaylist,
    ComingSoon
  },

  data() {
    return {
      message: 'appmain'
    }
  }
}


</script>

<template>
  <NewMovie/>
  <MoviePlaylist/>
  <ComingSoon/>
</template>

<style lang="scss" scoped>
</style>