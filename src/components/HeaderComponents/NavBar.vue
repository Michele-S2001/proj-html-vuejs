<script>

export default {
  props: {
    navData: {
      type: Array,
      required: true
    }
  },
}

</script>

<template>

  <section class="section">
    <div class="container">
      <nav class="navbar flex justify-between">

        <ul class="nav-items flex">
          <li v-for="(item, i) in navData" :key="i" class="nav-item">
            <a :href="item.link">{{ item.text }}</a>
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
      padding: 25px 0;
      .nav-items {
        gap: 30px;
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