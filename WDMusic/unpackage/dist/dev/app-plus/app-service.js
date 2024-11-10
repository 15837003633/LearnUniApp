if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " music-page ");
  }
  const PagesHomeMusicHomeMusic = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/scott/Desktop/code学习练习/web/Learn_UniApp/WDMusic/pages/home-music/home-music.vue"]]);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "video-item",
    props: {
      itemInfo: { type: null, required: true }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "item" }, [
      vue.createElementVNode("view", { class: "album" }, [
        vue.createElementVNode("image", {
          class: "cover",
          src: $setup.props.itemInfo.cover,
          mode: "widthFix"
        }, null, 8, ["src"]),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode(
            "view",
            { class: "left" },
            vue.toDisplayString($setup.props.itemInfo.playCount),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "right" },
            vue.toDisplayString($setup.props.itemInfo.playCount),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode(
        "text",
        { class: "title" },
        vue.toDisplayString($setup.props.itemInfo.name) + "-" + vue.toDisplayString($setup.props.itemInfo.artistName),
        1
        /* TEXT */
      )
    ]);
  }
  const videoItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-a2eff470"], ["__file", "/Users/scott/Desktop/code学习练习/web/Learn_UniApp/WDMusic/pages/home-video/cpns/video-item.vue"]]);
  class WDRequest {
    constructor(baseURL2, timeOut = 1e4) {
      this.baseURL = baseURL2;
      this.timeOut = timeOut;
    }
    async request(options) {
      const url = this.baseURL + "/" + options.url;
      return new Promise((resolve, reject) => {
        uni.request({
          ...options,
          url,
          timeout: this.timeOut,
          success: (res) => {
            resolve(res.data);
          },
          fail: () => {
            reject();
          }
        });
      });
    }
    get(options) {
      return this.request({
        ...options,
        method: "GET"
      });
    }
    post(options) {
      return this.request({
        ...options,
        method: "POST"
      });
    }
  }
  const baseURL = "http://codercba.com:9002";
  const wd_request = new WDRequest(baseURL, 1e4);
  function getTopMVRequest(offset = 0, limit = 20) {
    return wd_request.get({
      url: "top/mv",
      data: {
        offset,
        limit
      }
    });
  }
  const _sfc_main$1 = {
    __name: "home-video",
    setup(__props, { expose: __expose }) {
      __expose();
      const videoList = vue.ref([]);
      getTopMVRequest().then((res) => {
        videoList.value = res.data;
      });
      const __returned__ = { videoList, ref: vue.ref, videoItem, get getTopMVRequest() {
        return getTopMVRequest;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "list" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($setup.videoList, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", { class: "list-item" }, [
            vue.createVNode($setup["videoItem"], { itemInfo: item }, null, 8, ["itemInfo"])
          ]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesHomeVideoHomeVideo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/scott/Desktop/code学习练习/web/Learn_UniApp/WDMusic/pages/home-video/home-video.vue"]]);
  __definePage("pages/home-music/home-music", PagesHomeMusicHomeMusic);
  __definePage("pages/home-video/home-video", PagesHomeVideoHomeVideo);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/scott/Desktop/code学习练习/web/Learn_UniApp/WDMusic/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
