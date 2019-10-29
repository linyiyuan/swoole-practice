webpackJsonp([0],{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(337)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(339)
/* template */
var __vue_template__ = __webpack_require__(340)
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
Component.options.__file = "resources/js/views/systemManage/config/config.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6bfdada", Component.options)
  } else {
    hotAPI.reload("data-v-c6bfdada", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("3ea80dc8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c6bfdada\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./config.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c6bfdada\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./config.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.box-card {\n  border-radius: 0;\n}\n.box-card .panel-heading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left;\n  width: 100%;\n  border-bottom: 1px solid #eeeff1;\n  padding: 15px;\n  font-weight: bold;\n}\n.box-card .panel-heading img {\n  margin-right: 15px;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}\n.box-card .panel-heading .title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.box-card .panel-heading .title .name {\n  color: #367fa9;\n  font-size: 18px;\n}\n.box-card .panel-heading .title .role {\n  color: #99a9c0;\n}\n.box-card .panel-body {\n  color: #3c8dbc;\n}\n.box-card .panel-body ul li {\n  border-bottom: 1px solid #eeeff1;\n  padding: 0 15px;\n  height: 45px;\n  line-height: 45px;\n}\n", ""]);

// exports


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
            activeName: 'index',
            config: [],
            api_config: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$Api.getConfig({}, function (c) {
            if (c.code == 200) {
                _this.config = c.data;
            }
        });

        this.api_config = [{
            name: '项目名',
            config: this.$Config.siteName,
            icon: 'fa fa-home'
        }, {
            name: '前端框架',
            config: 'Vue 2.0',
            icon: 'fa fa-html5'
        }, {
            name: '前端UI框架',
            config: 'Element UI 2.4.11',
            icon: 'fa fa-css3'
        }, {
            name: '沙箱环境Api地址',
            config: this.$Config.devUrl,
            icon: 'fa fa-send'
        }, {
            name: '正式环境Api地址',
            config: this.$Config.proUrl,
            icon: 'fa fa-send'
        }, {
            name: 'Github',
            config: this.$Config.gitHub,
            icon: 'fa fa-github-alt'
        }];
    },


    components: {}
});

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-card",
        { staticClass: "box-card" },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("span", [_vm._v(_vm._s(_vm.$route.meta.title))])
          ]),
          _vm._v(" "),
          _c(
            "el-tabs",
            {
              model: {
                value: _vm.activeName,
                callback: function($$v) {
                  _vm.activeName = $$v
                },
                expression: "activeName"
              }
            },
            [
              _c(
                "el-tab-pane",
                { attrs: { label: "基本信息", name: "index" } },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _c(
                      "ul",
                      _vm._l(_vm.config, function(v) {
                        return _c(
                          "li",
                          [
                            _c(
                              "el-row",
                              { attrs: { gutter: 20 } },
                              [
                                _c("el-col", { attrs: { span: 24 } }, [
                                  _c("i", { class: v.icon }, [
                                    _vm._v("  " + _vm._s(v.name) + " : ")
                                  ]),
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(v.config) +
                                      "\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("el-tab-pane", { attrs: { label: "前端信息", name: "api" } }, [
                _c("div", { staticClass: "panel-body" }, [
                  _c(
                    "ul",
                    _vm._l(_vm.api_config, function(v) {
                      return _c(
                        "li",
                        [
                          _c(
                            "el-row",
                            { attrs: { gutter: 20 } },
                            [
                              _c("el-col", { attrs: { span: 24 } }, [
                                _c("i", { class: v.icon }, [
                                  _vm._v("  " + _vm._s(v.name) + " : ")
                                ]),
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(v.config) +
                                    "\n                                "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  )
                ])
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c6bfdada", module.exports)
  }
}

/***/ })

});