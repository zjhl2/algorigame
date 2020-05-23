<template>
  <g>
    <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" />
    <text :x="(x1+x2)/2 - 5" :y="(y1+y2)/2 - 5">{{len}}</text>
        <!-- <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 160 160" to="360 160 160" repeatCount="indefinite"/> -->

  </g>
</template>

<script>
export default {
  name: "Edge",
  props: ["x1", "y1", "x2", "y2", "len"]
};
</script>

<style scoped>
line {
  stroke:gainsboro;
  stroke-width: 8;
}
line:hover {
    stroke:blanchedalmond
}

text {
  cursor: default;
  pointer-events: none;
  font-size: 30px;
  fill:black;
  text-anchor: middle;
  /* 文本水平居中 */
  dominant-baseline: middle;
  /* 文本垂直居中 */
  user-select: none;
}

</style>