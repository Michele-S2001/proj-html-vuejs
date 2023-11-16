<script>
import AppBanner from './AppBanner.vue';
import AppCard from './AppCard.vue';

export default {
  components: {
    AppBanner,
    AppCard
  },

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
    }
  }
}
</script>

<template>

  <section class="section">
    <div class="container">
      <AppBanner :text="'New movie'"/>
      <ul class="categories flex">
        <li class="category show">All</li>
        <li class="category">Coming soon</li>
        <li class="category">Latest movie</li>
        <li class="category">Top rating</li>
        <li class="category">TV Series</li>
      </ul>
      <div class="movies-showcase grid">
        <AppCard class="card" v-for="(movie, i) in movies" :key="i" :movie="movie" :round="false"/>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    padding-top: 85px;
    padding-bottom: 85px;

    .movies-showcase {
      .card {
        grid-column: span 4;
      }
    }

    .categories {
      gap: 40px;
      padding: 50px 0;

      .category {
        user-select: none;
        cursor: pointer;
      }
      .category.show {
        color: $green;
      }
    }
  }
</style>