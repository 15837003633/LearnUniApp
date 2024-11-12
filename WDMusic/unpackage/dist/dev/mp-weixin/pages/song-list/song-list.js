"use strict";
const common_vendor = require("../../common/vendor.js");
const store_homeMusic = require("../../store/home-music.js");
if (!Array) {
  const _easycom_section_header2 = common_vendor.resolveComponent("section-header");
  const _easycom_song_item_v22 = common_vendor.resolveComponent("song-item-v2");
  (_easycom_section_header2 + _easycom_song_item_v22)();
}
const _easycom_section_header = () => "../../components/section-header/section-header.js";
const _easycom_song_item_v2 = () => "../../components/song-item-v2/song-item-v2.js";
if (!Math) {
  (_easycom_section_header + _easycom_song_item_v2)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "song-list",
  props: {
    type: {}
  },
  setup(__props) {
    const props = __props;
    const homeMusicStore = store_homeMusic.useHomeMusicStore();
    const listInfo = common_vendor.ref({});
    if (props.type === "recommond") {
      listInfo.value = homeMusicStore.recommendInfo;
      common_vendor.index.setNavigationBarTitle({
        title: listInfo.value.name
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: listInfo.value.name,
          hasMore: false
        }),
        b: common_vendor.f(listInfo.value.tracks, (item, index, i0) => {
          return {
            a: "9700a49a-1-" + i0,
            b: common_vendor.p({
              index: index + 1,
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
