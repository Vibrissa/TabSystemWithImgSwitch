<template>
  <div class="page-wrapper is-form">
<el-form ref="$store.state.tab_databox[$store.state.tab_active_index].form" :model="$store.state.tab_databox[$store.state.tab_active_index].form" label-width="120px">
  <el-form-item label="Activity name">
    <el-input v-model="$store.state.tab_databox[$store.state.tab_active_index].form.name"></el-input>
  </el-form-item>
  <el-form-item label="Instant delivery">
    <el-switch v-model="$store.state.tab_databox[$store.state.tab_active_index].form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="$store.state.tab_databox[$store.state.tab_active_index].form.type">
      <el-checkbox label="Online activities" name="type"></el-checkbox>
      <el-checkbox label="Promotion activities" name="type"></el-checkbox>
      <el-checkbox label="Offline activities" name="type"></el-checkbox>
      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="$store.state.tab_databox[$store.state.tab_active_index].form.resource">
      <el-radio label="Sponsor"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input type="textarea" v-model="$store.state.tab_databox[$store.state.tab_active_index].form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>

</style>
