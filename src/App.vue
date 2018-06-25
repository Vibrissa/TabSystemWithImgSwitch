<template>
  <div id="app">
    <TabHeader/>
    <TabContent v-for=" (eachtab,index) in $store.state.tabcontent" v-if="index === $store.state.tab_active_index" :key="eachtab" >
      <FormPage v-if="$store.state.tab_active_index === 0" />
      <TablePage v-if="$store.state.tab_active_index === 1" />
      <ProgressPage v-if ="$store.state.tab_active_index === 2" />
    </TabContent>
    <transition name="fade">
      <ImgSwitchTab v-if="$store.state.is_show_imgswitch" />
    </transition>
  </div>
</template>

<script>
import TabHeader from "./components/TabHeader";
import TabHeader_2 from "./components/TabHeader_2";
import TabContent from "./components/TabContent";
import TablePage from "./components/TablePage";
import FormPage from "./components/FormPage";
import ProgressPage from "./components/ProgressPage";
import ImgSwitchTab from "./components/ImgSwitchTab";
export default {
  name: "App",
  components: {
    TabHeader,
    TabHeader_2,
    TabContent,
    TablePage,
    FormPage,
    ProgressPage,
    ImgSwitchTab
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.page-wrapper {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  &.is-form {
    width: 500px;
  }
  &.is-progress {
    padding: 10px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
