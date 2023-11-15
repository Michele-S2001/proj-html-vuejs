<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>

<div class="card">
  <img class="card__image" :src="movie.path">
  <div class="card__body flex flex-column">
    <div class="rating"><span>&starf;</span> {{ movie.rating }}/10</div>
    <div class="details">
      <div class="details__text">
        <h3>{{ movie.title }}</h3>
        <strong>Category:</strong><span class="category">{{ movie.category }}</span>
      </div>
      <div class="details__stats flex justify-between">
        <span class="more">Details</span>
        <span class="views">{{ movie.views }} Views</span>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.card {
  position: relative;
  opacity: 0.6;
  user-select: none;
  
  &__image {
    object-fit: cover;
    height: 100%;
    border-radius: 40px;
    
  }

  &__body {
    position: absolute;
    top: 30px;
    bottom: 50px;
    left: 0;
    right: 0;

    .rating {
      text-align: end;
      padding-right: 10px;
      font-size: 15px;

      span {
        color: $brightGreen;
      }
    }

    .details {
      margin-top: auto;

      &__text {
        padding: 0 20px;
        margin-bottom: 30px;

        h3 {
          margin-bottom: 20px;
          text-transform: capitalize;
        }

        .category {
          font-size: 13px;
          padding-left: 10px;
        }
      }

      &__stats {
        font-size: 15px;
        .more {
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        .views {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        span {
          background-color: $blue;
          line-height: 40px;
          padding: 0 20px;
        }
      }
      
    }
  }
}

</style>