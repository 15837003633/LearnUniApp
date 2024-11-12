"use strict";
const common_vendor = require("../../common/vendor.js");
const service_music_music = require("../../service/music/music.js");
const store_homeMusic = require("../../store/home-music.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_section_header2 = common_vendor.resolveComponent("section-header");
  const _easycom_song_item_v12 = common_vendor.resolveComponent("song-item-v1");
  (_easycom_uni_search_bar2 + _easycom_section_header2 + _easycom_song_item_v12)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_section_header = () => "../../components/section-header/section-header.js";
const _easycom_song_item_v1 = () => "../../components/song-item-v1/song-item-v1.js";
if (!Math) {
  (_easycom_uni_search_bar + bannerVue + _easycom_section_header + _easycom_song_item_v1)();
}
const bannerVue = () => "./cpns/banner.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home-music",
  setup(__props) {
    const homeMusicStore = store_homeMusic.useHomeMusicStore();
    const bannerList = common_vendor.ref([]);
    service_music_music.getMusicBanner().then((res) => {
      bannerList.value = res.banners;
    });
    homeMusicStore.fetchRecommendSongList();
    function onRecMoreClick() {
      common_vendor.index.navigateTo({
        url: "/pages/song-list/song-list?type=recommond"
      });
    }
    function onSearchClick() {
      console.log("onSearchClick");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onSearchClick),
        b: common_vendor.p({
          placeholder: "请输入搜索关键字",
          radius: "50",
          readonly: true
        }),
        c: common_vendor.p({
          bannerList: bannerList.value
        }),
        d: common_vendor.o(onRecMoreClick),
        e: common_vendor.p({
          title: "推荐歌曲",
          hasMore: true
        }),
        f: common_vendor.f(common_vendor.unref(homeMusicStore).recommendList6, (item, k0, i0) => {
          return {
            a: "48a62065-3-" + i0,
            b: common_vendor.p({
              songInfo: item
            }),
            c: item.id
          };
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
