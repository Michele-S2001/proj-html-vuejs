<script>
import store from '../../store';
import AppBanner from './AppBanner.vue';
import AppCard from './AppCard.vue';

export default {
  components: {
    AppBanner,
    AppCard
  },

  data() {
    return {
      genrs: [
        'All',
        'Coming soon',
        'Latest movie',
        'Top rating',
        'TV Series'
      ],
      currIndex: 0,
      activeCategory: 'All',
      store,
    }
  },

  methods: {
    genrSelected(index, gen) {
      this.currIndex = index;
      this.activeCategory = gen;
    }
  },

  computed: {
    movies() {
      if(this.activeCategory === 'All') {
        return this.store.movies
      } else {
        return this.store.movies.filter(el => (el.category === this.activeCategory))
      }
    }
  }
}
</script>

<template>

  <section class="section">
    <div class="container">
      <AppBanner :text="'New movie'"/>
      <ul class="categories flex">
        <li 
          v-for="(genr, i) in genrs" 
          :key="i" 
          class="category"
          :class="{show: i === currIndex}"
          @click="genrSelected(i, genr)"
        >
          {{ genr }}
        </li>
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