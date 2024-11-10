"use strict";
const service_index = require("./index.js");
function getTopMVRequest(offset = 0, limit = 20) {
  return service_index.wd_request.get({
    url: "top/mv",
    data: {
      offset,
      limit
    }
  });
}
exports.getTopMVRequest = getTopMVRequest;
