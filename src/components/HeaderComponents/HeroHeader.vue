<template>

  <section class="section section-padding">
    <div class="container-sm">
      <div class="hero flex">
        <div class="hero__introduction">
          <span>Welcome To Our Movies Site</span>
          <h1 class="title">our special <span>movies</span></h1>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam nihil, perferendis error repudiandae labore neque facere, voluptatem cum quos </p>
          <button class="cta-more">Read More</button>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    background-image: url(../../img/slider-1536x520.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 240px;
    padding-bottom: 240px;
    .hero {
      text-align: center;
      justify-content: flex-end;
  
      &__introduction {
        max-width: 500px;
  
        .cta-more {
          background-color: $green;
          font-weight: 600;
          line-height: 40px;
          padding: 0 15px;
          border-radius: 18px;
        }
        .title {
          font-size: 50px;
          font-weight: 300;
          text-transform: uppercase;
          margin: 12px 0;
  
          span {
            color: $green;
          }
        }
  
        .description {
          font-size: 16px;
          margin-bottom: 20px;
        }
      }
    }
  }

</style>