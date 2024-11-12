"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "song-item-v1",
  props: {
    songInfo: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      return {
        a: _ctx.songInfo.al.picUrl,
        b: common_vendor.t(_ctx.songInfo.name),
        c: common_vendor.t((_a = _ctx.songInfo.ar[0]) == null ? void 0 : _a.name),
        d: common_vendor.t(">")
      };
    };
  }
});
wx.createComponent(_sfc_main);
