<template>
 <div class="tab" @click="swichtab(tabindex)" v-bind:class="{ 'is-active': $store.state.tab_active_index === tabindex }" >{{tabtext}}</div>
</template>

<script>
export default {
  name: "Tab",
  props: ["tabtext", "tabindex"],
  methods: {
    swichtab(index) {
      this.$store.commit("switchTabIndex", { index: index });
      //this.$store.state.tab_active_index = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.tab {
  width: auto;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  padding: 5px 5px 0px 5px;
  background-color: rgba(white, 0.3);
  border-radius: 4px 4px 0px 0px;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 5px;
  color: white;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: rgba(white, 0.4);
  }
  &.is-active {
    background-color: white;
    color: black;
  }
}
</style>
