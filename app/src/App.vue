<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  .mainDiv { height: 100%; width: 100%}
  html { background-color: #fff; }
  body, .mainDiv {
    align-items: center;
    background-position: center;
    background-color: #fff;
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
