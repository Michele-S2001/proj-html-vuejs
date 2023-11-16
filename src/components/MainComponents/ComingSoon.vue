<template>

  <section class="section">
    <div class="container-sm">
      <div class="comingSoon flex">
        <div class="comingSoon__inner">
          <strong>coming soon movie</strong>
          <h2 class="title">max still</h2>
          <div class="info main-actors">jon player & emily rose</div>
          <div class="info warning-mess">the countdown is finished!</div>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    padding-top: 220px;
    padding-bottom: 320px;
    background-image: url(../../../img/coming-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;

    .comingSoon {
      justify-content: flex-end;

      &__inner {
        text-transform: uppercase;
        text-align: center;

        strong {
          font-size: 21px;
          color: $green;
        }

        .title {
          font-size: 80px;
          font-weight: 300;
        }

        .info {
          padding: 10px;
          font-weight: 600;
          background-color: rgba($darkBlue, $alpha: 0.7);

          &.main-actors {
            font-size: 21px;
          }
          &.warning-mess {
            font-size: 16px;
          }
        }
      }
    }
  }

</style>