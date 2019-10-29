webpackJsonp([1],{

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(245)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(247)
/* template */
var __vue_template__ = __webpack_require__(266)
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
Component.options.__file = "resources/js/views/layout/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57ea79db", Component.options)
  } else {
    hotAPI.reload("data-v-57ea79db", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(246);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("4a54f598", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ea79db\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ea79db\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.sidebar-hidden .header .logo {\n  background: #222d32;\n  width: 64px;\n}\n.sidebar-hidden .header .logo .big {\n  display: none;\n}\n.sidebar-hidden .header .logo .min {\n  display: block;\n}\n.sidebar-hidden .aside .sidebar-toggle .icon-left {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.sidebar-hidden .main .app-body {\n  margin-left: 64px;\n}\n.sidebar-close .header .logo {\n  width: 0;\n  overflow: hidden;\n}\n.sidebar-close .aside {\n  margin-left: -230px;\n}\n.sidebar-close .main .app-body {\n  margin-left: 0;\n}\n.sidebar-hidden.sidebar-close .aside {\n  margin-left: -64px;\n}\n.main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.main .el-menu:not(.el-menu--collapse) {\n  width: 230px;\n}\n.main .app {\n  width: 100%;\n  background-color: #ecf0f5;\n}\n.main .aside {\n  position: fixed;\n  margin-top: 50px;\n  z-index: 10;\n  background-color: #222d32;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.main .aside .menu {\n  overflow-y: auto;\n  height: calc(100vh - 100px);\n}\n.main .aside .sidebar-toggle {\n  position: relative;\n  width: 100%;\n  height: 50px;\n  background-color: #367fa9;\n  color: #fff;\n  cursor: pointer;\n}\n.main .aside .sidebar-toggle .icon-left {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  right: 0;\n  width: 64px;\n  height: 100%;\n  font-size: 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.main .app-body {\n  margin-left: 230px;\n  -webkit-transition: margin-left 0.3s ease-in-out;\n  transition: margin-left 0.3s ease-in-out;\n}\n.main .main-container {\n  padding: 6px;\n  min-height: calc(100vh - 101px);\n}\n.header {\n  width: 100%;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  background-color: #3c8dbc;\n  z-index: 10;\n}\n.header .logo {\n  width: 230px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  color: #fff;\n  background-color: #367fa9;\n  -webkit-transition: width 0.35s;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.header .logo .min {\n  display: none;\n}\n.header .right {\n  position: absolute;\n  right: 0;\n}\n.header .header-btn {\n  overflow: hidden;\n  height: 50px;\n  display: inline-block;\n  text-align: center;\n  line-height: 50px;\n  cursor: pointer;\n  padding: 0 14px;\n  color: #fff;\n}\n.header .header-btn .el-badge__content {\n  top: 14px;\n  right: 7px;\n  text-align: center;\n  font-size: 9px;\n  padding: 0 3px;\n  background-color: #00a65a;\n  color: #fff;\n  border: none;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25em;\n}\n.header .header-btn:hover {\n  background-color: #367fa9;\n}\n.menu {\n  border-right: none;\n}\n.el-menu--vertical {\n  min-width: 190px;\n}\n.setting-category {\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n}\n", ""]);

// exports


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_screenfull__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_vue__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Footer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavBar_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_index__ = __webpack_require__(264);
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
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fixedTabBar: false,
      switchTabBar: false,
      siteName: this.$Config.siteName,
      isCollapse: false,
      menu: __WEBPACK_IMPORTED_MODULE_3__menu_index__["a" /* default */],
      username: this.$store.state.username
    };
  },

  methods: {
    NavBarWidth: function NavBarWidth() {
      var navBar = document.getElementById('nav-bar');
      if (!navBar) return;
      if (!(this.fixedTabBar && this.switchTabBar)) {
        navBar.style.width = '100%';return;
      }
      var sidebarClose = document.body.classList.contains('sidebar-close');
      if (sidebarClose) {
        navBar.style.width = '100%';return;
      }
      if (this.isCollapse) navBar.style.width = 'calc(100% - 64px)';else navBar.style.width = 'calc(100% - 230px)';
    },
    ToggleGrayMode: function ToggleGrayMode() {
      document.body.classList.toggle("gray-mode");
    },
    screenfullToggle: function screenfullToggle() {
      if (!__WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.enabled) {
        this.$message({
          message: '你的浏览器不支持全屏！',
          type: 'warning'
        });
        return false;
      }
      __WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.toggle();
    },
    saveFixedTabBar: function saveFixedTabBar(v) {
      v ? localStorage.setItem('fixedTabBar', v) : localStorage.removeItem('fixedTabBar');
      this.NavBarWidth();
    },
    saveSwitchTabBarVal: function saveSwitchTabBarVal(v) {
      var containerDom = document.getElementById('mainContainer');
      v ? containerDom.style.minHeight = 'calc(100vh - 139px)' : containerDom.style.minHeight = 'calc(100vh - 101px)';
      v ? localStorage.setItem('switchTabBar', v) : localStorage.removeItem('switchTabBar');
      this.NavBarWidth();
    },
    sidebarToggle: function sidebarToggle(e) {
      e.preventDefault();
      if (this.isCollapse) {
        document.body.classList.remove('sidebar-hidden');
        this.siteName = this.$Config.siteName;
        this.isCollapse = false;
      } else {
        document.body.classList.add('sidebar-hidden');
        this.isCollapse = true;
      }
      this.NavBarWidth();
    },
    hiddenSidebar: function hiddenSidebar(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-close');
      this.NavBarWidth();
    },
    logout: function logout() {
      var _this = this;

      this.$confirm('是否退出后台管理系统?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(function () {
        _this.$store.dispatch('logout');
      }).catch(function () {
        return false;
      });
    },
    handleOpen: function handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose: function handleClose(key, keyPath) {
      //关闭菜单
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.switchTabBar = localStorage.getItem('switchTabBar') ? true : false;
    this.fixedTabBar = localStorage.getItem('fixedTabBar') ? true : false;
    if (this.switchTabBar) document.getElementById('mainContainer').style.minHeight = 'calc(100vh - 139px)';

    if (!this.isCollapse) {

      document.body.classList.remove('sidebar-hidden');
      this.siteName = this.$Config.siteName;
    } else {
      document.body.classList.add('sidebar-hidden');
    }

    setTimeout(function () {
      _this2.NavBarWidth();
    }, 1000);
  },
  components: {
    EuiFooter: __WEBPACK_IMPORTED_MODULE_1__Footer_vue___default.a, NavBar: __WEBPACK_IMPORTED_MODULE_2__NavBar_vue___default.a
  }
});

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.3 - 2018-09-04
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(250)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(252)
/* template */
var __vue_template__ = __webpack_require__(253)
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
Component.options.__file = "resources/js/views/layout/Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-023461d1", Component.options)
  } else {
    hotAPI.reload("data-v-023461d1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("8c5ca3b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-023461d1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-023461d1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.footer {\n  width: 100%;\n  font-size: 14px;\n  background: #fff;\n  line-height: 50px;\n  padding: 0 12px;\n  height: 50px;\n  color: #444;\n  border-top: 1px solid #d2d6de;\n}\n.footer .version {\n  float: right;\n}\n.footer .version b {\n  font-weight: 700;\n}\n.footer .version .github {\n  color: #444;\n  font-size: 20px;\n  margin-left: 8px;\n}\n.footer .version .github:hover {\n  color: #8BC34A;\n}\n", ""]);

// exports


/***/ }),

/***/ 252:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  methods: {}
});

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "footer" }, [
    _c("div", { staticClass: "version" }, [
      _c("b", [_vm._v("Version")]),
      _vm._v(" " + _vm._s(_vm.$Config.version) + "\n    "),
      _c("a", { attrs: { href: _vm.$Config.gitHub, target: "_blank" } }, [
        _c("i", { staticClass: "fa fa-github github" })
      ])
    ]),
    _vm._v(" "),
    _c("strong", [
      _vm._v("Copyright © 2014-2016 "),
      _c("a", { attrs: { href: "javascript:;" } }, [
        _vm._v(_vm._s(_vm.$Config.siteName))
      ]),
      _vm._v(".")
    ]),
    _vm._v(" All rights reserved.\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-023461d1", module.exports)
  }
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(255)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(263)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-041f1da6"
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
Component.options.__file = "resources/js/views/layout/NavBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-041f1da6", Component.options)
  } else {
    hotAPI.reload("data-v-041f1da6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("56e7b0cc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-041f1da6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavBar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-041f1da6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.nav-bar[data-v-041f1da6] {\n  margin-top: 50px;\n  height: 38px;\n  width: 100%;\n  z-index: 8;\n  background: #fff;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.nav-bar .nav-bar-tag[data-v-041f1da6] {\n  height: 26px;\n  color: #495060;\n  margin: 6px 2px;\n  padding-left: 6px;\n  padding-right: 6px;\n  font-size: 12px;\n  line-height: 26px;\n  border: 1px solid #ebeef5;\n  border-radius: 2px;\n  display: inline-block;\n}\n.nav-bar .nav-bar-tag .close-box[data-v-041f1da6] {\n  display: inline-block;\n  height: 100%;\n  border-left: 1px solid #ebeef5;\n  margin-left: 6px;\n}\n.nav-bar .nav-bar-tag[data-v-041f1da6]:hover {\n  opacity: 0.85;\n}\n.nav-bar .nav-bar-tag .point[data-v-041f1da6] {\n  display: none;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin: auto 0;\n  position: relative;\n  background: #fff;\n}\n.nav-bar .nav-bar-tag .el-icon-close[data-v-041f1da6] {\n  font-weight: bolder;\n  margin-left: 6px;\n}\n.nav-bar .nav-bar-tag .el-icon-close[data-v-041f1da6]:hover {\n  color: #ff0000;\n}\n.nav-bar .active[data-v-041f1da6] {\n  border: 1px solid #3d8dbc;\n  background: #3d8dbc;\n  color: #fff;\n}\n.nav-bar .active .point[data-v-041f1da6] {\n  display: inline-block;\n}\n.nav-bar .scroll-container[data-v-041f1da6] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ScrollPane_vue__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ScrollPane_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ScrollPane_vue__);
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
      nav: []
    };
  },

  components: {
    ScrollPane: __WEBPACK_IMPORTED_MODULE_0__components_ScrollPane_vue___default.a
  },
  watch: {
    '$route': {
      handler: function handler() {
        var index = this.$Func.hasValInArrayObj(this.nav, 'path', this.$route.path);
        if (index != -1) return;
        this.nav.push({
          path: this.$route.path,
          title: this.$route.meta.title
        });
      },
      // 深度观察
      deep: true
    }
  },
  methods: {
    closeSelectedTag: function closeSelectedTag(i) {
      var nav = this.nav;
      var thisPath = nav[i].path;
      nav.splice(i, 1);
      if (thisPath == this.$route.path) {
        this.$router.push(nav[nav.length - 1].path);
      }
    }
  },
  mounted: function mounted() {
    this.nav.push({
      path: this.$route.path,
      title: this.$route.meta.title
    });
  }
});

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(261)
/* template */
var __vue_template__ = __webpack_require__(262)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a154a00"
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
Component.options.__file = "resources/js/components/ScrollPane.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a154a00", Component.options)
  } else {
    hotAPI.reload("data-v-1a154a00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("02d96365", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a154a00\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ScrollPane.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a154a00\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ScrollPane.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.scroll-container[data-v-1a154a00] {\n  cursor: ew-resize;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.scroll-container .scroll-wrapper[data-v-1a154a00] {\n  padding: 0 4px;\n  position: absolute;\n  -webkit-transition: left 0.3s ease-in-out;\n  transition: left 0.3s ease-in-out;\n}\n", ""]);

// exports


/***/ }),

/***/ 261:
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

var padding = 15; // tag's padding
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'scrollPane',
  data: function data() {
    return {
      left: 0
    };
  },

  methods: {
    handleScroll: function handleScroll(e) {
      // console.log(e.wheelDelta +'---'+ -e.deltaY);
      var eventDelta = e.wheelDelta || -e.deltaY * 3;
      var $container = this.$refs.scrollContainer;
      var $containerWidth = $container.offsetWidth;
      var $wrapper = this.$refs.scrollWrapper;
      var $wrapperWidth = $wrapper.offsetWidth;
      if (eventDelta > 0) {
        this.left = Math.min(0, this.left + eventDelta);
      } else {
        if ($containerWidth - padding < $wrapperWidth) {
          if (this.left < -($wrapperWidth - $containerWidth + padding)) {
            this.left = this.left;
          } else {
            this.left = Math.max(this.left + eventDelta, $containerWidth - $wrapperWidth - padding);
          }
        } else {
          this.left = 0;
        }
      }
    },
    moveToTarget: function moveToTarget($target) {
      var $container = this.$refs.scrollContainer;
      var $containerWidth = $container.offsetWidth;
      var $targetLeft = $target.offsetLeft;
      var $targetWidth = $target.offsetWidth;
      if ($targetLeft < -this.left) {
        // tag in the left
        this.left = -$targetLeft + padding;
      } else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
        // tag in the current view
        // eslint-disable-line
      } else {
        // tag in the right
        this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding);
      }
    }
  }
});

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "scrollContainer",
      staticClass: "scroll-container",
      on: {
        wheel: function($event) {
          $event.preventDefault()
          return _vm.handleScroll($event)
        }
      }
    },
    [
      _c(
        "div",
        {
          ref: "scrollWrapper",
          staticClass: "scroll-wrapper",
          style: { left: _vm.left + "px" }
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a154a00", module.exports)
  }
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "nav-bar" },
    [
      _c(
        "ScrollPane",
        { staticClass: "nav-bar-scroll" },
        _vm._l(_vm.nav, function(v, i) {
          return _c(
            "router-link",
            {
              key: i.path,
              staticClass: "nav-bar-tag",
              class: _vm.$route.path == v.path ? " active" : "",
              attrs: { to: v.path }
            },
            [
              _c("i", { staticClass: "point" }),
              _vm._v("\n      " + _vm._s(v.title) + "\n      "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.nav.length != 1,
                      expression: "nav.length != 1"
                    }
                  ],
                  staticClass: "close-box"
                },
                [
                  _c("span", {
                    staticClass: "el-icon-close",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        $event.stopPropagation()
                        _vm.closeSelectedTag(i)
                      }
                    }
                  })
                ]
              )
            ]
          )
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-041f1da6", module.exports)
  }
}

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(85);



//这里可以根据权限做菜单过滤

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__menu__["a" /* default */]);

//根据权限进行菜单过滤
var permission = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.permission;
var role = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.role;

var MenuChildren = Object.values(__WEBPACK_IMPORTED_MODULE_0__menu__["a" /* default */]);

//判断是否为超级管理员
if (role.indexOf('super_admin') === -1) {
    for (var k in MenuChildren) {
        if (MenuChildren[k].children != undefined) {
            for (var v in MenuChildren[k].children) {
                //判断是否需要过滤权限
                if (MenuChildren[k].children[v].isPer === true) {
                    //过滤权限
                    if (permission.indexOf(v) === -1) {
                        delete MenuChildren[k].children[v];
                    }
                }
            }
        }
    }
}

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
    name: '首页',
    path: '/admin',
    icon: 'fa fa-tachometer'
};

/**
 * 权限管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.permission_manage = {
    name: '权限管理',
    icon: 'fa fa-qrcode',
    children: {}
};
var PermissionManage = menu.permission_manage.children;

PermissionManage.role = {
    name: '角色管理',
    icon: 'fa fa-users',
    path: '/admin/role_manage',
    isPer: true
};

PermissionManage.permissions = {
    name: '权限列表',
    icon: 'fa fa-unlock-alt',
    path: '/admin/permission_manage',
    isPer: true
};

/**
 * 用户管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.user_manage = {
    name: '用户模块',
    icon: 'fa fa-user-o',
    children: {}
};
var UserManage = menu.user_manage.children;

UserManage.user = {
    name: '用户管理',
    icon: 'fa fa-user',
    path: '/admin/user_manage',
    isPer: true
};

UserManage.personal = {
    name: '个人中心',
    icon: 'fa fa-cog',
    path: '/admin/personal',
    isPer: false
};

/**
 * 系统配置
 * @type {{name: string, path: string, icon: string}}
 */
menu.system_manage = {
    name: '系统配置',
    icon: 'fa fa-cog',
    children: {}
};

var SystemManage = menu.system_manage.children;

SystemManage.config = {
    name: '配置信息',
    icon: 'fa fa-tasks',
    path: '/admin/config_manage',
    isPer: true
};

/* harmony default export */ __webpack_exports__["a"] = (menu);

if (true) {

    menu.development_tools = {
        name: '开发工具',
        icon: 'fa fa-wrench',
        children: {}
    };

    var DevelopmentTools = menu.development_tools.children;

    DevelopmentTools.code = {
        name: '构建代码',
        path: '/admin/build_code',
        isPer: true
    };
}

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "header" }, [
      _c("div", { staticClass: "logo" }, [
        _c("span", { staticClass: "big" }, [
          _vm._v(_vm._s(_vm.$Config.siteName))
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "header-btn", on: { click: _vm.hiddenSidebar } },
        [_c("i", { staticClass: "el-icon-menu" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "right" },
        [
          _c(
            "span",
            { staticClass: "header-btn", on: { click: _vm.screenfullToggle } },
            [_c("i", { staticClass: "fa fa-arrows-alt" })]
          ),
          _vm._v(" "),
          _c(
            "el-dropdown",
            [
              _c("span", { staticClass: "header-btn" }, [
                _c("i", { staticClass: "el-icon-setting" })
              ]),
              _vm._v(" "),
              _c(
                "el-dropdown-menu",
                { attrs: { slot: "dropdown" }, slot: "dropdown" },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        padding: "10px",
                        "text-align": "center",
                        width: "420px"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "setting-category" },
                        [
                          _c("el-switch", {
                            attrs: {
                              "active-text": "开启TabBar",
                              "inactive-text": "关闭TabBar"
                            },
                            on: { change: _vm.saveSwitchTabBarVal },
                            model: {
                              value: _vm.switchTabBar,
                              callback: function($$v) {
                                _vm.switchTabBar = $$v
                              },
                              expression: "switchTabBar"
                            }
                          }),
                          _vm._v(" "),
                          _vm.switchTabBar
                            ? _c("el-switch", {
                                staticStyle: { "margin-top": "10px" },
                                attrs: {
                                  "active-text": "固定在顶部",
                                  "inactive-text": "随页面滚动"
                                },
                                on: { change: _vm.saveFixedTabBar },
                                model: {
                                  value: _vm.fixedTabBar,
                                  callback: function($$v) {
                                    _vm.fixedTabBar = $$v
                                  },
                                  expression: "fixedTabBar"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.switchTabBar
                            ? _c("el-alert", {
                                staticStyle: { "margin-top": "10px" },
                                attrs: {
                                  title:
                                    "导航标签超过容器时,可在导航上滚动鼠标来移动标签",
                                  type: "info",
                                  "show-icon": ""
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "setting-category",
                          staticStyle: {
                            display: "flex",
                            height: "80px",
                            "align-items": "center"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticStyle: { width: "80px" } },
                            [
                              _c("el-button", {
                                staticStyle: { transform: "rotate(90deg)" },
                                attrs: {
                                  type: "primary",
                                  icon: "el-icon-sort",
                                  circle: ""
                                },
                                on: { click: _vm.ToggleGrayMode }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: { flex: "1", "margin-top": "-8px" }
                            },
                            [
                              _c("el-alert", {
                                staticStyle: { "margin-top": "10px" },
                                attrs: {
                                  title: "切换灰度模式!",
                                  type: "info",
                                  "show-icon": ""
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "header-btn" },
            [
              _c("el-badge", { staticClass: "badge", attrs: { value: 3 } }, [
                _c("i", { staticClass: "el-icon-bell" })
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-dropdown",
            [
              _c("span", { staticClass: "header-btn" }, [
                _vm._v("\n            " + _vm._s(_vm.username)),
                _c("i", { staticClass: "el-icon-arrow-down el-icon--right" })
              ]),
              _vm._v(" "),
              _c(
                "el-dropdown-menu",
                { attrs: { slot: "dropdown" }, slot: "dropdown" },
                [
                  _c(
                    "el-dropdown-item",
                    {
                      nativeOn: {
                        click: function($event) {
                          _vm.$router.push("/admin/personal")
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-cog",
                        staticStyle: { "padding-right": "8px" }
                      }),
                      _vm._v("个人中心")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-dropdown-item",
                    {
                      nativeOn: {
                        click: function($event) {
                          return _vm.logout($event)
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-key",
                        staticStyle: { "padding-right": "8px" }
                      }),
                      _vm._v("退出系统")
                    ]
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "app" }, [
      _c("div", { staticClass: "aside" }, [
        _c(
          "div",
          { staticClass: "menu" },
          [
            _c(
              "el-menu",
              {
                staticClass: "menu",
                attrs: {
                  router: "",
                  "background-color": "#222d32",
                  "text-color": "#fff",
                  "default-active": _vm.$route.path,
                  collapse: _vm.isCollapse
                },
                on: { open: _vm.handleOpen, close: _vm.handleClose }
              },
              [
                _vm._l(_vm.menu, function(menu_v, menu_k) {
                  return [
                    menu_v.children
                      ? _c(
                          "el-submenu",
                          { attrs: { index: menu_k } },
                          [
                            _c("template", { slot: "title" }, [
                              _c("i", { class: menu_v.icon }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { attrs: { slot: "title" }, slot: "title" },
                                [_vm._v(_vm._s(menu_v.name))]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._l(menu_v.children, function(
                              menuChildren_v,
                              menuChildren_k
                            ) {
                              return _c(
                                "el-menu-item",
                                {
                                  key: menuChildren_k,
                                  attrs: { index: menuChildren_v.path }
                                },
                                [
                                  _c("i", { class: menuChildren_v.icon }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { attrs: { slot: "title" }, slot: "title" },
                                    [_vm._v(_vm._s(menuChildren_v.name))]
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      : _c("el-menu-item", { attrs: { index: menu_v.path } }, [
                          _c("i", { class: menu_v.icon }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { attrs: { slot: "title" }, slot: "title" },
                            [_vm._v(_vm._s(menu_v.name))]
                          )
                        ])
                  ]
                })
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "sidebar-toggle", on: { click: _vm.sidebarToggle } },
          [_vm._m(1)]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-body" },
        [
          _vm.switchTabBar
            ? _c("NavBar", {
                style:
                  _vm.fixedTabBar && _vm.switchTabBar
                    ? "position: fixed;top: 0;"
                    : "",
                attrs: { id: "nav-bar" }
              })
            : _c("div", { staticStyle: { "margin-top": "50px" } }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "main-container",
              style:
                _vm.fixedTabBar && _vm.switchTabBar ? "margin-top: 88px;" : "",
              attrs: { id: "mainContainer" }
            },
            [_c("router-view")],
            1
          ),
          _vm._v(" "),
          _c("EuiFooter")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "min" }, [
      _c("img", {
        staticStyle: { "margin-top": "5px" },
        attrs: {
          width: "40",
          src: __webpack_require__(267),
          alt: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-left" }, [
      _c("i", { staticClass: "el-icon-back" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-57ea79db", module.exports)
  }
}

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "/images/logo.svg?a293f0f33124c33706c66ff9a28e0c62";

/***/ })

});