<script>
import AppBanner from './AppBanner.vue';
import AppCard from './AppCard.vue';

export default {
  components: { AppBanner, AppCard },

  data() {
    return {
      movies: [
        {
          rating: 0,
          title: 'Hurry animate blue strack new movie',
          category: 'Top rating',
          path: '../../../img/1.jpg',
          views: 381
        },
        {
          rating: 4,
          title: 'Quisque auctor movie in strack',
          category: 'Coming soon',
          path: '../../../img/2.jpg',
          views: 947
        },
        {
          rating: 0,
          title: 'New movie quisque in strack',
          category: 'Latest movie',
          path: '../../../img/5.jpg',
          views: 721
        },
      ],
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
  }
}

</script>

<template>

  <section class="section section-padding">
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
        class="card"/>
      </div>
    </div>
  </section>
  
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    padding: 50px 0;

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
      .active {
        opacity: 1;
        transform: scale(1.1);
        z-index: 3;
      }
    }
  }

</style>