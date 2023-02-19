<template>
  <div class="body">
    <div v-if="!loading" class="align-cards">
      <Card v-for="game in games" :key="game.id" :item="game"></Card>
    </div>
    <div class="loader-placement" v-else>
      <loader />
    </div>
  </div>
</template>

<script lang="ts">
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted, ref } from "vue";
import Card from "@/components/Card.vue";
import Loader from '@/components/Loader.vue'
export default defineComponent({
  components: { Card, Loader },
  setup() {
    const store = useAppStore();
    const { games } = storeToRefs(store);
    let loading = ref(true);
    onMounted(async () => {
      await store.fetchGames();

      setTimeout(() => {
        loading.value = false;
      }, 1000);
    });

    return { games, loading };
  },
});
</script>

<style scoped>
.align-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.loader-placement{
    display: grid;
    place-items: center;
    margin: auto;
    height: 100vh;
}
</style>
