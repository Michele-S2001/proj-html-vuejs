<script>
import AppBanner from './AppBanner.vue';

export default {
  components: {
    AppBanner
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
          <!-- TODO: TRAILER CARD COMPONENT -->
          <ul class="trailers-list">
            <li class="trailer flex">
              <img src="../../../img/2-100x100.jpg" alt="">
              <div class="trailer__description flex flex-column">
                <h5>Lorem ipsum dolor sit. Lorem, ipsum.</h5>
                <strong class="views">324 views</strong>
                <div class="date flex justify-between">
                  <span>February 12, 2016</span>
                  <span>2.30.000</span>
                </div>
              </div>
            </li>
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
        .trailer {
          gap: 10px;
          margin-bottom: 20px;

          &__description {
            gap: 10px;
            .views {
              font-size: 13px;
            }
          }
        }
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