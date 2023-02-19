<template>
  <v-app>
    <div class="background-view">
      <default-view />
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from "./View.vue";
</script>

<style scoped>

.background-view {
   background: rgb(51, 2, 129);
  background: linear-gradient(
    180deg,
    rgba(51, 2, 129, 1) 0%,
    rgba(19, 2, 66, 1) 11%,
    rgba(0, 0, 0, 1) 100%
  ); 
  min-height: 100vh;
  min-width: 100vw;
  max-width: 2024px;
  margin: auto;
  overflow-x: hidden;
}

</style>
