<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>

  <div class="card">
    <img class="card__image" :src="item.path">
    <div class="card__body flex flex-column">
      <div class="details">
        <div class="details__text">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="details__stats flex justify-between">
          <span class="more">Details</span>
          <span class="share"> Share</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.card {
  position: relative;
  user-select: none;
  
  &__image {
    object-fit: cover;
    height: 100%;
    filter: opacity(50%);
  }

  &__body {
    position: absolute;
    top: 30px;
    bottom: 20px;
    left: 0;
    right: 0;

    .details {
      margin-top: auto;

      &__text {
        padding: 0 20px;
        margin-bottom: 30px;

        h3 {
          margin-bottom: 20px;
          text-transform: capitalize;
          font-size: 18px;
        }
      }

      &__stats {
        font-size: 15px;
        .more {
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          background-color: $darkBlue;
        }

        .share {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        span {
          line-height: 40px;
          padding: 0 20px;
        }
      }
      
    }
  }
}

</style>