<script>
import AppBanner from './AppBanner.vue';
import PrimaryNewsCard from './PrimaryNewsCard.vue';
import SecondaryNewsCard from './SecondaryNewsCard.vue';

export default {
  components: {
    AppBanner,
    PrimaryNewsCard,
    SecondaryNewsCard
  },

  data() {
    return {
      mainNews: {
        title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
        path: '../../../img/blog-570x570.jpg'
      },
      news: [
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/blog2-300x300.jpg'
        },
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/blog3-300x300.jpg'
        },
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/blog4-300x300.jpg'
        },
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/blog5-300x300.jpg'
        }
      ]
    }
  }
}
</script>

<template>

  <section class="section">
    <div class="container">
      <AppBanner :text="'Latest news'"/>
      <div class="news grid">
        <PrimaryNewsCard class="news__card" :item="mainNews"/>
        <SecondaryNewsCard class="news__card" v-for="n in news" :item="n"/>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .news{
    padding-top: 72px;

    &__card:first-child {
      grid-column: span 6;
      grid-row: span 2
    }

    &__card {
      grid-column:  span 3;
    }
  }
</style>