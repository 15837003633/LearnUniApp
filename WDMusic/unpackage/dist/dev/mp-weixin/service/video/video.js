"use strict";
const service_index = require("../index.js");
function getTopMVRequest(offset = 0, limit = 20) {
  return service_index.wd_request.get({
    url: "/top/mv",
    data: {
      offset,
      limit
    }
  });
}
function getMVDetail(mvid) {
  return service_index.wd_request.get({
    url: "/mv/detail",
    data: {
      mvid
    }
  });
}
function getMVPlayURL(id) {
  return service_index.wd_request.get({
    url: "/mv/url",
    data: {
      id,
      r: 1080
    }
  });
}
function getMVRelateVideoList(id) {
  return service_index.wd_request.get({
    url: "/related/allvideo",
    data: {
      id
    }
  });
}
exports.getMVDetail = getMVDetail;
exports.getMVPlayURL = getMVPlayURL;
exports.getMVRelateVideoList = getMVRelateVideoList;
exports.getTopMVRequest = getTopMVRequest;
