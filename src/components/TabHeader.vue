<template>
 <div class="tab-header" >
 <tab v-for=" (eachtab,index) in $store.state.tabcontent" :key="eachtab" :tabtext="eachtab" :tabindex="index" />
 <div class="tab-img-switch" @click="ShowOrHideImgSwitch()"> screenshot </div>
 </div>
</template>

<script>
import Tab from "./Tab";

export default {
  name: "TabHeader",
  components: {
    tab: Tab
  },
  methods: {
    ShowOrHideImgSwitch() {
      this.$store.commit("SwitchImgSwitch", {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.tab-header {
  height: 40px;
  background-color: #182d54;
  border-radius: 4px 4px 0px 0px;
  padding: 10px 10px 0px 10px;
  box-sizing: border-box;
  text-align: left;
}
.tab-img-switch {
  display: inline-block;
  color: white;
  float: right;
  cursor: pointer;
}
</style>
