<script>
import AppBanner from './AppBanner.vue';
import TrailerCard from './TrailerCard.vue';

export default {
  components: {
    AppBanner,
    TrailerCard
  },

  data() {
    return {
      posts: [
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/blog-100x100.jpg',
          views: 123
        },
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/6-100x100.jpg',
          views: 123
        },
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/blog2-100x100.jpg',
          views: 123
        },
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/blog-100x100.jpg',
          views: 123
        },
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/6-100x100.jpg',
          views: 123
        },
        {
          title: 'lorem ipsum dolor ment upsim calor veru ma come parli',
          path: '../../../img/blog2-100x100.jpg',
          views: 123
        },
      ]
    }
  }
}
</script>

<template>

  <section class="section">
    <div class="container">
      <AppBanner :text="'Movie playlist'"/>
      <div class="trailers grid">
        <div class="trailers__frame flex flex-column justify-between" src="#" controls muted autoplay>
          <div class="dashboard-above flex justify-between">
            <div class="video-header flex items-center">
              <img class="channel-img" src="../../../img/channels4_profile.jpg">
              <p class="video-title">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="controls-up flex">
              <div class="lookLater">
                <font-awesome-icon :icon="['fas', 'clock']" size="xl"/>
              </div>
              <div class="share">
                <font-awesome-icon :icon="['fas', 'share']" size="xl"/>
              </div>
            </div>
          </div>
          <div class="dashboard-below flex">
            <div class="look-on-yt">
              guarda su YouTube
              <font-awesome-icon :icon="['fab', 'youtube']" size="2xl"/>
            </div>
          </div>
        </div>
        <div class="trailers__picker">
          <div class="trailers-header">
            <h4>New movie</h4>
            <span>playing 24</span>
          </div>
          <ul class="trailers-list">
            <TrailerCard v-for="post in posts" :time="'2.30.000'" :article="post"/>
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
    overflow: hidden;

    &__frame {
      grid-column: 1 / span 8;
      width: 100%;
      height: 100%;
      background-color: $black;

      .dashboard-above {
        padding: 10px;
        .video-header {
          gap: 20px;
          .channel-img {
            border-radius: 50%;
            width: 40px;
          }
        }
        .controls-up {
          gap: 25px;
          text-align: center;
          font-size: 14px;
          .lookLater::after {
            content: 'guarda più tardi';
            display: block;
            margin-top: 10px;
          }

          .share::after {
            content: 'condividi';
            display: block;
            margin-top: 10px;
          }
        }
      }
      .dashboard-below {
        margin-bottom: 10px;
        .look-on-yt {
          font-size: 16px;
          background-color: rgba($grey, $alpha: 0.1);
          padding: 10px;
        }
      }
    }

    &__picker {
      grid-column: 9 / -1;
      background-color: $blue;
      overflow: hidden;
      max-height: 500px;

      .trailers-header {
        border-bottom: 2px solid $darkBlue;
      }

      .trailers-list {
        overflow: scroll;
        height: 100%;
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