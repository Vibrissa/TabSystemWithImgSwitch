<template>
 <div class="tab-content">
   <slot></slot>
 </div>
</template>

<script>
export default {
  name: "TabContent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.tab-content {
  height: calc(100% - 40px);
  background-color: white;
  box-sizing: border-box;
  padding: 10px;
  overflow: auto;
  position: relative;
}
</style>
