"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "banner",
  props: {
    bannerList: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_ctx.bannerList, (item, k0, i0) => {
          return {
            a: item.imageUrl,
            b: item
          };
        })
      };
    };
  }
});
wx.createComponent(_sfc_main);
