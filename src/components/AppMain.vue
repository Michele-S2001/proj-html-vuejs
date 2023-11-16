<script>
import NewMovie from './MainComponents/NewMovie.vue';
import MoviePlaylist from './MainComponents/MoviePlaylist.vue';
import ComingSoon from './MainComponents/ComingSoon.vue';
import MovieCatalog from './MainComponents/MovieCatalog.vue';
import LatestNews from './MainComponents/LatestNews.vue';
import MainForm from './MainComponents/MainForm.vue';

export default {
  components: {
    NewMovie,
    MoviePlaylist,
    ComingSoon,
    MovieCatalog,
    LatestNews,
    MainForm
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
  <LatestNews/>
  <MainForm/>
</template>

<style lang="scss" scoped>
</style>