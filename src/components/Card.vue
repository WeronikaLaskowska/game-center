<template>
  <div @click="onNewGameClick" class="card">
    <div class="poster">
      <img v-if="item.id === 14311" src="@/assets/14311.jpg" alt="" />
      <img v-if="item.id === 13899" src="@/assets/13899.jpg" alt="" />
      <img v-if="item.id === 14287" src="@/assets/14287.jpg" alt="" />
      <img v-if="item.id === 14280" src="@/assets/14280.jpg" alt="" />
      <img v-if="item.id === 13900" src="@/assets/13900.jpg" alt="" />
      <img v-if="item.id === 14292" src="@/assets/14292.jpg" alt="" />
      <img v-if="item.id === 13897" src="@/assets/13897.jpg" alt="" />
      <img v-if="item.id === 14227" src="@/assets/14227.jpg" alt="" />
      <img v-if="item.id === 14309" src="@/assets/14309.jpg" alt="" />
      <img v-if="item.id === 13945" src="@/assets/13945.webp" alt="" />
      <img v-if="item.id === 14242" src="@/assets/14242.jpg" alt="" />
      <img v-if="item.id === 11173" src="@/assets/11173.jpg" alt="" />
      <img v-if="item.id === 13896" src="@/assets/13896.jpg" alt="" />
      <img v-if="item.id === 14296" src="@/assets/14296.jpg" alt="" />
      <img v-if="item.id === 14207" src="@/assets/14207.jpg" alt="" />
      <img v-if="item.id === 13379" src="@/assets/13379.jpg" alt="" />
      <img v-if="item.id === 14295" src="@/assets/14295.jpg" alt="" />
      <img v-if="item.id === 14298" src="@/assets/14298.jpg" alt="" />
      <img v-if="item.id === 14291" src="@/assets/14291.jpg" alt="" />
      <img v-if="item.id === 14178" src="@/assets/14178.webp" alt="" />
      <img v-if="item.id === 14202" src="@/assets/14202.jpg" alt="" />
      <img v-if="item.id === 14306" src="@/assets/14306.jpg" alt="" />
      <img v-if="item.id === 13297" src="@/assets/13297.jpg" alt="" />
      <img v-if="item.id === 13537" src="@/assets/13537.jpg" alt="" />
      <img v-if="item.id === 14263" src="@/assets/14263.jpg" alt="" />
      <img v-if="item.id === 9636" src="@/assets/9636.webp" alt="" />
      <img v-if="item.id === 11395" src="@/assets/11395.jpg" alt="" />
      <img v-if="item.id === 14221" src="@/assets/14221.jpg" alt="" />
      <img v-if="item.id === 14213" src="@/assets/14213.jpg" alt="" />
      <img v-if="item.id === 10841" src="@/assets/10841.jpg" alt="" />
      <img v-if="item.id === 8450" src="@/assets/8450.jpg" alt="" />
      <img v-if="item.id === 10039" src="@/assets/10039.jpg" alt="" />
      <img v-if="item.id === 14247" src="@/assets/14247.jpg" alt="" />
      <img v-if="item.id === 14257" src="@/assets/14257.jpg" alt="" />
      <img v-if="item.id === 12819" src="@/assets/12819.jpg" alt="" />
      <img v-if="item.id === 14297" src="@/assets/14297.jpg" alt="" />
      <img v-if="item.id === 14246" src="@/assets/14246.jpg" alt="" />
      <img v-if="item.id === 14250" src="@/assets/14250.jpg" alt="" />
      <img v-if="item.id === 7549" src="@/assets/7549.jpg" alt="" />
      <img v-if="item.id === 8541" src="@/assets/8541.jpg" alt="" />
      <img v-if="item.id === 10567" src="@/assets/10567.webp" alt="" />
      <img v-if="item.id === 14307" src="@/assets/14307.jpg" alt="" />
      <img v-if="item.id === 14179" src="@/assets/14179.jpg" alt="" />
      <img v-if="item.id === 13373" src="@/assets/13373.jpg" alt="" />
      <img v-if="item.id === 14234" src="@/assets/14234.jpg" alt="" />
      <img v-if="item.id === 14253" src="@/assets/14253.jpg" alt="" />
      <img v-if="item.id === 13898" src="@/assets/13898.jpg" alt="" />
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
