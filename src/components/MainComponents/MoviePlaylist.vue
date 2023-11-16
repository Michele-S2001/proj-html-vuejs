<script>
import AppBanner from './AppBanner.vue';
import TrailerCard from './TrailerCard.vue';

export default {
  components: {
    AppBanner,
    TrailerCard
  }
}
</script>

<template>

  <section class="section section-padding">
    <div class="container">
      <AppBanner :text="'Movie playlist'"/>
      <div class="trailers grid">
        <video class="trailers__frame" src="#" controls muted autoplay></video>
        <div class="trailers__picker">
          <div class="trailers-header">
            <h4>New movie</h4>
            <span>playing 24</span>
          </div>
          <ul class="trailers-list">
            <TrailerCard :time="'2.30.000'"/>
          </ul>
        </div>  
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .trailers {
    padding-top: 70px;
    padding-bottom: 70px;
    height: 650px;
    overflow: hidden;

    &__frame {
      grid-column: 1 / span 8;
      width: 100%;
      height: 100%;
    }

    &__picker {
      grid-column: 9 / -1;
      background-color: $blue;
      height: 100%;
      overflow: hidden;

      .trailers-header {
        border-bottom: 2px solid $darkBlue;
      }

      .trailers-list {
        overflow: auto;
      }

      & > * {
        padding: 15px;
      }

      span {
        font-size: 15px;
      }
    }
  }

</style>