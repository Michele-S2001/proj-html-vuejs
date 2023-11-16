<template>

  <div class="section">
    <div class="container">
      <div class="termsOfUse flex justify-between">
        <div class="termsOfUse__left flex">
          <span>
            <a href="#">term and conditions</a>
          </span>
          <span>
            <a href="#">policy</a>
          </span>
          <span>
            <a href="#">about</a>
          </span>
        </div>
        <div class="termsOfUse__right">
          <p>&copy; 2020 <span>@themepul</span> all rights reserved.</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    padding-top: 30px;
    padding-bottom: 30px;

    .termsOfUse {
      font-size: 16px;
      text-transform: capitalize;
      &__left {
        gap: 30px;
      }

      &__right {
        span {
          color: $green;
        }
      }
    }
  }

</style>