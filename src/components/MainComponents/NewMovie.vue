<script>
import store from '../../store';
import AppBanner from './AppBanner.vue';
import AppCard from './AppCard.vue';

export default {
  components: { AppBanner, AppCard },

  data() {
    return {
      currIndex: 1
    }
  },

  methods: {
    nextSlide() {
      this.currIndex++;
      if(this.currIndex > 2) {
        this.currIndex = 0
      }
    },

    prevSlide() {
      this.currIndex--;
      if(this.currIndex < 0) {
        this.currIndex = this.movies.length - 1
      }
    }
  },

  computed: {
    movies() {
      return store.movies.slice(0, 3)
    }
  }
}

</script>

<template>

  <section class="section">
    <div class="container">
      <div class="new-movie-selectors flex">
        <AppBanner class="banner" :text="'New Movies'"/>
        <div class="arrows flex">
          <font-awesome-icon @click="prevSlide()" class="arrow" :icon="['fas', 'left-long']" />
          <font-awesome-icon @click="nextSlide()" class="arrow" :icon="['fas', 'right-long']" />
        </div>
      </div>
      <div class="new-movie-cards">
        <AppCard 
        :class="{active: i === currIndex}" 
        v-for="(movie, i) in movies" 
        :movie="movie"
        :round="true"
        class="card"/>
      </div>
    </div>
  </section>
  
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    padding-top: 50px;
    padding-bottom: 50px;

    .new-movie-selectors {
      .banner {
        flex-grow: 1;
      }
      .arrows {
        gap: 10px;
        .arrow {
          border: 1px solid $borderBlue;
          border-radius: 999px;
          padding: 10px;
          cursor: pointer;
          color: $brightGreen;
        }
      }
    }

    .new-movie-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      padding: 100px 0;

      .card {
        opacity: 0.6;
        &.active {
          opacity: 1;
          transform: scale(1.1);
          z-index: 3;
        }
      }
    }
  }

</style>