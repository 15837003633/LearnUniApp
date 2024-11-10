"use strict";
const common_vendor = require("../common/vendor.js");
class WDRequest {
  constructor(baseURL, timeOut = 1e4) {
    this.baseURL = baseURL;
    this.timeOut = timeOut;
  }
  async request(options) {
    const url = this.baseURL + "/" + options.url;
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        ...options,
        url,
        timeout: this.timeOut,
        success: (res) => {
          console.log("req:", options, "rep:", res.data);
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
exports.WDRequest = WDRequest;
