<script>
import NewMovie from './MainComponents/NewMovie.vue';
import MoviePlaylist from './MainComponents/MoviePlaylist.vue';

export default {
  components: {
    NewMovie,
    MoviePlaylist
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
</template>

<style lang="scss" scoped>
</style>