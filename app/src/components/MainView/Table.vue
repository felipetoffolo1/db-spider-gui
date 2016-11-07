<style>

</style>

<template>
  <div class="">
    <label class="label">Name</label>
    <p class="control">
      <input class="input" type="text" placeholder="Text input">
    </p>
    <label class="label">Columns</label>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>DataType</th>
          <th>Allow Null</th>
          <th>Primary Key</th>
          <th>Default Value</th>
          <th></th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>DataType</th>
          <th>Allow Null</th>
          <th>Primary Key</th>
          <th>Default Value</th>
          <th></th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>
            <input class="input" type="text" placeholder="Text input">
          </td>
          <td>
            <input class="input" type="text" placeholder="Text input">
          </td>
          <td>
            <p class="control">
              <span class="select">
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </span>
            </p>
          </td>
          <td>
            <span class="select">
              <select>
                <option>Yes</option>
                <option>No</option>
              </select>
            </span>
          </td>
          <td>
            <input class="input" type="text" placeholder="Text input">
          </td>
          <td class="is-icon">
            <a>
              <i class="fa fa-close"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="control">
      <button class="button is-primary">Save</button>
      <button class="button is-link">Cancel</button>
    </p>
  </div>
</template>

<script>
export default { };
</script>
