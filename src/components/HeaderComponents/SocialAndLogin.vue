<template>

  <section class="section">
    <div class="container">

      <div class="interactions-wrap flex justify-between items-center">
        <div class="contacts flex items-center">
          <div class="email flex items-center">
            <font-awesome-icon :icon="['far', 'envelope']" />
            <p class="email__description">
              Superhit Top Movie
              <span>&star;&star; King Star &star;&star;</span>
            </p>
          </div>
          <ul class="social flex">
            <li>
              <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            </li>
            <li>
              <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            </li>
            <li>
              <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            </li>
            <li>
              <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            </li>
            <li>
              <a href="#"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a>
            </li>
          </ul>
        </div>
        <div class="login flex">
          <font-awesome-icon :icon="['fas', 'lock']" />
          <a href="#">Login</a>
        </div>
      </div>

    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    padding-top: 21px;
    padding-bottom: 21px;
    font-size: 14px;
    border-bottom: 2px solid $borderBlue;

    .contacts {
      gap: 30px;

      .email {
        gap: 5px;
  
        &__description {
          span {
            color: $green;
          }
        }
      }

      .social {
        gap: 10px;
      }
    }

    .login {
      gap: 5px;
    }

  }

</style>