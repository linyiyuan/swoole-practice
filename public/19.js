webpackJsonp([19],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(322)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(324)
/* template */
var __vue_template__ = __webpack_require__(325)
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
Component.options.__file = "resources/js/views/login/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98aa4118", Component.options)
  } else {
    hotAPI.reload("data-v-98aa4118", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("bf8c6dac", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-98aa4118\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-98aa4118\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.login {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.login .login-form {\n  width: 375px;\n  height: 300px;\n  padding: 30px;\n  text-align: left;\n  border-radius: 4px;\n  position: relative;\n  top: -100px;\n  margin-left: 0;\n  margin-right: 0;\n  zoom: 1;\n  display: block;\n}\n.login .login-form .login-header {\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n#particles {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  /*background-repeat: no-repeat;*/\n  /*background-size: cover;*/\n  /*background-position: 50% 50%;*/\n}\n", ""]);

// exports


/***/ }),

/***/ 324:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ruleForm: {
                userName: localStorage.getItem('username'),
                password: ''
            },
            Remenber: true,
            loginLoading: false,
            rules: {
                userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 6, max: 18, message: '用户名6-18位', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 12, message: '密码长度6-12位', trigger: 'blur' }]
            }
        };
    },

    methods: {
        login: function login(formName) {
            var _this = this;

            var APP = this;
            APP.$refs[formName].validate(function (valid) {
                if (valid) {
                    APP.loginLoading = true;
                    APP.$Api.login(APP.ruleForm, function (c) {
                        //登录验证成功
                        if (c.code == 200) {

                            if (APP.Remenber) {
                                localStorage.setItem('username', APP.ruleForm.userName);
                            }
                            setTimeout(function () {
                                //分发存储任务
                                _this.$store.dispatch('logined', c.data['access_token']);
                                APP.$notify({
                                    title: '登录成功',
                                    message: '欢迎来到商城后台',
                                    type: 'success'
                                });
                                APP.loginLoading = false;
                                APP.$router.push({ path: '/admin' });
                            }, 1000);
                        } else {
                            APP.$message({
                                'message': JSON.parse(c.data),
                                'type': 'error',
                                showClose: true
                            });
                            APP.loginLoading = false;
                        }
                    });
                } else {
                    return false;
                }
            });
        }
    },

    mounted: function mounted() {
        particlesJS('particles', {
            "particles": {
                "number": {
                    "value": 70,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#bddcf0"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.8,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 2,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.5,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3cabff",
                    "opacity": 0.3,
                    "width": 1
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 200,
                        "line_linked": {
                            "opacity": 0.8
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

});

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "login-form" },
      [
        _c("div", { staticClass: "login-header" }, [
          _c("p", [_vm._v(_vm._s(_vm.$Config.siteName))])
        ]),
        _vm._v(" "),
        _c(
          "el-form",
          {
            ref: "ruleForm",
            attrs: { rules: _vm.rules, model: _vm.ruleForm, "status-icon": "" }
          },
          [
            _c(
              "el-form-item",
              { attrs: { prop: "userName" } },
              [
                _c("el-input", {
                  attrs: {
                    placeholder: "请输入用户名",
                    "suffix-icon": "fa fa-user"
                  },
                  model: {
                    value: _vm.ruleForm.userName,
                    callback: function($$v) {
                      _vm.$set(_vm.ruleForm, "userName", $$v)
                    },
                    expression: "ruleForm.userName"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              { attrs: { prop: "password" } },
              [
                _c("el-input", {
                  attrs: {
                    placeholder: "请输入密码",
                    "suffix-icon": "fa fa-keyboard-o",
                    type: "password"
                  },
                  nativeOn: {
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.login($event)
                    }
                  },
                  model: {
                    value: _vm.ruleForm.password,
                    callback: function($$v) {
                      _vm.$set(_vm.ruleForm, "password", $$v)
                    },
                    expression: "ruleForm.password"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-button",
              {
                staticStyle: { width: "100%", "margin-bottom": "18px" },
                attrs: { type: "primary", loading: _vm.loginLoading },
                nativeOn: {
                  click: function($event) {
                    _vm.login("ruleForm")
                  }
                }
              },
              [_vm._v("登录\n          ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "el-checkbox",
                  {
                    model: {
                      value: _vm.Remenber,
                      callback: function($$v) {
                        _vm.Remenber = $$v
                      },
                      expression: "Remenber"
                    }
                  },
                  [_vm._v(" Remenber")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "particles" } }, [
      _c("canvas", {
        staticClass: "particles-js-canvas-el",
        staticStyle: { width: "100%", height: "100%" },
        attrs: { width: "1747", height: "1000" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-98aa4118", module.exports)
  }
}

/***/ })

});