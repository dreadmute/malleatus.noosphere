"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@m4tt72/matomo-tracker-react"
var matomo_tracker_react_ = __webpack_require__(501);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/utils/themeProvider.tsx
var themeProvider = __webpack_require__(589);
;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx



const Layout = ({ children , onClick  })=>{
    const { theme  } = (0,themeProvider/* useTheme */.F)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "min-w-max text-xs md:min-w-full md:text-base",
        onClick: onClick,
        style: {
            color: theme.foreground
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: "w-full h-full p-2",
            style: {
                background: theme.background
            },
            children: children
        })
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/layout/index.tsx


// EXTERNAL MODULE: ./src/utils/shellProvider.tsx
var shellProvider = __webpack_require__(663);
;// CONCATENATED MODULE: ./src/pages/_app.tsx








const App = ({ Component , pageProps  })=>{
    const inputRef = external_react_default().useRef(null);
    const onClickAnywhere = ()=>{
        inputRef.current.focus();
    };
    (0,external_react_.useEffect)(()=>{
        localStorage.setItem("visitedAt", new Date().toString());
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(themeProvider/* ThemeProvider */.f, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(shellProvider/* ShellProvider */.j, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }, "viewport")
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
                    onClick: onClickAnywhere,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps,
                        inputRef: inputRef
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const _app = ((props)=>{
    const ENABLE_TRACKING = Boolean(+process.env.NEXT_PUBLIC_ENABLE_TRACKING);
    if (!ENABLE_TRACKING) {
        return /*#__PURE__*/ jsx_runtime_.jsx(App, {
            ...props
        });
    }
    const instance = (0,matomo_tracker_react_.createInstance)({
        urlBase: process.env.NEXT_PUBLIC_TRACKING_URL,
        trackerUrl: `${process.env.NEXT_PUBLIC_TRACKING_URL}/js/`,
        srcUrl: `${process.env.NEXT_PUBLIC_TRACKING_URL}/js/`,
        siteId: +process.env.NEXT_PUBLIC_TRACKING_SITE_ID,
        configurations: {
            setRequestMethod: "GET"
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(matomo_tracker_react_.MatomoProvider, {
        value: instance,
        children: /*#__PURE__*/ jsx_runtime_.jsx(App, {
            ...props
        })
    });
});


/***/ }),

/***/ 501:
/***/ ((module) => {

module.exports = require("@m4tt72/matomo-tracker-react");

/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [663], () => (__webpack_exec__(416)));
module.exports = __webpack_exports__;

})();