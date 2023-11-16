<template>

  <section class="section section-padding">
    <div class="container">
      <div class="form">
        <div class="form__inputs flex justify-around">
          <input type="text" placeholder="First Name">
          <input type="text" placeholder="Last Name">
          <input type="email" placeholder="Email Address">
        </div>
        <button class="cta-submit">Subscribe</button>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .form {
    padding: 120px 0;
    background-image: url(../../../img/form-bg-1.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;

    &__inputs {
      margin-bottom: 45px;
      input {
        border: 1px solid rgba($white, $alpha: 0.7);
        line-height: 50px;
        border-radius: 30px;
        padding: 0 20px;
        color: $white;

        &::placeholder {
          color: rgba($white, $alpha: 0.6);
        }
      }
    }

    .cta-submit {
      background-color: $darkBlue;
      font-size: 14px;
      line-height: 60px;
      padding: 0 40px;
      border-radius: 40px;
    }
  }

</style>