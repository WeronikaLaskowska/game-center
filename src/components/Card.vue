<template>
  <div @click="onNewGameClick" class="card">
    <div class="poster">
      <img v-if="item.id === 10181" src="@/assets/10181.jpg" alt="" />
      <img v-if="item.id === 7409" src="@/assets/7409.jpg" alt="" />
      <img v-if="item.id === 8351" src="@/assets/8351.jpg" alt="" />
      <img v-if="item.id === 8996" src="@/assets/8996.jpg" alt="" />
      <img v-if="item.id === 10255" src="@/assets/10255.jpg" alt="" />
      <img v-if="item.id === 9793" src="@/assets/9793.jpg" alt="" />
      <img v-if="item.id === 7403" src="@/assets/7403.jpg" alt="" />
      <img v-if="item.id === 11524" src="@/assets/11524.jpg" alt="" />
      <img v-if="item.id === 11621" src="@/assets/11621.jpg" alt="" />
      <img v-if="item.id === 11930" src="@/assets/11930.jpg" alt="" />
      <img v-if="item.id === 9593" src="@/assets/9593.jpg" alt="" />
      <img v-if="item.id === 7410" src="@/assets/7410.jpg" alt="" />
      <img v-if="item.id === 10266" src="@/assets/10266.jpg" alt="" />
      <img v-if="item.id === 14083" src="@/assets/14083.jpg" alt="" />
      <img v-if="item.id === 8586" src="@/assets/8586.jpg" alt="" />
      <img v-if="item.id === 10993" src="@/assets/10993.jpg" alt="" />
      <img v-if="item.id === 10841" src="@/assets/10841.jpg" alt="" />
      <img v-if="item.id === 11624" src="@/assets/11624.jpg" alt="" />
      <img v-if="item.id === 11693" src="@/assets/11693.jpg" alt="" />
      <img v-if="item.id === 7404" src="@/assets/7404.jpg" alt="" />
      <img v-if="item.id === 11687" src="@/assets/11687.jpg" alt="" />
      <img v-if="item.id === 13232" src="@/assets/13232.jpg" alt="" />
      <img v-if="item.id === 11497" src="@/assets/11497.jpg" alt="" />
      <img v-if="item.id === 12947" src="@/assets/12947.jpg" alt="" />
      <img v-if="item.id === 14102" src="@/assets/14102.jpg" alt="" />
      <img v-if="item.id === 13711" src="@/assets/13711.jpg" alt="" />
      <img v-if="item.id === 13069" src="@/assets/13069.jpg" alt="" />
      <img v-if="item.id === 13590" src="@/assets/13590.jpg" alt="" />
      <img v-if="item.id === 12361" src="@/assets/12361.jpg" alt="" />
      <img v-if="item.id === 12628" src="@/assets/12628.jpg" alt="" />
      <img v-if="item.id === 8786" src="@/assets/8786.webp" alt="" />
      <img v-if="item.id === 10994" src="@/assets/10994.webp" alt="" />
      <img v-if="item.id === 13251" src="@/assets/13251.webp" alt="" />
      <img v-if="item.id === 10974" src="@/assets/10974.webp" alt="" />
      <img v-if="item.id === 12090" src="@/assets/12090.webp" alt="" />
      <img v-if="item.id === 12919" src="@/assets/12919.webp" alt="" />
      <img v-else src="@/assets/blank.webp" alt="" />
    </div>
    <div class="details">
      <h3>{{ item.name }}</h3>
      <div class="rating">
        Critics rating:
        <span style="font-weight: 700">{{
          item.topCriticScore.toFixed(2)
        }}</span>
        %
      </div>
      <div class="tier">
        <span style="font-weight: 400">Tier:</span> {{ item.tier }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import { useAppStore } from "@/store/app";
export default defineComponent({
  props: ["item"],
  setup(props) {
    const store = useAppStore();
    const onNewGameClick = async () => {
      await store.fetchGame(props.item.id);
      router.push({ name: "Game", params: { id: props.item.id } });
    };
    return { onNewGameClick };
  },
});
</script>

<style scoped>
.card {
  margin: 10px;
  position: relative;
  width: 320px;
  height: 450px;
  border-radius: 20px;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #4104a2;

  transition: 0.5s;
}
.card:hover {
  border: 2px solid #ed3af5;
}

.card .poster {
  position: relative;
}
.card .poster img {
  width: 320px;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  transition: 0.5s;
}
.card:hover .poster img {
  transform: translateY(-50px);
  filter: blur(2px);
}

.card .poster::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #4104a2 50%, transparent);
  transition: 0.5s;
  z-index: 1;
  bottom: -160px;
}
.card:hover .poster::before {
  bottom: -40px;
}
.card .details {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: 20px;
  transition: 0.5s;
  color: #fff;
  letter-spacing: 2px;
}
.card .details .tier {
  position: absolute;
  bottom: -200px;
  transition: 0.5s;
  font-size: 20px;
  font-weight: 800;
}
.card:hover .details .tier {
  position: absolute;
  bottom: -20px;
}
.card:hover .details {
  bottom: 80px;
}
</style>
