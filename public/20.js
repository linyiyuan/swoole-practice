webpackJsonp([20],{

/***/ 223:
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
Component.options.__file = "resources/js/views/home/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-97521e7e", Component.options)
  } else {
    hotAPI.reload("data-v-97521e7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(273);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(84)("7d99d924", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-97521e7e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-97521e7e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
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
exports.push([module.i, "\n.demo {\n  margin: 10px;\n}\n.demo .grid-content {\n  border-radius: 4px;\n  overflow: hidden;\n  color: #fff;\n  background: #d3dce6;\n}\n.demo .grid-content .index-icon {\n  font-size: 82px;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 274:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      radio: '',
      elRate: 2,
      selectedOptions: [],
      num: '',
      dateVal: '',
      checkList: ['选中且禁用', '复选框 A'],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }]
    };
  },

  methods: {
    open: function open() {
      var _this = this;

      console.log(this.$store.state.username);
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: function callback(action) {
          _this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
        }
      });
    }
  },
  mounted: function mounted() {}
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
    [
      _c("el-card", { staticStyle: { "border-radius": "0" } }, [
        _c("div", { attrs: { slot: "header" }, slot: "header" }, [
          _c("span", [_vm._v("概况")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "demo" },
          [
            _c(
              "el-row",
              { attrs: { gutter: 20 } },
              [
                _c("el-col", { attrs: { span: 6 } }, [
                  _c("div", { staticClass: "grid-content " }, [
                    _c(
                      "div",
                      {
                        staticStyle: { padding: "10px", background: "#673AB7" }
                      },
                      [
                        _c("i", {
                          staticClass: "el-icon-location-outline index-icon"
                        }),
                        _vm._v(
                          "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("el-col", { attrs: { span: 6 } }, [
                  _c("div", { staticClass: "grid-content " }, [
                    _c(
                      "div",
                      {
                        staticStyle: { padding: "10px", background: "#3c8dbc" }
                      },
                      [
                        _c("i", { staticClass: "el-icon-picture index-icon" }),
                        _vm._v(
                          "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("el-col", { attrs: { span: 6 } }, [
                  _c("div", { staticClass: "grid-content " }, [
                    _c(
                      "div",
                      {
                        staticStyle: { padding: "10px", background: "#009688" }
                      },
                      [
                        _c("i", { staticClass: "el-icon-service index-icon" }),
                        _vm._v(
                          "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!\n            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("el-col", { attrs: { span: 6 } }, [
                  _c("div", { staticClass: "grid-content " }, [
                    _c(
                      "div",
                      {
                        staticStyle: { padding: "10px", background: "#607D8B" }
                      },
                      [
                        _c("i", { staticClass: "el-icon-bell index-icon" }),
                        _vm._v(
                          "\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!\n            "
                        )
                      ]
                    )
                  ])
                ])
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "el-card",
        { staticStyle: { "border-radius": "0" } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("span", [_vm._v("Element ui组件")])
          ]),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: 14 } },
                [
                  _c("el-cascader", {
                    attrs: { "expand-trigger": "hover", options: _vm.options },
                    model: {
                      value: _vm.selectedOptions,
                      callback: function($$v) {
                        _vm.selectedOptions = $$v
                      },
                      expression: "selectedOptions"
                    }
                  }),
                  _vm._v(" "),
                  _c("el-date-picker", {
                    attrs: { type: "date", placeholder: "选择日期" },
                    model: {
                      value: _vm.dateVal,
                      callback: function($$v) {
                        _vm.dateVal = $$v
                      },
                      expression: "dateVal"
                    }
                  }),
                  _vm._v(" "),
                  _c("el-input-number", {
                    attrs: { min: 1, max: 10, label: "计数器max=10,min=1" },
                    model: {
                      value: _vm.num,
                      callback: function($$v) {
                        _vm.num = $$v
                      },
                      expression: "num"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { display: "inline-block" } },
                    [
                      _c("el-rate", {
                        attrs: {
                          "show-score": "",
                          colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
                        },
                        model: {
                          value: _vm.elRate,
                          callback: function($$v) {
                            _vm.elRate = $$v
                          },
                          expression: "elRate"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "margin-left": "40px",
                        display: "inline-block"
                      }
                    },
                    [
                      _c(
                        "el-radio",
                        {
                          attrs: { label: "1" },
                          model: {
                            value: _vm.radio,
                            callback: function($$v) {
                              _vm.radio = $$v
                            },
                            expression: "radio"
                          }
                        },
                        [_vm._v("备选项")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-radio",
                        {
                          attrs: { label: "2" },
                          model: {
                            value: _vm.radio,
                            callback: function($$v) {
                              _vm.radio = $$v
                            },
                            expression: "radio"
                          }
                        },
                        [_vm._v("备选项")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { display: "inline-block" } },
                    [
                      _c(
                        "el-steps",
                        { attrs: { active: 2 } },
                        [
                          _c("el-step", {
                            attrs: {
                              title: "步骤 1",
                              description: "这是一段很长很长很长的描述性文字"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-step", {
                            attrs: {
                              title: "步骤 2",
                              description: "这是一段很长很长很长的描述性文字"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-step", {
                            attrs: {
                              title: "步骤 3",
                              description: "这段就没那么长了"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-pagination", {
                    staticStyle: { display: "inline-block" },
                    attrs: {
                      background: "",
                      layout: "prev, pager, next",
                      total: 100
                    }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "el-checkbox-group",
                    {
                      model: {
                        value: _vm.checkList,
                        callback: function($$v) {
                          _vm.checkList = $$v
                        },
                        expression: "checkList"
                      }
                    },
                    [
                      _c("el-checkbox", { attrs: { label: "复选框 A" } }),
                      _vm._v(" "),
                      _c("el-checkbox", { attrs: { label: "复选框 B" } }),
                      _vm._v(" "),
                      _c("el-checkbox", { attrs: { label: "复选框 C" } }),
                      _vm._v(" "),
                      _c("el-checkbox", {
                        attrs: { label: "禁用", disabled: "" }
                      }),
                      _vm._v(" "),
                      _c("el-checkbox", {
                        attrs: { label: "选中且禁用", disabled: "" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 10 } }, [
                _c(
                  "div",
                  [
                    _c("el-button", {
                      attrs: { icon: "el-icon-search", circle: "" }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        type: "primary",
                        icon: "el-icon-edit",
                        circle: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        type: "success",
                        icon: "el-icon-check",
                        circle: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        type: "info",
                        icon: "el-icon-message",
                        circle: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        type: "warning",
                        icon: "el-icon-star-off",
                        circle: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        type: "danger",
                        icon: "el-icon-delete",
                        circle: ""
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticStyle: { "margin-top": "40px" } },
                  [
                    _c(
                      "el-button",
                      {
                        on: {
                          click: function($event) {
                            _vm.open()
                          }
                        }
                      },
                      [_vm._v("默认按钮")]
                    ),
                    _vm._v(" "),
                    _c("el-button", { attrs: { type: "primary" } }, [
                      _vm._v("主要按钮")
                    ]),
                    _vm._v(" "),
                    _c("el-button", { attrs: { type: "success" } }, [
                      _vm._v("成功按钮")
                    ]),
                    _vm._v(" "),
                    _c("el-button", { attrs: { type: "info" } }, [
                      _vm._v("信息按钮")
                    ]),
                    _vm._v(" "),
                    _c("el-button", { attrs: { type: "warning" } }, [
                      _vm._v("警告按钮")
                    ]),
                    _vm._v(" "),
                    _c("el-button", { attrs: { type: "danger" } }, [
                      _vm._v("危险按钮")
                    ])
                  ],
                  1
                )
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
    require("vue-hot-reload-api")      .rerender("data-v-97521e7e", module.exports)
  }
}

/***/ })

});