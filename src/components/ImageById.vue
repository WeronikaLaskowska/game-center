<template>
    <img v-if="id === 14311" src="@/assets/14311.jpg" alt="" />
      <img v-else-if="id === 13899" src="@/assets/13899.jpg" alt="" />
      <img v-else-if="id === 14287" src="@/assets/14287.jpg" alt="" />
      <img v-else-if="id === 14280" src="@/assets/14280.jpg" alt="" />
      <img v-else-if="id === 13900" src="@/assets/13900.jpg" alt="" />
      <img v-else-if="id === 14292" src="@/assets/14292.jpg" alt="" />
      <img v-else-if="id === 13897" src="@/assets/13897.jpg" alt="" />
      <img v-else-if="id === 14227" src="@/assets/14227.jpg" alt="" />
      <img v-else-if="id === 14309" src="@/assets/14309.jpg" alt="" />
      <img v-else-if="id === 13945" src="@/assets/13945.webp" alt="" />
      <img v-else-if="id === 14242" src="@/assets/14242.jpg" alt="" />
      <img v-else-if="id === 11173" src="@/assets/11173.jpg" alt="" />
      <img v-else-if="id === 13896" src="@/assets/13896.jpg" alt="" />
      <img v-else-if="id === 14296" src="@/assets/14296.jpg" alt="" />
      <img v-else-if="id === 14207" src="@/assets/14207.jpg" alt="" />
      <img v-else-if="id === 13379" src="@/assets/13379.jpg" alt="" />
      <img v-else-if="id === 14295" src="@/assets/14295.jpg" alt="" />
      <img v-else-if="id === 14298" src="@/assets/14298.jpg" alt="" />
      <img v-else-if="id === 14291" src="@/assets/14291.jpg" alt="" />
      <img v-else-if="id === 14178" src="@/assets/14178.webp" alt="" />
      <img v-else-if="id === 14202" src="@/assets/14202.jpg" alt="" />
      <img v-else-if="id === 14306" src="@/assets/14306.jpg" alt="" />
      <img v-else-if="id === 13297" src="@/assets/13297.jpg" alt="" />
      <img v-else-if="id === 13537" src="@/assets/13537.jpg" alt="" />
      <img v-else-if="id === 14263" src="@/assets/14263.jpg" alt="" />
      <img v-else-if="id === 9636" src="@/assets/9636.webp" alt="" />
      <img v-else-if="id === 11395" src="@/assets/11395.jpg" alt="" />
      <img v-else-if="id === 14221" src="@/assets/14221.jpg" alt="" />
      <img v-else-if="id === 14213" src="@/assets/14213.jpg" alt="" />
      <img v-else-if="id === 10841" src="@/assets/10841.jpg" alt="" />
      <img v-else-if="id === 8450" src="@/assets/8450.jpg" alt="" />
      <img v-else-if="id === 10039" src="@/assets/10039.jpg" alt="" />
      <img v-else-if="id === 14247" src="@/assets/14247.jpg" alt="" />
      <img v-else-if="id === 14257" src="@/assets/14257.jpg" alt="" />
      <img v-else-if="id === 12819" src="@/assets/12819.jpg" alt="" />
      <img v-else-if="id === 14297" src="@/assets/14297.jpg" alt="" />
      <img v-else-if="id === 14246" src="@/assets/14246.jpg" alt="" />
      <img v-else-if="id === 14250" src="@/assets/14250.jpg" alt="" />
      <img v-else-if="id === 7549" src="@/assets/7549.jpg" alt="" />
      <img v-else-if="id === 8541" src="@/assets/8541.jpg" alt="" />
      <img v-else-if="id === 10567" src="@/assets/10567.webp" alt="" />
      <img v-else-if="id === 14307" src="@/assets/14307.jpg" alt="" />
      <img v-else-if="id === 14179" src="@/assets/14179.jpg" alt="" />
      <img v-else-if="id === 13373" src="@/assets/13373.jpg" alt="" />
      <img v-else-if="id === 14234" src="@/assets/14234.jpg" alt="" />
      <img v-else-if="id === 14253" src="@/assets/14253.jpg" alt="" />
      <img v-else-if="id === 13898" src="@/assets/13898.jpg" alt="" />
      <img v-else-if="id === 14171" src="@/assets/14171.jpg" alt="" />
      <img v-else-if="id === 14319" src="@/assets/14319.jpg" alt="" />
      <img v-else-if="id === 14231" src="@/assets/14231.jpg" alt="" />
      <img v-else-if="id === 14229" src="@/assets/14229.jpg" alt="" />
      <img v-else-if="id === 13964" src="@/assets/13964.jpg" alt="" />
      <img v-else-if="id === 12980" src="@/assets/12980.webp" alt="" />
      <img v-else-if="id === 14011" src="@/assets/14011.webp" alt="" />
      <img v-else src="@/assets/blank.webp" alt="">
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["id"],
  setup() {},
});
</script>

<style scoped>
img {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
}
</style>
