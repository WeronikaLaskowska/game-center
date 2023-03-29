<template>
    <img v-if="id === 10181" src="@/assets/10181.jpg" alt="" />
      <img v-else-if="id === 7409" src="@/assets/7409.jpg" alt="" />
      <img v-else-if="id === 8351" src="@/assets/8351.jpg" alt="" />
      <img v-else-if="id === 8996" src="@/assets/8996.jpg" alt="" />
      <img v-else-if="id === 10255" src="@/assets/10255.jpg" alt="" />
      <img v-else-if="id === 9793" src="@/assets/9793.jpg" alt="" />
      <img v-else-if="id === 7403" src="@/assets/7403.jpg" alt="" />
      <img v-else-if="id === 11524" src="@/assets/11524.jpg" alt="" />
      <img v-else-if="id === 11621" src="@/assets/11621.jpg" alt="" />
      <img v-else-if="id === 11930" src="@/assets/11930.jpg" alt="" />
      <img v-else-if="id === 9593" src="@/assets/9593.jpg" alt="" />
      <img v-else-if="id === 7410" src="@/assets/7410.jpg" alt="" />
      <img v-else-if="id === 10266" src="@/assets/10266.jpg" alt="" />
      <img v-else-if="id === 14083" src="@/assets/14083.jpg" alt="" />
      <img v-else-if="id === 8586" src="@/assets/8586.jpg" alt="" />
      <img v-else-if="id === 10993" src="@/assets/10993.jpg" alt="" />
      <img v-else-if="id === 10841" src="@/assets/10841.jpg" alt="" />
      <img v-else-if="id === 11624" src="@/assets/11624.jpg" alt="" />
      <img v-else-if="id === 11693" src="@/assets/11693.jpg" alt="" />
      <img v-else-if="id === 7404" src="@/assets/7404.jpg" alt="" />
      <img v-else-if="id === 11687" src="@/assets/11687.jpg" alt="" />
      <img v-else-if="id === 13232" src="@/assets/13232.jpg" alt="" />
      <img v-else-if="id === 11497" src="@/assets/11497.jpg" alt="" />
      <img v-else-if="id === 12947" src="@/assets/12947.jpg" alt="" />
      <img v-else-if="id === 14102" src="@/assets/14102.jpg" alt="" />
      <img v-else-if="id === 13711" src="@/assets/13711.jpg" alt="" />
      <img v-else-if="id === 13069" src="@/assets/13069.jpg" alt="" />
      <img v-else-if="id === 13590" src="@/assets/13590.jpg" alt="" />
      <img v-else-if="id === 12361" src="@/assets/12361.jpg" alt="" />
      <img v-else-if="id === 12628" src="@/assets/12628.jpg" alt="" />
      <img v-else-if="id === 8786" src="@/assets/8786.webp" alt="" />
      <img v-else-if="id === 10994" src="@/assets/10994.webp" alt="" />
      <img v-else-if="id === 13251" src="@/assets/13251.webp" alt="" />
      <img v-else-if="id === 10974" src="@/assets/10974.webp" alt="" />
      <img v-else-if="id === 12090" src="@/assets/12090.webp" alt="" />
      <img v-else-if="id === 12919" src="@/assets/12919.webp" alt="" />
      <img v-else src="@/assets/blank.webp" alt="" />
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
