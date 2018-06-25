<template>
  <div class="page-wrapper is-progress">
    <el-slider v-model="$store.state.tab_databox[$store.state.tab_active_index].progressvalue"></el-slider>
  </div>
</template>

<script>
export default {
  name: "ProgressPage"
};
</script>
