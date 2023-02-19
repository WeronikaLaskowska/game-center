import { defineStore } from "pinia";
import axios from "@/axios";

export interface Company {
  name: string;
  type: string;
}
export interface Genre {
  name: string;
  id: number;
}
export interface Platform {
  name: string;
  shortName: string;
  id: number;
}
export interface Channel {
  channelId: string;
  channelTitle: string;
  description: string;
  externalUrl: string;
  image: string;
  title: string;
}

export interface Game {
  Companies: Array<Company>;
  Genres: Array<Genre>;
  Platforms: Array<Platform>;
  biggestDiscountDollars: number;
  biggestDiscountPercentage: number;
  createdAt: string;
  name: string;
  description: string;
  tier: string;
  firstReleaseDate: string;
  updatedAt: string;
  url: string;
  latestReviewDate: string;
  firstReviewDate: string;
  hasLootBoxes: Boolean;
  id: number;
  numReviews: number;
  topCriticScore: number;
  numTopCriticReviews: number;
  percentRecommended: number;
  percentile: number;
  medianScore: number;
  imageMigrationComplete: Boolean;
  mainChannel: Channel;
}

export const useAppStore = defineStore("app", {
  state: () => ({
    games: [] as Array<Game>,
    game: {} as Game,
  }),
  actions: {
    async fetchGames() {
      try {
        const response = await axios.get("game/popular");
        this.games = response.data;
      } catch (e) {
        console.log(e);
      }
    },
    async fetchGame(id: string) {
      try {
        const response = await axios.get("game/" + id);
        this.game = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
