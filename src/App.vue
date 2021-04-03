<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div id="logo"> Algorigame </div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Dijkstra</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>to be updated...</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
      <a-layout-content style="margin: 0 16px">
        <graph></graph>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Author zjhl2
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>

import Graph from "./components/Graph"
export default {
  components: {
    Graph
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
* {
  font-family: monospace;
}

#logo {   
  text-align: center;
  color:aliceblue;
  font-family: monospace;
  font-size: xx-large;
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
