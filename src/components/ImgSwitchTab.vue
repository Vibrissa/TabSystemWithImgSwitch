<template>
  <div class="img-switch-wrapper">
    <div v-for=" (each_img,index) in $store.state.tab_imgbox" :key="each_img" class="eachimg-wrapper" >
      <span class="img-title">{{$store.state.tabcontent[index]}}</span>
      <img  :src="each_img.base64data" @click="swichtab(index)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgSwitchTab",
  methods: {
    swichtab(index) {
      this.$store.commit("switchTabIndex", { index: index });
      this.$store.commit("SwitchImgSwitch", {});
      
      //this.$store.state.tab_active_index = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.img-switch-wrapper {
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  position: absolute;
  z-index: 1002;
  padding-top: 80px;
}
.eachimg-wrapper {
  display: inline-block;
  position: relative;
  width: 25%;
  margin: 20px 4%;
  color: white;
  transform-origin: center;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    img {
      border: 3px solid #fedfed;
    }
  }
  img {
    width: 100%;
    border: 2px solid transparent;
    box-sizing: border-box;
    transition: all 0.25s ease-in-out;
    border-radius: 4px;
  }
}
</style>
