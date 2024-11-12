"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "song-item-v2",
  props: {
    songInfo: {},
    index: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.t(_ctx.index),
        b: common_vendor.t(_ctx.songInfo.name),
        c: common_vendor.t((_a = _ctx.songInfo.ar[0]) == null ? void 0 : _a.name)
      };
    };
  }
});
wx.createComponent(_sfc_main);
