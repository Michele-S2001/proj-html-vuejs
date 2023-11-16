<script>
import NewMovie from './MainComponents/NewMovie.vue';
import MoviePlaylist from './MainComponents/MoviePlaylist.vue';
import ComingSoon from './MainComponents/ComingSoon.vue';
import MovieCatalog from './MainComponents/MovieCatalog.vue';

export default {
  components: {
    NewMovie,
    MoviePlaylist,
    ComingSoon,
    MovieCatalog
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
  <MovieCatalog/>
</template>

<style lang="scss" scoped>
</style>