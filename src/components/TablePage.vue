<template>
  <div class="page-wrapper">
    <el-table
      :data="$store.state.tab_databox[$store.state.tab_active_index].tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TablePage"
};
</script>

<style>

</style>
