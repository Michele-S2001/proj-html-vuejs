<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    },
    round: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<template>

<div class="card">
  <img class="card__image" :src="movie.path" :class="{rounded: round}">
  <div class="card__body flex flex-column justify-between" :class="{rounded: round}">
    <div class="rating"><span>&starf;</span> {{ movie.rating }}/10</div>
    <font-awesome-icon class="play" :icon="['far', 'circle-play']" size="2xl"/>
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
    user-select: none;
    
    &__image {
      object-fit: cover;
      height: 100%;
    }

    &__body {
      position: absolute;
      inset: 0;
      padding: 30px 0 50px 0;

      &:hover {
        background-image: linear-gradient(to bottom, rgba($green, 0.5), transparent);

        & .play {
          opacity: 1;
        }
      }
      .play {
        opacity: 0;
        cursor: pointer;
      }
      .rating {
        text-align: end;
        padding-right: 10px;
        font-size: 15px;

        span {
          color: $brightGreen;
        }
      }

      .details {
  
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
            background-color: $darkBlue;
            line-height: 40px;
            padding: 0 20px;
          }
        }
        
      }
    }
  }

.rounded {
  border-radius: 40px;
}

</style>