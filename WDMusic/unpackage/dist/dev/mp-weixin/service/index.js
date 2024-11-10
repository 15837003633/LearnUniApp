"use strict";
const service_wdRequest = require("./wd-request.js");
const service_config = require("./config.js");
const wd_request = new service_wdRequest.WDRequest(service_config.baseURL, 1e4);
exports.wd_request = wd_request;
