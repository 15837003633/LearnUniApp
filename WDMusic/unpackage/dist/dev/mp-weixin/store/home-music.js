"use strict";
const common_vendor = require("../common/vendor.js");
const service_music_music = require("../service/music/music.js");
const useHomeMusicStore = common_vendor.defineStore("home-music", {
  state: () => ({
    recommendInfo: []
  }),
  getters: {
    recommendList6() {
      if (this.recommendInfo.tracks) {
        return this.recommendInfo.tracks.slice(0, 6);
      }
      return [];
    }
  },
  actions: {
    async fetchRecommendSongList() {
      const res = await service_music_music.getPlayListDetail("3778678");
      this.recommendInfo = res.playlist;
    }
  }
});
exports.useHomeMusicStore = useHomeMusicStore;
