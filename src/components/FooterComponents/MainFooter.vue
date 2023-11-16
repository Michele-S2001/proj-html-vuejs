<script>
import FooterLinks from '../FooterComponents/FooterLinks.vue';
import TrailerCard from '../MainComponents/TrailerCard.vue';

export default {
  components: {
    FooterLinks,
    TrailerCard
  },

  data() {
    return {
      categoryLinks: [
        {
          text: 'English New Movie',
          href: '#'
        },
        {
          text: 'Hindi All Movie',
          href: '#'
        },
        {
          text: 'Latest Tamil Movie',
          href: '#'
        },
        {
          text: 'New Top Rating Movie',
          href: '#'
        },
        {
          text: 'Homn New Movie',
          href: '#'
        },
        {
          text: 'Animation New Movie',
          href: '#'
        },
      ],
      informationLinks: [
        {
          text: 'Youtube Video Post',
          href: '#'
        },
        {
          text: 'Actor Information',
          href: '#'
        },
        {
          text: 'New Promotion',
          href: '#'
        },
        {
          text: 'Latest Movie In Egnlish',
          href: '#'
        },
        {
          text: 'Latest Film Product',
          href: '#'
        },
        {
          text: 'Video New Video',
          href: '#'
        },
      ],
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
        }
      ]
    }
  }
}
</script>

<template>

  <section class="section section-padding">
    <div class="container">
      <div class="discover grid">
        <div class="discover__branch about">
          <h4 class="branch-title">about us</h4>
          <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde, quas voluptate quae impedit suscipit. Ipsa esse pariatur id aliquam fugit. Natus sequi ullam sapiente. Nostrum consectetur velit quaerat at.</p>
          <ul class="social-icons flex">
            <li class="social-icon bg-lightBlue">
              <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            </li>
            <li class="social-icon bg-lightBlue">
              <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            </li>
            <li class="social-icon bg-waterGreen">
              <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            </li>
            <li class="social-icon bg-clay">
              <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            </li>
            <li class="social-icon bg-redLipstick">
              <a href="#"><font-awesome-icon :icon="['fab', 'pinterest']" /></a>
            </li>
          </ul>
        </div>
        <div class="discover__branch movie-category">
          <h4 class="branch-title">movie category</h4>
          <FooterLinks :links="categoryLinks"/>
        </div>
        <div class="discover__branch information">
          <h4 class="branch-title">information</h4>
          <FooterLinks :links="informationLinks"/>
        </div>
        <div class="discover__branch recents">
          <h4 class="branch-title">recent posts</h4>
          <TrailerCard v-for="(post, i) in posts" :key="i" :article="post"/>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    padding-top: 65px;
    padding-bottom: 65px;
    background-image:
      linear-gradient(to bottom, rgba($blue, 0.9), rgba($blue, 0.9)), 
      url(../../../img/ft-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba($blue, $alpha: 0.5);

    .discover {
      &__branch {

        &.about {
          .social-icons {
            gap: 15px;
            .social-icon {
              width: 40px;
              border-radius: 50%;
              aspect-ratio: 1 / 1;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }

          .text {
            line-height: 24px;
            font-size: 15px;
            margin-bottom: 20px;
          }
        }
        .branch-title {
          line-height: 25px;
          margin-bottom: 40px;
          text-transform: capitalize;
          &::after {
            content: '';
            display: block;
            height: 3px;
            width: 50px;
            background-color: $white;
          }
        }
      }
      & > * {
        grid-column: span 3;
      }
    }
  }

</style>