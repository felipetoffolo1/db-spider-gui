<style lang="scss">
.home{
  width: 100%;
  height: 100%;
  .column-sidebar{
    width: 220px;
  }
}

</style>

<template>
  <div class="home">
    <div class="columns is-fullheight">
      <div class="column is-narrow column-sidebar">

        <side-bar></side-bar>
      </div>
      <div class="column">
        <router-view class="padding"></router-view>

      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './MainView/SideBar';

export default {
  components: {
    SideBar,
  },
  name: 'home',
};
</script>
