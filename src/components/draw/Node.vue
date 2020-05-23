<template>
  <g :id="id">
    <circle :cx="x" :cy="y" :r="r" :fill="color" :stroke="color" stroke-width="4"></circle>
    <text :x="x" :y="y">{{distance}}</text>
</g>
</template>

<script>
export default {
  name: "Node",
  props: ["id", "x", "y", "r"],
  data: function() {
    return {
      status: 0,
      distance: 0
    };
  },
  created: function() {
    if (this.id == 0) {
      this.status = 1;
    }
  },
  computed: {
    color: function() {
      if (this.status == 0) {
        return "gray";
      }
      if (this.status == 1) {
        return "orange";
      }
      if (this.status == 2) {
        return "greenyellow";
      }
      return "black";
    }
  },
  // methods: {
  //     addStatus: function() {
  //         if (this.status < 2) {
  //             this.status += 1;
  //         }
  //     }
  // }
};
</script>

<style scoped>
circle {
  /* fill: orange; */
}

circle:hover {
  /* fill: rgb(109, 150, 49); */
  /* stroke: greenyellow; */
  stroke-width: 10;
}
text {
  cursor: default;

  pointer-events: none;
  fill: darkblue;
  font-size: 20px;

  text-anchor: middle;
  /* 文本水平居中 */
  dominant-baseline: middle;
  /* 文本垂直居中 */

  user-select: none;
}
</style>