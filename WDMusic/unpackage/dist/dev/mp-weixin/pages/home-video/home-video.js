"use strict";
const common_vendor = require("../../common/vendor.js");
const service_video_video = require("../../service/video/video.js");
if (!Math) {
  videoItem();
}
const videoItem = () => "./cpns/video-item.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home-video",
  setup(__props) {
    let offset = 0;
    const videoList = common_vendor.ref([]);
    function onItemClick(itemInfo) {
      common_vendor.index.navigateTo({
        url: "/pages/detail-video/detail-video?mvid=" + itemInfo.id
      });
    }
    fetchNewList();
    common_vendor.onPullDownRefresh(() => {
      console.log("onPullDownRefresh");
      fetchNewList();
    });
    common_vendor.onReachBottom(() => {
      console.log("onReachBottom");
      fetchMoreList();
    });
    function fetchNewList() {
      offset = 0;
      service_video_video.getTopMVRequest(offset).then((res) => {
        videoList.value = res.data;
        offset = videoList.value.length;
        common_vendor.index.stopPullDownRefresh();
      });
    }
    function fetchMoreList() {
      service_video_video.getTopMVRequest(offset).then((res) => {
        var _a;
        if (((_a = res.data) == null ? void 0 : _a.length) > 0) {
          videoList.value.push(...res.data);
          offset = videoList.value.length;
        } else {
          common_vendor.index.showToast({
            title: "no more data"
          });
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(videoList.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(onItemClick, item.id),
            b: "65a262b6-0-" + i0,
            c: common_vendor.p({
              itemInfo: item
            }),
            d: item.id
          };
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
