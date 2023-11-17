<script>
import store from '../../store';
import NavDropDown from './NavDropDown.vue';

export default {
  components: {
    NavDropDown
  },

  methods: {
    hasProprety(object) {
      return Object.hasOwn(object,"dropDownLinks")
    }
  },

  computed: {
    data() {
      return store.navData
    },
  }
}

</script>

<template>

  <section class="section">
    <div class="container">
      <nav class="navbar flex items-center justify-between">

        <ul class="nav-items flex">
          <li v-for="(item, i) in data" :key="i" class="nav-item">
            <a :href="item.link">{{ item.text }}</a>
            <font-awesome-icon 
              class="arrow" v-if="hasProprety(item)" 
              :icon="['fas', 'caret-down']"
            />
            <NavDropDown :links="item.dropDownLinks" class="dropdown" v-if="hasProprety(item)"/>
          </li>
        </ul>

        <div class="nav-shop">
          <font-awesome-icon :icon="['fas', 'basket-shopping']" />
          <span class="num">0</span>
        </div>

      </nav>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    .navbar {
      .nav-items {
        gap: 30px;

        .nav-item {
          position: relative;

          & a {
            line-height: 60px;
          }
          &:hover .dropdown {
            display: block;
          }
          .dropdown {
            position: absolute;
            top: 50px;
            left: -10px;
            display: none;
          }
          .arrow {
            margin-left: 10px;
          }

          &:hover {
            & a {
              color: $green;
            }
            & .arrow {
              color: $green;
            }
          }
        }
      }

      .nav-shop {
        position: relative;
        .num {
          position: absolute;
          right: -5px;
          top: -10px;
          z-index: 10;
          font-size: 12px;
          background-color: $green;
          border-radius: 50%;
          padding: 0 3px;
        }
      }
    }
  }

</style>