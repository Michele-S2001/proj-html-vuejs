<script>

export default {
  props: {
    time: {
      type: String,
      default() {
        return '';
      }
    }
  }
}

</script>

<template>

  <li class="trailer flex">
    <img src="../../../img/2-100x100.jpg" alt="">
    <div class="trailer__description flex flex-column">
      <h5>Lorem ipsum dolor sit. Lorem, ipsum.</h5>
      <strong class="views">324 views</strong>
      <div class="date flex justify-between">
        <span>February 12, 2016</span>
        <span>{{ time }}</span>
      </div>
    </div>
  </li>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .trailer {
    gap: 10px;
    margin-bottom: 20px;

    &__description {
      gap: 10px;
      .views {
        font-size: 13px;
      }

      .date > * {
        font-size: 15px;
      }
    }
  }

</style>