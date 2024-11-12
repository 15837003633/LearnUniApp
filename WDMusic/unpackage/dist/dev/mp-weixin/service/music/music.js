"use strict";
const service_index = require("../index.js");
function getMusicBanner(type = 0) {
  return service_index.wd_request.get({
    url: "/banner",
    data: {
      type
    }
  });
}
function getPlayListDetail(id) {
  return service_index.wd_request.get({
    url: "/playlist/detail",
    data: {
      id
    }
  });
}
exports.getMusicBanner = getMusicBanner;
exports.getPlayListDetail = getPlayListDetail;
