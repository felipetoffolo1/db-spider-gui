<style lang="scss">

@import "/scss/customvariables.sass";
@import url(https://fonts.googleapis.com/css?family=Lato:300);
@import "~bulma/bulma.sass";

* {
  margin: 0;
  padding: 0;
}
// Utils
.padding{
  padding: 10px;
}
//
html,
body,
.mainDiv { height: 100%; width: 100%}
html { background-color: $body-background; }
body, .mainDiv {
  align-items: left;
  background-position: center;
  // background-color: #fff;
  display: flex;
  font-family: Lato, Helvetica, sans-serif;
  justify-content: center;
  text-align: left;
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
