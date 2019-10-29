webpackJsonp([11],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(272)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(274)
/* template */
var __vue_template__ = __webpack_require__(280)
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
Component.options.__file = "resources/js/views/userManage/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e9c6b1c", Component.options)
  } else {
    hotAPI.reload("data-v-3e9c6b1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(230)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(232)
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
Component.options.__file = "resources/js/components/ToolBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b21dd180", Component.options)
  } else {
    hotAPI.reload("data-v-b21dd180", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("15854828", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b21dd180\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ToolBar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b21dd180\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ToolBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.toolbar {\n  width: 100%;\n  padding: 8px;\n  background-color: #ffffff;\n  overflow: hidden;\n  line-height: 32px;\n  border: 1px solid #e6ebf5;\n}\n", ""]);

// exports


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "toolbar" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b21dd180", module.exports)
  }
}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(234)
/* template */
var __vue_template__ = __webpack_require__(235)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/js/components/HelpHint.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dcf88a5a", Component.options)
  } else {
    hotAPI.reload("data-v-dcf88a5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 234:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HelpHint',
  props: {
    placement: {
      default: 'top'
    },
    content: String
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _c(
        "span",
        { staticStyle: { "margin-right": "8px" } },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "el-tooltip",
        { attrs: { content: _vm.content, placement: _vm.placement } },
        [
          _c("i", {
            staticClass: "el-icon-question",
            staticStyle: { cursor: "pointer" }
          })
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-dcf88a5a", module.exports)
  }
}

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(237)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(239)
/* template */
var __vue_template__ = __webpack_require__(240)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75d45e62"
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
Component.options.__file = "resources/js/components/Paginate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75d45e62", Component.options)
  } else {
    hotAPI.reload("data-v-75d45e62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("710c9d6c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75d45e62\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Paginate.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75d45e62\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Paginate.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-75d45e62] {\n  padding: 7px;\n  border: 1px solid #ebeef5;\n  background: #fff;\n  text-align: right;\n}\n.total[data-v-75d45e62] {\n  float: left;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-size: 13px;\n  color: #606266;\n}\n", ""]);

// exports


/***/ }),

/***/ 239:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Paginate',
    props: {
        api: String,
        params: Object,
        refresh: Boolean
    },
    data: function data() {
        return {
            total: 0,
            current: 0,
            currentDataLength: 0
        };
    },

    methods: {
        paginate: function paginate() {
            var pageChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var params = this.params;

            if (pageChange == false) {
                params.pageSize = this.$Config.pageSize;
            } else {
                params.pageSize = pageChange;
            }
            params.pageCode = this.current;
            var thisApp = this;
            thisApp.$Api[thisApp.api]({ params: params }, function (c) {
                if (c.code == 200) {
                    var data = c.data;
                    thisApp.total = data.total;
                    thisApp.currentDataLength = data.list.length;
                    thisApp.$emit('val-change', data.list);
                } else {
                    thisApp.$notify({
                        title: c.data,
                        message: '获取数据失败',
                        type: 'error'
                    });
                    thisApp.$emit('val-change', []);
                }
            });
        },
        change: function change(page) {
            this.current = page;
            this.paginate();
        },

        sizeChange: function sizeChange(pageSize) {
            console.log(pageSize);
            this.paginate(pageSize);
        }
    },
    watch: {

        'refresh': {
            handler: function handler() {
                this.current = 0;
                this.paginate();
            },
            // 深度观察
            deep: true
        }
    },
    mounted: function mounted() {
        this.paginate();
    }
});

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pagination" },
    [
      _c("div", { staticClass: "total" }, [
        _vm._v(
          "共" +
            _vm._s(_vm.total) +
            "条数据,当页有" +
            _vm._s(_vm.currentDataLength) +
            "条数据。"
        )
      ]),
      _vm._v(" "),
      _c("el-pagination", {
        attrs: {
          background: "",
          layout: "sizes, prev, pager, next, jumper",
          "page-sizes": _vm.$Config.pageSizes,
          "page-size": _vm.$Config.pageSize,
          total: _vm.total
        },
        on: { "size-change": _vm.sizeChange, "current-change": _vm.change }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-75d45e62", module.exports)
  }
}

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(273);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("e93c8048", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e9c6b1c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e9c6b1c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Paginate_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Paginate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Paginate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserEdit__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__UserEdit__);
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
            userEditTitle: '角色编辑',
            currentEditUser: false,
            dialogFormVisible: false,
            currentEditPermissions: false,
            params: {
                search: []
            },
            usersData: [],
            roleData: [],
            refresh: false,
            loading: true
        };
    },

    methods: {
        searchUser: function searchUser() {
            var tableRow = this.$refs.table.$el.querySelectorAll('tbody tr');
            var tableRowHeight = tableRow[1].offsetHeight;
            var isjump = false;
            for (var i = 0; i < this.usersData.length; i++) {
                if (this.params.name && this.usersData[i].username.indexOf(this.params.name) != -1) {
                    tableRow[i].style.backgroundColor = '#85ce61';
                    if (!isjump) {
                        scrollTo(0, i * tableRowHeight + 66);
                        isjump = true;
                    }
                } else {
                    tableRow[i].style.backgroundColor = '#fff';
                }
            }
        },
        editUser: function editUser(data) {
            if (data) {
                data.actived = data.actived.toString();
                this.currentEditUser = data;
            } else {
                this.currentEditUser = false;
            }
            this.dialogFormVisible = true;
        },
        userEditChange: function userEditChange(data) {
            var _this = this;

            var self = this;
            if (this.currentEditUser === false) {
                self.$Api.addUser({ params: data }, function (c) {
                    if (c.code == 200) {
                        _this.dialogFormVisible = false;
                        _this.refresh = !_this.refresh;
                        self.$notify({
                            title: self.userEditTitle + '成功！',
                            message: '添加成功',
                            type: 'success'
                        });
                    } else {
                        self.$notify({
                            title: self.userEditTitle + '失败！',
                            message: c.data,
                            type: 'error'
                        });
                    }
                });
            } else {
                self.$Api.updateUser(data, function (c) {
                    if (c.code == 200) {
                        _this.dialogFormVisible = false;
                        _this.refresh = !_this.refresh;
                        self.$notify({
                            title: self.userEditTitle + '成功！',
                            message: c.data,
                            type: 'success'
                        });
                    } else {
                        self.$notify({
                            title: self.userEditTitle + '失败！',
                            message: c.data,
                            type: 'error'
                        });
                    }
                });
            }
        },
        UploadUser: function UploadUser(data) {},
        deleteUser: function deleteUser(id) {
            var _this2 = this;

            var APP = this;

            this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                APP.$Api.deleteUser({ id: id }, function (c) {
                    if (c.code == 200) {
                        APP.refresh = !APP.refresh;
                        _this2.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    } else {
                        _this2.$message({
                            type: 'error',
                            message: c.data
                        });
                    }
                });
            }).catch(function () {
                _this2.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        PaginateData: function PaginateData(list) {
            this.usersData = list;
            this.loading = false;
        }
    },
    mounted: function mounted() {
        var APP = this;
        //获取角色数据
        APP.$Api.getRoleList({}, function (c) {
            if (c.code == 200) {
                APP.roleData = c.data;
            } else {
                APP.$notify({
                    title: '请求角色列表失败',
                    message: c.data,
                    type: 'error'
                });
            }
        });
    },
    components: {
        ToolBar: __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue___default.a, HelpHint: __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue___default.a, UserEdit: __WEBPACK_IMPORTED_MODULE_3__UserEdit___default.a, Paginate: __WEBPACK_IMPORTED_MODULE_2__components_Paginate_vue___default.a
    }
});

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(276)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(278)
/* template */
var __vue_template__ = __webpack_require__(279)
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
Component.options.__file = "resources/js/views/userManage/UserEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12a45b85", Component.options)
  } else {
    hotAPI.reload("data-v-12a45b85", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("42c956f4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12a45b85\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserEdit.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12a45b85\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 278:
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
    name: 'UserEdit',
    props: {
        dialogFormVisible: Boolean,
        data: [Object, Boolean],
        title: String,
        roleData: Array
    },
    data: function data() {

        return {
            form: {
                id: null,
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
                avatar: '',
                actived: '1',
                roleData: []
            },
            btnLoading: false,

            jwt: { Authorization: 'Bearer' + ' ' + sessionStorage.getItem(this.$Config.tokenKey) },

            //前端验证规则
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 4, max: 18, message: '用户名4-18位', trigger: 'blur' }],
                roleData: [{ required: true, message: '请至少选择一个角色', trigger: 'blur' }],
                email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }, { type: 'email', message: '请输入正确邮箱格式', trigger: 'blur' }]
            }
        };
    },

    watch: {
        'data': {
            handler: function handler() {
                if (this.data) {
                    for (var k in this.form) {
                        this.form[k] = this.data[k];
                    }
                } else {
                    for (var _k in this.form) {
                        this.form[_k] = '';
                    }
                }
            },
            deep: true
        }
    },
    methods: {
        handleChange: function handleChange() {},
        btnOk: function btnOk(form) {
            var _this = this;

            var APP = this;

            //表单验证
            APP.$refs[form].validate(function (valid) {
                if (valid) {
                    var formData = _this.form;

                    // console.log(formData);return;
                    //调用父组件的方法
                    _this.$emit('val-change', formData);

                    _this.btnLoading = true;
                    setTimeout(function () {
                        _this.btnLoading = false;
                        APP.$refs[form].clearValidate();
                    }, 1000);
                } else {
                    return false;
                }
            });
        },

        //上传图片成功回调
        handleAvatarSuccess: function handleAvatarSuccess(res, file) {
            if (res.code == 200) {
                this.form.avatar = res.data;
            } else {
                this.$message.error(res.data);
            }
        },

        //上传图片前验证
        beforeAvatarUpload: function beforeAvatarUpload(file) {
            var isJPG = file.type === 'image/jpeg';
            var isPNG = file.type === 'image/png';
            var isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG && !isPNG) {
                this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG | isPNG && isLt2M;
        }
    },
    components: {}
});

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "role-dialog" },
    [
      _c(
        "el-dialog",
        {
          attrs: {
            title: _vm.title,
            visible: _vm.dialogFormVisible,
            "show-close": false,
            width: "35%"
          }
        },
        [
          _c(
            "el-form",
            {
              ref: "form",
              attrs: { model: _vm.form, rules: _vm.rules, "status-icon": "" }
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "用户名称", prop: "username" } },
                [
                  _c("el-input", {
                    staticStyle: { width: "400px" },
                    attrs: {
                      "auto-complete": "off",
                      placeholder: "请输入用户名"
                    },
                    model: {
                      value: _vm.form.username,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "username", $$v)
                      },
                      expression: "form.username"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "用户邮箱", prop: "email" } },
                [
                  _c("el-input", {
                    staticStyle: { width: "400px" },
                    attrs: {
                      "auto-complete": "off",
                      placeholder: "请输入邮箱"
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "用户密码", prop: "password" } },
                [
                  _c("el-input", {
                    staticStyle: { width: "400px" },
                    attrs: {
                      "auto-complete": "off",
                      placeholder: "请输入密码",
                      type: "password"
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "确定密码", prop: "password_confirmation" } },
                [
                  _c("el-input", {
                    staticStyle: { width: "400px" },
                    attrs: {
                      "auto-complete": "off",
                      placeholder: "请再次输入密码",
                      type: "password"
                    },
                    model: {
                      value: _vm.form.password_confirmation,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password_confirmation", $$v)
                      },
                      expression: "form.password_confirmation"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "角色选择", prop: "roleData" } },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "400px" },
                      attrs: {
                        multiple: "",
                        placeholder: "请选择角色",
                        filterable: ""
                      },
                      model: {
                        value: _vm.form.roleData,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "roleData", $$v)
                        },
                        expression: "form.roleData"
                      }
                    },
                    _vm._l(_vm.roleData, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.name, value: item.name }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "状态选择" } },
                [
                  _c(
                    "el-radio",
                    {
                      attrs: { label: "1", border: "" },
                      model: {
                        value: _vm.form.actived,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "actived", $$v)
                        },
                        expression: "form.actived"
                      }
                    },
                    [_vm._v("激活")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-radio",
                    {
                      attrs: { label: "2", border: "" },
                      model: {
                        value: _vm.form.actived,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "actived", $$v)
                        },
                        expression: "form.actived"
                      }
                    },
                    [_vm._v("禁用")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "用户头像" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: "http://web.shop.com:81/api/common/uploadPic",
                        "show-file-list": false,
                        headers: _vm.jwt,
                        name: "file",
                        "on-success": _vm.handleAvatarSuccess,
                        "before-upload": _vm.beforeAvatarUpload
                      }
                    },
                    [
                      _vm.form.avatar
                        ? _c("img", {
                            staticClass: "avatar",
                            attrs: { src: _vm.form.avatar }
                          })
                        : _c("i", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                          })
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.$emit("cancel")
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary", loading: _vm.btnLoading },
                  on: {
                    click: function($event) {
                      _vm.btnOk("form")
                    }
                  }
                },
                [_vm._v("确 定")]
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12a45b85", module.exports)
  }
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "user-list" },
    [
      _c(
        "ToolBar",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary", icon: "el-icon-plus", size: "small" },
              on: {
                click: function($event) {
                  _vm.editUser(false)
                }
              }
            },
            [_vm._v("添加")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { float: "right" } },
            [
              _c("el-input", {
                staticStyle: { width: "140px" },
                attrs: {
                  placeholder: "请输入用户昵称！",
                  size: "small",
                  clearable: ""
                },
                on: { clear: _vm.searchUser },
                model: {
                  value: _vm.params.name,
                  callback: function($$v) {
                    _vm.$set(_vm.params, "name", $$v)
                  },
                  expression: "params.name"
                }
              }),
              _vm._v(" "),
              _c("el-button", {
                attrs: {
                  type: "success",
                  icon: "el-icon-search",
                  size: "small"
                },
                on: { click: _vm.searchUser }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          ref: "table",
          staticStyle: { width: "100%" },
          attrs: {
            data: _vm.usersData,
            "element-loading-text": "拼命加载中",
            "element-loading-spinner": "el-icon-loading",
            border: ""
          }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "username", label: "用户名", width: "200" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "用户头像", width: "80" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _c("img", {
                    attrs: {
                      src: scope.row.avatar,
                      alt: "",
                      width: "60px",
                      height: "60px"
                    }
                  })
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "email", label: "邮箱", width: "300" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "role", label: "角色" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return scope.row.roles
                    ? _c(
                        "div",
                        {
                          staticStyle: { width: "100%", "text-align": "center" }
                        },
                        _vm._l(scope.row.roles, function(val, key) {
                          return _c(
                            "el-tag",
                            {
                              key: key,
                              staticStyle: { "margin-right": "10px" }
                            },
                            [_vm._v(_vm._s(val.name) + "\n                ")]
                          )
                        })
                      )
                    : _vm._e()
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "actived", width: "100", label: "状态" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return _c(
                    "div",
                    { staticStyle: { width: "100%", "text-align": "center" } },
                    [
                      scope.row.actived == 1
                        ? _c("el-tag", { attrs: { type: "success" } }, [
                            _vm._v("正常")
                          ])
                        : scope.row.actived == 2
                        ? _c("el-tag", { attrs: { type: "danger" } }, [
                            _vm._v("禁用")
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "created_at", label: "创建时间" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.username != _vm.$store.state.username
                      ? _c("el-button", {
                          attrs: {
                            type: "primary",
                            icon: "el-icon-edit",
                            size: "small",
                            circle: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.editUser(scope.row)
                            }
                          }
                        })
                      : _c("el-button", {
                          attrs: {
                            type: "primary",
                            icon: "el-icon-edit",
                            size: "small",
                            circle: "",
                            disabled: ""
                          }
                        }),
                    _vm._v(" "),
                    scope.row.username != _vm.$store.state.username
                      ? _c("el-button", {
                          attrs: {
                            type: "danger",
                            icon: "el-icon-delete",
                            circle: "",
                            size: "small"
                          },
                          on: {
                            click: function($event) {
                              _vm.deleteUser(scope.row.id)
                            }
                          }
                        })
                      : _c("el-button", {
                          attrs: {
                            icon: "el-icon-delete",
                            circle: "",
                            size: "small",
                            disabled: "",
                            type: "danger"
                          }
                        })
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("UserEdit", {
        attrs: {
          title: _vm.userEditTitle,
          dialogFormVisible: _vm.dialogFormVisible,
          data: _vm.currentEditUser,
          roleData: _vm.roleData
        },
        on: {
          "val-change": _vm.userEditChange,
          cancel: function($event) {
            _vm.dialogFormVisible = false
          }
        }
      }),
      _vm._v(" "),
      _c("Paginate", {
        attrs: { api: "getUserList", params: _vm.params, refresh: _vm.refresh },
        on: { "val-change": _vm.PaginateData }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-3e9c6b1c", module.exports)
  }
}

/***/ })

});