const path = require('path');
const { appRoot, publicRoot } = require("../shared/constants.js");

const webpackRoot = path.join(appRoot, 'webpack');
const webpackTemplatesRoot = path.join(webpackRoot, 'templates');

module.exports = {
    appRoot,
    publicRoot,

    webpackRoot,
    webpackTemplatesRoot
}
