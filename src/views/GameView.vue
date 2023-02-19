<template>
  <div v-if="!loading" class="single-game">
    <div class="image-part">
      <div @click="router.go(-1)" class="return-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-corner-down-left"
        >
          <polyline points="9 10 4 15 9 20"></polyline>
          <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
        </svg>
        Back
      </div>
      <image-by-id :id="game.id" />
      <div class="info-card">
        <div class="game-name">{{ game.name }}</div>
        <div class="platforms">
          <div
            v-for="platform in game.Platforms"
            :key="platform.id"
            class="platform"
          >
            <div v-if="platform.id === 3" class="game-paltform playstation">
              <img src="@/assets/ps.jpeg" alt="" />
            </div>
            <div v-if="platform.id === 32" class="game-paltform switch">
              <img src="@/assets/switch.svg.png" alt="" />
            </div>
            <div v-if="platform.id === 2" class="game-paltform xbox">
              <img src="@/assets/xb.png" alt="" />
            </div>
            <div v-if="platform.id === 27" class="game-paltform PC">
              <img src="@/assets/PC.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detailed-info">
      <div class="large-card">
        <div class="description">
          <div class="title">Game description</div>
          <p>{{ game.description }}</p>
        </div>
        <div class="genres">
          <div class="genre" v-for="genre in game.Genres" :key="genre.name">
            {{ genre.name }}
          </div>
        </div>
      </div>
      <div class="small-card make-large-card">
        <div class="title">Average score</div>
        <div class="score">{{ game.medianScore }}%</div>
      </div>
      <div class="large-card large-card-positioning">
        <div class="game-logo">
          <img v-if="game.mainChannel" :src="game.mainChannel.image" alt="" />
        </div>
        <div v-if="game.Companies" class="developers-info">
          <div class="title">Developer</div>
          <h2 style="margin-bottom: 10px">{{ game.Companies[0].name }}</h2>
          <div class="title">Publisher</div>
          <h2>{{ game.Companies[1].name }}</h2>
        </div>
      </div>
      <div class="small-card">
        <div class="title">Number of reviews</div>
        <div class="score">{{ game.numReviews }}</div>
      </div>
      <div class="small-card">
        <div class="title">Reccomend</div>
        <div class="score">{{ game.percentRecommended.toFixed(2) }}%</div>
      </div>
      <div class="large-card large-card-positioning-padding">
        <div class="yt-logo">
          <img src="@/assets/yt.svg.webp" alt="" />
        </div>
        <div class="yt-channel">
          <div class="channel-name title">
            {{ game.mainChannel ? game.mainChannel.channelTitle : "-" }}
          </div>
          <div
            @click="redirectToChannel(game.mainChannel.externalUrl)"
            class="button"
          >
            YouTube channel
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="loader-placement" v-else>
    <loader />
  </div>
</template>
<script lang="ts">
import router from "@/router";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted, ref } from "vue";
import Loader from "@/components/Loader.vue";
import ImageById from "@/components/ImageById.vue";
export default defineComponent({
  components: { Loader, ImageById },
  setup() {
    let loading = ref(true);
    const store = useAppStore();
    const { game } = storeToRefs(store);
    onMounted(async () => {
      await store.fetchGame(router.currentRoute.value.params.id as string);
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    });

    const redirectToChannel = (url: string) => {
      //@ts-ignore
      window.open(url, "_blank").focus();
    };
    return { game, loading, router, redirectToChannel };
  },
});
</script>

<style scoped>
.single-game .image-part {
  width: 100vw;
  max-height: 480px;
  object-fit: cover;
  position: relative;
}
.single-game .image-part img {
  width: 100vw;
  max-height: 480px;
  object-fit: cover;
  /* mask-image: linear-gradient(#000, rgba(0,0,0,0.4)); */
}

.info-card {
  background: rgba(24, 1, 86, 0.4);
  border-radius: 20px;
  position: absolute;
  width: 50vw;
  height: 200px;
  bottom: 20px;
  left: 20px;
  color: #fff;
}
.info-card .game-name {
  font-size: 60px;
  font-weight: 600;
  padding: 10px;
}
.game-paltform {
  max-width: 85px;
  height: 76px;
  background: #fff;
  border-radius: 10px;
}
.game-paltform img {
  max-width: 85px;
  height: 100%;
  padding: 15px;
  object-fit: cover;
}
.platforms {
  display: flex;
  gap: 20px;
  margin-left: 20px;
}
.detailed-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin: 0 20px;
  margin-top: 50px;
  padding-bottom: 40px;
}
.large-card {
  grid-column: span 2;
  min-height: 200px;
}
.large-card,
.small-card {
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  opacity: 0.9;
  cursor: pointer;
  transition: 0.5s;
}
.large-card:hover,
.small-card:hover {
  opacity: 1;
}
.small-card {
  display: grid;
  place-items: center;
}
.title {
  font-weight: 800;
  margin-bottom: 10px;
  font-size: 32px;
  color: #180156;
}
.description p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.genres {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-weight: 800;
  justify-content: flex-end;
  font-size: 32px;
  margin-top: 10px;
  margin-right: 20px;
  color: #7b27f3;
}
.score {
  font-weight: 800;
  font-size: 90px;
  color: #180156;
}
.game-logo img {
  width: 211px;
  height: 211px;
  border-radius: 10px;
  object-fit: cover;
}
.yt-logo img {
  width: 350px;
  height: 80px;
}
.button {
  border: 1px solid #7b27f3;
  color: #7b27f3;
  min-width: 200px;
  max-width: 400px;
  text-align: center;
  padding: 5px 0;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
}
.return-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #7b27f3;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
}
.loader-placement {
  display: grid;
  place-items: center;
  margin: auto;
  height: 100vh;
}
.large-card-positioning {
  display: flex;
  gap: 20px;
}
.large-card-positioning-padding {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
}
@media screen and (max-width: 1250px) {
  .info-card {
    width: 80vw;
  }
  .detailed-info {
    grid-template-columns: 1fr 1fr;
  }
  .make-large-card {
    grid-column: span 2;
  }
}
@media screen and (max-width: 800px) {
  .info-card {
    width: 95vw;
  }
  .detailed-info {
    grid-template-columns: 1fr;
    gap: 30px 0;
  }
  .make-large-card {
    grid-column: span 1;
  }
  .large-card {
    grid-column: span 1;
  }
  .game-logo img {
    width: 111px;
    height: 111px;
    border-radius: 10px;
    object-fit: cover;
  }
  .yt-logo img {
    width: 150px;
    height: 30px;
  }
}
@media screen and (max-width: 650px) {
  .info-card {
    height: 150px;
  }
  .info-card .game-name {
    font-size: 28px;
  }
  .game-paltform {
    max-width: 55px;
    height: 56px;
    background: #fff;
    border-radius: 10px;
  }
  .game-paltform img {
    max-width: 55px;
    height: 100%;
    padding: 15px;
    object-fit: cover;
  }
  .large-card-positioning-padding {
    padding: 0 50px;
  }
}
@media screen and (max-width: 500px) {
  .genres {
    font-size: 22px;
  }
  .large-card-positioning-padding {
    padding: 0 20px;
  }
}
</style>
