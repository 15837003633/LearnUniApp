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
  const _sfc_main$4 = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " music-page ");
  }
  const PagesHomeMusicHomeMusic = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/scott/Desktop/code学习练习/web/Learn_UniApp/WDMusic/pages/home-music/home-music.vue"]]);
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "video-item",
    props: {
      itemInfo: { type: null, required: true }
    },
    emits: ["itemClick"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emits = __emit;
      const onClick = () => {
        emits("itemClick", props.itemInfo);
      };
      const __returned__ = { props, emits, onClick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "item",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.onClick())
    }, [
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
  const videoItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-a2eff470"], ["__file", "/Users/scott/Desktop/code学习练习/web/Learn_UniApp/WDMusic/pages/home-video/cpns/video-item.vue"]]);
  class WDRequest {
    constructor(baseURL2, timeOut = 1e4) {
      this.baseURL = baseURL2;
      this.timeOut = timeOut;
    }
    async request(options) {
      const url = this.baseURL + options.url;
      return new Promise((resolve, reject) => {
        uni.request({
          ...options,
          url,
          timeout: this.timeOut,
          success: (res) => {
            formatAppLog("log", "at service/wd-request.ts:20", "req:", options, "rep:", res.data);
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
      url: "/top/mv",
      data: {
        offset,
        limit
      }
    });
  }
  function getMVDetail(mvid) {
    return wd_request.get({
      url: "/mv/detail",
      data: {
        mvid
      }
    });
  }
  function getMVPlayURL(id) {
    return wd_request.get({
      url: "/mv/url",
      data: {
        id,
        r: 1080
      }
    });
  }
  function getMVRelateVideoList(id) {
    return wd_request.get({
      url: "/related/allvideo",
      data: {
        id
      }
    });
  }
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "home-video",
    setup(__props, { expose: __expose }) {
      __expose();
      let offset = 0;
      const videoList = vue.ref([]);
      function onItemClick(itemInfo) {
        uni.navigateTo({
          url: "/pages/detail-video/detail-video?mvid=" + itemInfo.id
        });
      }
      fetchNewList();
      onPullDownRefresh(() => {
        formatAppLog("log", "at pages/home-video/home-video.vue:40", "onPullDownRefresh");
        fetchNewList();
      });
      onReachBottom(() => {
        formatAppLog("log", "at pages/home-video/home-video.vue:45", "onReachBottom");
        fetchMoreList();
      });
      function fetchNewList() {
        offset = 0;
        getTopMVRequest(offset).then((res) => {
          videoList.value = res.data;
          offset = videoList.value.length;
          uni.stopPullDownRefresh();
        });
      }
      function fetchMoreList() {
        getTopMVRequest(offset).then((res) => {
          var _a;
          if (((_a = res.data) == null ? void 0 : _a.length) > 0) {
            videoList.value.push(...res.data);
            offset = videoList.value.length;
          } else {
            uni.showToast({
              title: "no more data"
            });
          }
        });
      }
      const __returned__ = { get offset() {
        return offset;
      }, set offset(v) {
        offset = v;
      }, videoList, onItemClick, fetchNewList, fetchMoreList, videoItem };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "list" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($setup.videoList, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: item.id,
            class: "list-item"
          }, [
            vue.createVNode($setup["videoItem"], {
              itemInfo: item,
              onItemClick: $setup.onItemClick
            }, null, 8, ["itemInfo"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesHomeVideoHomeVideo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/scott/Desktop/code学习练习/web/Learn_UniApp/WDMusic/pages/home-video/home-video.vue"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "detail-video",
    props: {
      mvid: {
        // type: number，Vue 将无法正确识别，因为它期待的是构造函数而不是基本类型
        type: String,
        default: 0
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const mvUrl = vue.ref();
      getMVPlayURL(props.mvid).then((res) => {
        var _a;
        mvUrl.value = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.url;
      });
      const mvInfo = vue.ref();
      getMVDetail(props.mvid).then((res) => {
        mvInfo.value = res.data;
        uni.setNavigationBarTitle({
          title: mvInfo.value.name
        });
      });
      const mvRelationList = vue.ref();
      getMVRelateVideoList(props.mvid).then((res) => {
        mvRelationList.value = res.data;
      });
      const __returned__ = { props, mvUrl, mvInfo, mvRelationList };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-video" }, [
      vue.createElementVNode("video", {
        class: "player",
        src: $setup.mvUrl
      }, null, 8, ["src"]),
      vue.createElementVNode("scroll-view", {
        class: "content",
        "scroll-y": ""
      }, [
        vue.createElementVNode(
          "view",
          { class: "info" },
          vue.toDisplayString($setup.mvInfo.desc) + " - " + vue.toDisplayString($setup.mvInfo.name),
          1
          /* TEXT */
        ),
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(100, (item) => {
            return vue.createElementVNode(
              "view",
              { key: item },
              " 相关视频： " + vue.toDisplayString(item),
              1
              /* TEXT */
            );
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesDetailVideoDetailVideo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/scott/Desktop/code学习练习/web/Learn_UniApp/WDMusic/pages/detail-video/detail-video.vue"]]);
  __definePage("pages/home-music/home-music", PagesHomeMusicHomeMusic);
  __definePage("pages/home-video/home-video", PagesHomeVideoHomeVideo);
  __definePage("pages/detail-video/detail-video", PagesDetailVideoDetailVideo);
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
