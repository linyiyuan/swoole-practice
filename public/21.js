webpackJsonp([21],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(271)
}
var normalizeComponent = __webpack_require__(85)
/* script */
var __vue_script__ = __webpack_require__(273)
/* template */
var __vue_template__ = __webpack_require__(275)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/icon/FontAwesome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64af925d", Component.options)
  } else {
    hotAPI.reload("data-v-64af925d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(86)("01f46c8c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64af925d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FontAwesome.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64af925d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FontAwesome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.box-card {\n  border-radius: 0;\n}\n.font-awesome .el-col {\n  margin: 20px 0;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FontAwesome__ = __webpack_require__(274);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      FontAwesome: __WEBPACK_IMPORTED_MODULE_0__FontAwesome__["a" /* default */]
    };
  },

  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  "50 New Icons in 4.7": ['address-book', 'address-book-o', 'address-card', 'address-card-o', 'bandcamp', 'bath', 'bathtub', 'drivers-license', 'drivers-license-o', 'eercast', 'envelope-open', 'envelope-open-o', 'etsy', 'free-code-camp', 'grav', 'handshake-o', 'id-badge', 'id-card', 'id-card-o', 'imdb', 'linode', 'meetup', 'microchip', 'podcast', 'quora', 'ravelry', 's15', 'shower', 'snowflake-o', 'superpowers', 'telegram', 'thermometer', 'thermometer-0', 'thermometer-1', 'thermometer-2', 'thermometer-3', 'thermometer-4', 'thermometer-empty', 'thermometer-full', 'thermometer-half', 'thermometer-quarter', 'thermometer-three-quarters', 'times-rectangle', 'times-rectangle-o', 'user-circle', 'user-circle-o', 'user-o', 'vcard', 'vcard-o', 'window-close', 'window-close-o', 'window-maximize', 'window-minimize', 'window-restore', 'wpexplorer']
  // "Web Application Icons": ['address-book']
});

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.FontAwesome, function(icons, title) {
      return _c(
        "el-card",
        { key: title, staticClass: "box-card" },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("span", [_vm._v(_vm._s(title))]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticStyle: {
                  float: "right",
                  padding: "3px 0",
                  "font-size": "12px"
                },
                attrs: {
                  href: "http://fontawesome.io/",
                  target: "_blank",
                  type: "text"
                }
              },
              [
                _vm._v("More "),
                _c("i", { staticClass: "el-icon-d-arrow-right" })
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "el-row",
            { staticClass: "font-awesome", attrs: { gutter: 20 } },
            _vm._l(icons, function(v, i) {
              return _c("el-col", { key: i, attrs: { span: 4 } }, [
                _c("i", { class: "fa fa-" + v }),
                _c("br"),
                _vm._v(_vm._s(v) + "\n      ")
              ])
            })
          )
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64af925d", module.exports)
  }
}

/***/ })

});