"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./src/assets/styles/global.ts
var global = __webpack_require__(766);
;// CONCATENATED MODULE: ./src/assets/images/header-background.jpg
/* harmony default export */ const header_background = ({"src":"/jluizgomes.github.io//_next/static/media/header-background.adfe3c37.jpg","height":768,"width":1360,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlAP/xAAZEAABBQAAAAAAAAAAAAAAAAABAAISU5H/2gAIAQEAAT8AmysaV//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/assets/styles/theme.ts

const theme = {
  colors: {
    bodyBackground: '#ffffff',
    background: '#caf0f8ff',
    primary: '#03045eff',
    title: '#023e8aff',
    text: '#0077b6ff',
    borderBox: '#e9ecefff',
    boxShadow: 'rgba(108, 117, 125, 0.2)',
    blueGreen: '#0096c7ff',
    ceruleanCrayola: '#00b4d8ff',
    skyBlueCrayola: '#48cae4ff',
    skyBlueCrayola2: '#90e0efff',
    blizzardBlue: '#ade8f4ff',
    cultured: '#f8f9faff',
    cultured2: '#e9ecefff',
    gainsboro: '#dee2e6ff',
    lightGray: '#ced4daff',
    cadetBlueCrayola: '#adb5bdff',
    slateGray: '#6c757dff',
    davysGrey: '#495057ff',
    gunmetal: '#023e7dff',
    charlestonGreen: '#212529ff',
    logoTitle: '#001d3d',
    subtitle: '#001d3d',
    textContent: '#001233'
  },
  header: {
    backgroundImage: header_background.src
  }
};
/* harmony default export */ const styles_theme = (theme);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Description"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "Keywords"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Jorge - Portif\xF3lio"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/icons/favicon-16x16.png",
        rel: "icon",
        type: "image/png",
        sizes: "16x16"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/icons/favicon-32x32.png",
        rel: "icon",
        type: "image/png",
        sizes: "32x32"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/apple-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,100&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#317EFB"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
      theme: styles_theme,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(global/* default */.ZP, {})]
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [766], () => (__webpack_exec__(9355)));
module.exports = __webpack_exports__;

})();