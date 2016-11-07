<style lang="scss">
// Bula variables override
$primary: #FFC107;
$grey-dark: #424242;

// // Dark Theme
// $background: #303030 !default;
// $body-background: $background;
// $text: #EEEEEE !default;
// $control: #EEEEEE;
// //Tabla variables
// $table: $text !default;
// $table-background: $background !default;
// $table-border: $text !default;
// $table-row-hover-background: $grey-dark !default
// $table-row-even-background: $grey-dark !default

// Colors :
// $strawberry: #BF3030 !default;
//
// $grey-darker: #222324 !default;
// $grey-dark: #69707a !default;
// $grey: #aeb1b5 !default;
// $grey-light: #d3d6db !default;
// $grey-lighter: #f5f7fa !default;
//
// $blue: #42afe3 !default;
// $green: #97cd76 !default;
// $orange: #f68b39 !default;
// $purple: #847bb9 !default;
// $red: #ed6c63 !default;
// $turquoise: #1fc8db !default;
// $yellow: #fce473 !default;
//
//
// // Theme :
// $primary: $grey-dark;
// $warning: $strawberry;
//
// $info: $grey-light;
// $success: $green;
// $danger: $orange;

@import url(https://fonts.googleapis.com/css?family=Lato:300);
@import "../../node_modules/bulma/bulma.sass";

* {
  margin: 0;
  padding: 0;
}

html,
body,
.mainDiv { height: 100%; width: 100%}
html { background-color: $body-background; }
body, .mainDiv {
  align-items: center;
  background-position: center;
  // background-color: #fff;
  display: flex;
  font-family: Lato, Helvetica, sans-serif;
  justify-content: center;
  text-align: center;
}
.is-fullheight{
  height: 100%;
}
</style>

<template>
  <div class="mainDiv">
    <router-view></router-view>
  </div>
</template>

<script>
import store from 'src/vuex/store';

export default {
  store,
};
</script>
