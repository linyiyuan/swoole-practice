webpackJsonp([9],{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(281)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(283)
/* template */
var __vue_template__ = __webpack_require__(294)
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
Component.options.__file = "resources/js/views/permissionManage/role/Role.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1db66da", Component.options)
  } else {
    hotAPI.reload("data-v-c1db66da", Component.options)
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

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(282);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("633a0164", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c1db66da\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Role.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c1db66da\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Role.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Paginate_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Paginate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Paginate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RoleEdit_vue__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RoleEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__RoleEdit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PermissionsEdit_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PermissionsEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__PermissionsEdit_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            roleEditTitle: '角色编辑',
            currentEditRole: false,
            dialogFormVisible: false,
            currentEditPermissions: false,
            params: {
                search: []
            },
            refresh: false,
            roleData: [],
            loading: true
        };
    },
    mounted: function mounted() {
        // 调用请求数据的方法
        // this.getData()
    },

    methods: {
        PaginateData: function PaginateData(list) {
            this.roleData = list;
            this.loading = false;
        },
        searchRole: function searchRole() {
            var tableRow = this.$refs.table.$el.querySelectorAll('tbody tr');
            var tableRowHeight = tableRow[1].offsetHeight;
            var isjump = false;
            for (var i = 0; i < this.roleData.length; i++) {
                if (this.params.name && this.roleData[i].name.indexOf(this.params.name) != -1) {
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
        tableAction: function tableAction() {
            return this.$createElement('HelpHint', {
                props: {
                    content: '编辑角色 / 编辑角色权限 / 删除角色'
                }
            }, '操作');
        },
        roleEditChange: function roleEditChange(data) {
            var _this = this;

            var self = this;
            if (this.currentEditRole === false) {
                self.$Api.addRole({ name: data.name, description: data.description }, function (c) {
                    if (c.code == 200) {
                        _this.dialogFormVisible = false;
                        _this.refresh = !_this.refresh;
                        self.$notify({
                            title: self.roleEditTitle + '成功！',
                            message: '添加成功',
                            type: 'success'
                        });
                    } else {
                        self.$notify({
                            title: self.roleEditTitle + '失败！',
                            message: '添加失败',
                            type: 'error'
                        });
                    }
                });
            } else {
                self.$Api.updateRole({ id: data.id, name: data.name, description: data.description }, function (c) {
                    if (c.code == 200) {
                        _this.dialogFormVisible = false;
                        _this.refresh = !_this.refresh;
                        self.$notify({
                            title: self.roleEditTitle + '成功！',
                            message: '修改成功',
                            type: 'success'
                        });
                    } else {
                        self.$notify({
                            title: self.roleEditTitle + '失败！',
                            message: '修改失败',
                            type: 'error'
                        });
                    }
                });
            }
        },
        editRole: function editRole(data) {
            if (data) {
                this.currentEditRole = data;
            } else {
                this.currentEditRole = false;
            }

            this.dialogFormVisible = true;
        },
        deleteRole: function deleteRole(id) {
            var _this2 = this;

            this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this2.$Api.deleteRole({ id: id }, function (c) {
                    if (c.code == 200) {
                        _this2.refresh = !_this2.refresh;
                        _this2.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    } else {
                        _this2.$message({
                            type: 'danger',
                            message: '删除失败!'
                        });
                    }
                });
            }).catch(function () {
                _this2.$message({
                    type: 'error',
                    message: '已取消删除'
                });
            });
        },
        resetting: function resetting(id) {

            var dom = this.$refs[id].$el;
            dom.style.transform = 'rotate(180deg)';
            setTimeout(function () {
                dom.style.transform = 'rotate(0deg)';
            }, 600);
            this.$message({
                message: '已经成功重置密码',
                type: 'success'
            });
        }
    },
    components: {
        ToolBar: __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue___default.a, HelpHint: __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue___default.a, RoleEdit: __WEBPACK_IMPORTED_MODULE_3__RoleEdit_vue___default.a, PermissionsEdit: __WEBPACK_IMPORTED_MODULE_4__PermissionsEdit_vue___default.a, Paginate: __WEBPACK_IMPORTED_MODULE_2__components_Paginate_vue___default.a
    }
});

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(285)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(287)
/* template */
var __vue_template__ = __webpack_require__(288)
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
Component.options.__file = "resources/js/views/permissionManage/role/RoleEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2c2d786", Component.options)
  } else {
    hotAPI.reload("data-v-f2c2d786", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("1374a716", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2c2d786\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoleEdit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2c2d786\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoleEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 287:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RoleEdit',
  props: {
    dialogFormVisible: Boolean,
    data: [Object, Boolean],
    title: String
  },
  data: function data() {
    return {
      form: {
        id: null,
        name: '',
        description: ''
      },
      btnLoading: false
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
    btnOk: function btnOk() {
      var _this = this;

      var errorMsg = false;
      var formData = this.form;

      if (formData.name.length <= 2) errorMsg = '角色名称必须大于2个字符';

      if (errorMsg) {
        this.$message.error(errorMsg);
        return;
      }
      this.$emit('val-change', this.form);
      this.btnLoading = true;
      setTimeout(function () {
        _this.btnLoading = false;
      }, 1000);
    }
  },
  components: {}
});

/***/ }),

/***/ 288:
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
            width: "45%"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.form } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "角色名称" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "角色描述" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 3,
                      placeholder: "请输入角色描述"
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
                    }
                  })
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
                  on: { click: _vm.btnOk }
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
    require("vue-hot-reload-api")      .rerender("data-v-f2c2d786", module.exports)
  }
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(83)
/* script */
var __vue_script__ = __webpack_require__(292)
/* template */
var __vue_template__ = __webpack_require__(293)
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
Component.options.__file = "resources/js/views/permissionManage/role/PermissionsEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47bfc6a1", Component.options)
  } else {
    hotAPI.reload("data-v-47bfc6a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("d7a00f56", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47bfc6a1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PermissionsEdit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47bfc6a1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PermissionsEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 292:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'PermissionsEdit',
    props: {
        role: [Object, Boolean]

    },
    data: function data() {
        return {
            dialogFormVisible: false,
            btnLoading: false,
            allPermissions: [],
            searchPermissionsDisplayName: '',
            multipleSelection: [],
            group: [],
            params: {
                search: []
            }
        };
    },

    watch: {
        'role': {
            handler: function handler() {
                var _this = this;

                var self = this;
                if (!self.role) return;
                self.dialogFormVisible = true;

                // //获取当前角色的权限并勾选在权限表里
                this.$nextTick(function () {
                    _this.$refs.permissionsTable.clearSelection();
                    _this.role.allPermissions.forEach(function (selectRoleId) {
                        // console.log(selectRoleId)
                        self.allPermissions.forEach(function (row) {
                            if (row.id == selectRoleId.id) self.$refs.permissionsTable.toggleRowSelection(row, true);
                        });
                    });
                });
            },
            deep: true
        },
        'searchPermissionsDisplayName': {
            handler: function handler() {
                this.searchPermissions();
            }

        }
    },
    methods: {
        changeFun: function changeFun(val) {
            this.multipleSelection = val;
        },
        searchPermissions: function searchPermissions() {
            var tableRow = this.$refs.permissionsTable.$el.querySelectorAll('tbody tr');
            var wrapperScrolling = this.$refs.permissionsTable.$el.getElementsByClassName('el-table__body-wrapper')[0];

            var tableRowHeight = tableRow[1].offsetHeight;
            var isjump = false;
            for (var i = 0; i < this.allPermissions.length; i++) {
                if (this.searchPermissionsDisplayName && this.allPermissions[i].name.indexOf(this.searchPermissionsDisplayName) != -1) {
                    tableRow[i].style.backgroundColor = '#85ce61';
                    if (!isjump) {
                        wrapperScrolling.scrollTo(0, i * tableRowHeight);
                        isjump = true;
                    }
                } else {
                    tableRow[i].style.backgroundColor = '#fff';
                }
            }
        },
        btnOk: function btnOk() {
            var _this2 = this;

            this.btnLoading = true;

            var self = this;
            var permissionsAllow = [];
            for (var i = 0; i < self.multipleSelection.length; i++) {
                permissionsAllow.push(self.multipleSelection[i].name);
            }

            self.$Api.AddRolePermission({ roleId: self.role.id, permissionsAllow: permissionsAllow }, function (c) {
                if (c.code == 200) {
                    self.$notify({
                        title: c.data,
                        message: '修改权限成功',
                        type: 'success'
                    });
                    _this2.btnLoading = false;
                    _this2.dialogFormVisible = false;
                    _this2.$refs.permissionsTable.clearSelection();
                    _this2.$emit('success');
                } else {
                    _this2.btnLoading = false;
                    self.$notify({
                        title: c.data,
                        message: '修改权限失败',
                        type: 'error'
                    });
                }
            });
        },
        getPermissions: function getPermissions() {
            var self = this;
            var params = self.params;
            params.pageSize = 10000;

            self.$Api.getPermissions({ params: params }, function (c) {
                if (c.code == 200) {
                    self.allPermissions = c.data.list.list;
                    self.group = c.data.list.group;
                } else {
                    self.$notify({
                        title: c.data,
                        message: '获取数据失败',
                        type: 'error'
                    });
                }
            });
        },
        filterGroup: function filterGroup(value, row) {
            return row.group_name === value;
        }
    },
    mounted: function mounted() {
        var self = this;

        self.getPermissions();
    },
    components: {}
});

/***/ }),

/***/ 293:
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
            title: "编辑“" + _vm.role.name + "”的权限",
            visible: _vm.dialogFormVisible,
            "show-close": false
          }
        },
        [
          _c(
            "el-table",
            {
              ref: "permissionsTable",
              staticStyle: { width: "100%" },
              attrs: { data: _vm.allPermissions, border: "", height: "500" },
              on: { "selection-change": _vm.changeFun }
            },
            [
              _c("el-table-column", {
                attrs: { type: "selection", width: "35" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "name", label: "权限名称" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "group_name",
                  label: "权限分组",
                  "filter-method": _vm.filterGroup,
                  filters: _vm.group
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "description", label: "权限描述" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return _c("div", {}, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              scope.row.description
                                ? scope.row.description
                                : "暂无描述"
                            ) +
                            "\n                "
                        )
                      ])
                    }
                  }
                ])
              })
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
                "div",
                { staticStyle: { float: "left" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "搜索权限名称", clearable: "" },
                    model: {
                      value: _vm.searchPermissionsDisplayName,
                      callback: function($$v) {
                        _vm.searchPermissionsDisplayName = $$v
                      },
                      expression: "searchPermissionsDisplayName"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      ;(_vm.dialogFormVisible = false), _vm.$emit("cancel")
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
                  on: { click: _vm.btnOk }
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
    require("vue-hot-reload-api")      .rerender("data-v-47bfc6a1", module.exports)
  }
}

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "role-list" },
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
                  _vm.editRole(false)
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
                  placeholder: "请输入角色名称！",
                  size: "small",
                  clearable: ""
                },
                on: { clear: _vm.searchRole },
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
                on: { click: _vm.searchRole }
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
            "element-loading-text": "拼命加载中",
            "element-loading-spinner": "el-icon-loading",
            data: _vm.roleData,
            border: "",
            height: "760",
            "default-sort": { prop: "date", order: "descending" }
          }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "id", label: "角色Id", sortable: "", width: "90" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "角色名称" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "description", label: "描述" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "created_at", sortable: "", label: "创建时间" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "updated_at", sortable: "", label: "修改时间" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "操作",
              "render-header": _vm.tableAction,
              width: "150"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("el-button", {
                      attrs: {
                        type: "primary",
                        icon: "el-icon-edit",
                        size: "small",
                        circle: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.editRole(scope.row)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        type: "success",
                        icon: "el-icon-setting",
                        size: "small",
                        circle: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.currentEditPermissions = scope.row
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        type: "danger",
                        icon: "el-icon-delete",
                        size: "small",
                        circle: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.deleteRole(scope.row.id)
                        }
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
      _c("RoleEdit", {
        attrs: {
          title: _vm.roleEditTitle,
          dialogFormVisible: _vm.dialogFormVisible,
          data: _vm.currentEditRole
        },
        on: {
          "val-change": _vm.roleEditChange,
          cancel: function($event) {
            _vm.dialogFormVisible = false
          }
        }
      }),
      _vm._v(" "),
      _c("PermissionsEdit", {
        attrs: { role: _vm.currentEditPermissions },
        on: {
          success: function($event) {
            _vm.refresh = !_vm.refresh
          },
          cancel: function($event) {
            _vm.currentEditPermissions = false
          }
        }
      }),
      _vm._v(" "),
      _c("Paginate", {
        attrs: { api: "getRole", params: _vm.params, refresh: _vm.refresh },
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
    require("vue-hot-reload-api")      .rerender("data-v-c1db66da", module.exports)
  }
}

/***/ })

});