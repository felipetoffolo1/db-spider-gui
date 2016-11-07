<template>
  <div class="sidebar is-fullheight">
    <aside class="menu">
      <p class="menu-label">
        Branchs
      </p>
      <ul class="menu-list">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Customers</a></li>
      </ul>
      <p class="menu-label">
        Database
      </p>
      <p class="control">
        <span class="select is-fullwidth">
          <select>
            <option>Database 1</option>
            <option>Database 2</option>
          </select>
        </span>
      </p>
      <ul class="menu-list">
        <li>
          <a aria-expanded="show" v-on:click="show = !show" class="is-active" >
            Tables
          </a>
          <expanding>
            <ul v-show="show">
              <li><router-link :to="'table'">table_1</li>
                <li><a href="#">table_2</a></li>
                <li><a href="#">table#3</a></li>
              </ul>
            </expanding>
          </li>
          <li><a href="#">Views</a></li>
          <li><a href="#">Procedures</a></li>
        </ul>
      </aside>
    </div>
  </template>

  <script>
  import Expanding from 'vue-bulma-expanding';

  export default {
    components: {
      Expanding,
    },

    data() {
      return {
        show: false,
      };
    },
  };
  </script>

  <style lang="scss">
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';
  @import '../../scss/customvariables';
  .sidebar{
    background-color: $grey-darker;
    .menu{
      padding: 10px;
      align-items: left;
      text-align: left;
      .menu-label {
        padding-left: 5px;
        color: $primary;
      }
      .menu-list {
        li a {
          &[aria-expanded="true"] {
            .is-angle {
              transform: rotate(180deg);
            }
          }
        }
        li a + ul {
          margin: 0 10px 0 15px;
        }
      }
    }
  }
  </style>
