<template>
 <div class="tab-header" @click="getstore()"></div>
</template>

<script>
export default {
  name: "TabHeader",
  methods: {
    getstore() {
      console.log(this.$store.state.box);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.tab-header {
  height: 40px;
  background-color: red;
  border-radius: 4px 4px 0px 0px;
  padding: 10px 10px 0px 10px;
  box-sizing: border-box;
}
</style>
