"use strict";
const common_vendor = require("../../common/vendor.js");
const service_video_video = require("../../service/video/video.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail-video",
  props: {
    mvid: {
      // type: number，Vue 将无法正确识别，因为它期待的是构造函数而不是基本类型
      type: String,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const mvUrl = common_vendor.ref();
    service_video_video.getMVPlayURL(props.mvid).then((res) => {
      var _a;
      mvUrl.value = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.url;
    });
    const mvInfo = common_vendor.ref();
    service_video_video.getMVDetail(props.mvid).then((res) => {
      mvInfo.value = res.data;
      common_vendor.index.setNavigationBarTitle({
        title: mvInfo.value.name
      });
    });
    const mvRelationList = common_vendor.ref();
    service_video_video.getMVRelateVideoList(props.mvid).then((res) => {
      mvRelationList.value = res.data;
    });
    return (_ctx, _cache) => {
      return {
        a: mvUrl.value,
        b: common_vendor.t(mvInfo.value.desc),
        c: common_vendor.t(mvInfo.value.name),
        d: common_vendor.f(100, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
