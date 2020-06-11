(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../Desktop/project/BusinessApp/node_modules/babel-loader/lib/index.js?!../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/EmployeeList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/EDLACA/Desktop/project/BusinessApp/node_modules/babel-loader/lib??ref--4-0!C:/Users/EDLACA/Desktop/project/BusinessApp/node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/EmployeeList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../Desktop/project/BusinessApp/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'employee_list',
  data: function data() {
    return {
      employees: null
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/api/employees/');

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.employees = data.data; // console.log(this.employees)

              console.log('employee-list Component mounted.');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
});

/***/ }),

/***/ "../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/EmployeeList.vue?vue&type=template&id=bd3bffba&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/EDLACA/Desktop/project/BusinessApp/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/EDLACA/Desktop/project/BusinessApp/node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/EmployeeList.vue?vue&type=template&id=bd3bffba& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "employee" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "employee-list" },
      _vm._l(_vm.employees, function(employee, key) {
        return _c("li", { key: key, staticClass: "item" }, [
          _c("div", { staticClass: "profile" }, [
            _vm._m(1, true),
            _vm._v(" "),
            _c("img", {
              staticClass: "image",
              attrs: {
                src: "/assets/images/" + employee.profile_image,
                alt: "profile picture"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "basic-info" }, [
              _c("p", { staticClass: "name" }, [_vm._v(_vm._s(employee.name))]),
              _vm._v(" "),
              _c("span", { staticClass: "job-title" }, [
                _vm._v(_vm._s(employee.role))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "salary" }, [
            _c("p", { staticClass: "amount" }, [
              _c("span", [_vm._v(_vm._s(employee.salary) + "NOK")]),
              _vm._v(" "),
              employee.bonus && employee.bonus != "0"
                ? _c("span", { staticClass: "bonus" }, [
                    _vm._v(
                      "\n                        +" +
                        _vm._s(employee.bonus) +
                        "\n                    "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "position" }, [_vm._v("full time")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "period" }, [
            _c("p", [_vm._v("test period")]),
            _vm._v(" "),
            _c("span", { staticClass: "month" }, [
              _vm._v(_vm._s(employee.period) + " months")
            ])
          ]),
          _vm._v(" "),
          _vm._m(2, true)
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list-head" }, [
      _c("li"),
      _vm._v(" "),
      _c("li", [
        _c("input", {
          staticClass: "styled-checkbox",
          attrs: { type: "checkbox", id: "check-all" }
        }),
        _vm._v(" "),
        _c("label", { attrs: { for: "check-all" } })
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Employee "),
        _c("img", {
          attrs: { src: "/assets/images/arrow-up.png", alt: "filter-empoyee" }
        })
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Salary "),
        _c("img", {
          attrs: { src: "/assets/images/arrow-up.png", alt: "filter-salary" }
        })
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Status "),
        _c("img", {
          attrs: { src: "/assets/images/arrow-down.png", alt: "filter-status" }
        })
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("Manage")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "check" }, [
      _c("input", {
        staticClass: "styled-checkbox",
        attrs: { id: "checkbox-1", type: "checkbox" }
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "checkbox-1" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "manage" }, [
      _c("div", { staticClass: "wrap" }, [
        _c("a", { staticClass: "edit", attrs: { href: "#" } }, [
          _c("img", { attrs: { src: "/assets/images/edit.png", alt: "edit" } })
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "delete", attrs: { href: "#" } }, [
          _c("img", {
            attrs: { src: "/assets/images/delete.png", alt: "delete" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/EmployeeList.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/EmployeeList.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmployeeList_vue_vue_type_template_id_bd3bffba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeList.vue?vue&type=template&id=bd3bffba& */ "./resources/assets/js/components/EmployeeList.vue?vue&type=template&id=bd3bffba&");
/* harmony import */ var _EmployeeList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeList.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/EmployeeList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Desktop_project_BusinessApp_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_Desktop_project_BusinessApp_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmployeeList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeList_vue_vue_type_template_id_bd3bffba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmployeeList_vue_vue_type_template_id_bd3bffba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/EmployeeList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/EmployeeList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/EmployeeList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_project_BusinessApp_node_modules_babel_loader_lib_index_js_ref_4_0_Desktop_project_BusinessApp_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Desktop/project/BusinessApp/node_modules/babel-loader/lib??ref--4-0!../../../../../../Desktop/project/BusinessApp/node_modules/vue-loader/lib??vue-loader-options!./EmployeeList.vue?vue&type=script&lang=js& */ "../../Desktop/project/BusinessApp/node_modules/babel-loader/lib/index.js?!../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/EmployeeList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_Desktop_project_BusinessApp_node_modules_babel_loader_lib_index_js_ref_4_0_Desktop_project_BusinessApp_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/EmployeeList.vue?vue&type=template&id=bd3bffba&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/EmployeeList.vue?vue&type=template&id=bd3bffba& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_project_BusinessApp_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_project_BusinessApp_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeList_vue_vue_type_template_id_bd3bffba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Desktop/project/BusinessApp/node_modules/vue-loader/lib??vue-loader-options!./EmployeeList.vue?vue&type=template&id=bd3bffba& */ "../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../Desktop/project/BusinessApp/node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/EmployeeList.vue?vue&type=template&id=bd3bffba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Desktop_project_BusinessApp_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_project_BusinessApp_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeList_vue_vue_type_template_id_bd3bffba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Desktop_project_BusinessApp_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_project_BusinessApp_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeList_vue_vue_type_template_id_bd3bffba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);