<template>

  <section class="section section-padding">
    <div class="container">
      <div class="search-section flex justify-between">
        <div class="logo">
          <img src="../../../img/cropped-logo.png" alt="Logo">
        </div>
        <div class="search-input">
          <input type="text" placeholder="Search...">
          <button class="cta-search">Search</button>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

  .section {
    border-bottom: 2px solid $borderBlue;
    padding-top: 15px;
    padding-bottom: 40px;
    .search-section {
      .search-input {
        align-self: flex-end;
        * {
          line-height: 40px;
        }
        input {
          border: 2px solid $borderBlue;
          color: $white;
          padding: 0 10px ;
          &::placeholder {
            color: $borderBlue;
          } 
        }
        .cta-search {
          background-color: $brightGreen;
          border: 2px solid $brightGreen;
          padding: 0 21px;
          font-size: 14px;
          font-weight: 600;
          color: $white;
        }
      }
    }
  }


</style>