"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "video-item",
  props: {
    itemInfo: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: props.itemInfo.cover,
        b: common_vendor.t(props.itemInfo.playCount),
        c: common_vendor.t(props.itemInfo.playCount),
        d: common_vendor.t(props.itemInfo.name),
        e: common_vendor.t(props.itemInfo.artistName)
      };
    };
  }
});
wx.createComponent(_sfc_main);
