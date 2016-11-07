<style lang="scss">
.home{
  width: 100%;
  height: 100%;
  padding: 10px;
  .menu{
    align-items: left;
    text-align: left;
  }
}
.collapse{
  .internal.collapse-item {
    header {
      padding-left: 20px;
      // font-size: 10px;
    }
  }
  .collapse-item{
    .card-header {
      min-height: 30px;
      height: 40px;
    }
    .card-content {
      padding: 0px 0px 0px 0px;
      .card-content-box {
        padding: 0px;
      }
    }
  }
}
</style>

<template>
  <div class="home">
    <div class="columns is-fullheight">
      <div class="column is-3">

        <side-bar></side-bar>
      </div>
      <div class="column is 9">
        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input">
        </p>
        <label class="label">Username</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma">
          <i class="fa fa-check"></i>
          <span class="help is-success">This username is available</span>
        </p>
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
          <i class="fa fa-warning"></i>
          <span class="help is-danger">This email is invalid</span>
        </p>
        <label class="label">Subject</label>
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Instrument</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Instrument</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Misty Abbott</td>
              <td>Bass Guitar</td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>Rhythm Guitar</td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Robert Mikels</td>
              <td>Lead Guitar</td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Karyn Holmberg</td>
              <td>Drums</td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="control">
          <button class="button is-primary">Submit</button>
          <button class="button is-link">Cancel</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './HomeView/SideBar';

export default {
  components: {
    SideBar,
  },
  name: 'home',
};
</script>
