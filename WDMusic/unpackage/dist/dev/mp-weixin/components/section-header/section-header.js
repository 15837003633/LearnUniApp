"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "section-header",
  props: {
    title: {},
    hasMore: {}
  },
  emits: ["moreClick"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    function onMoreClick() {
      emits("moreClick");
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(_ctx.title),
        b: _ctx.hasMore
      }, _ctx.hasMore ? {
        c: common_vendor.o(onMoreClick)
      } : {});
    };
  }
});
wx.createComponent(_sfc_main);
