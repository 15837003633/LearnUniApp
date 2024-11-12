"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "video-item",
  props: {
    itemInfo: {}
  },
  emits: ["itemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const onClick = () => {
      emits("itemClick", props.itemInfo);
    };
    return (_ctx, _cache) => {
      return {
        a: props.itemInfo.cover,
        b: common_vendor.t(props.itemInfo.playCount),
        c: common_vendor.t(props.itemInfo.playCount),
        d: common_vendor.t(props.itemInfo.name),
        e: common_vendor.t(props.itemInfo.artistName),
        f: common_vendor.o(($event) => onClick())
      };
    };
  }
});
wx.createComponent(_sfc_main);
