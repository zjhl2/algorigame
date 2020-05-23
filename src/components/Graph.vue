<template>
  <svg width="100%" height="1000" version="1.1">
    <g>
      <edge
        v-for="e in edges"
        :key="e.id"
        :x1="nodes[e.from].x"
        :y1="nodes[e.from].y"
        :x2="nodes[e.to].x"
        :y2="nodes[e.to].y"
        :len="e.length"
      />

      <node
        @click.native="click11(p.id)"
        ref="nodes"
        v-for="p in nodes"
        :key="p.id"
        :id="p.id"
        :x="p.x"
        :y="p.y"
        :r="p.r"
      />
    </g>
  </svg>
</template>

<script>
import Node from "./draw/Node.vue";
import Edge from "./draw/Edge.vue";
import VE from "../static/VE";

let link = new Array(VE.nodes.length);
for (let i = 0; i < VE.nodes.length; i++) {
  link[i] = [];
}
for (let i = 0; i < VE.edges.length; i++) { 
  let x = VE.edges[i].from;
  let y = VE.edges[i].to;
  let z = VE.edges[i].length;
  link[x].push({to:y, len:z});
  link[y].push({to:x, len:z});
 }

export default {
  name: "Graph",
  components: {
    Node,
    Edge
  },
  data() {
    return {
      nodes: VE.nodes,
      edges: VE.edges,
      links: link
    };
  },
  methods: {
    click11(id) {
      let nodes = this.$refs.nodes;
      let u = nodes[id];
      if (u.status == 1) {
        u.status = 2;
        for (let i = 0; i < link[id].length; i++) {
          let e = link[id][i];
          let v = e.to;
          let len = e.len;  
          if (nodes[v].status == 0) {
            nodes[v].status = 1;
            nodes[v].distance = u.distance + len;
          } else if (nodes[v].status == 1) {
            nodes[v].distance = Math.min(nodes[v].distance, u.distance + len);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
body {
  cursor: default;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
</style>