"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_assets_logo_aegis_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/assets/logo/aegis-logo.svg */ \"./public/assets/logo/aegis-logo.svg\");\n/* harmony import */ var _HeaderNav_HeaderNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderNav/HeaderNav */ \"./components/Header/HeaderNav/HeaderNav.tsx\");\n/* harmony import */ var _public_assets_icons_hamburger_menu_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/assets/icons/hamburger-menu.svg */ \"./public/assets/icons/hamburger-menu.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _types_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/routes */ \"./types/routes.ts\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nconsole.log((_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()));\nfunction Header() {\n    _s();\n    // TEMP STATE - to be deleted\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), user = ref[0], setUser = ref[1];\n    // \n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), showMenu = ref1[0], setShowMenu = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\"\n    }), loginData = ref2[0], setLoginData = ref2[1];\n    var handleLoginMob = function() {\n        // TEMP\n        setUser(true);\n    // \n    };\n    var handleLogin = function(e) {\n        e.preventDefault();\n        var username = loginData.username, password = loginData.password;\n        if (!loginData.username || !loginData.password) return console.log(\"insufficient login data supplied\");\n        console.log(username, password);\n        // Temp\n        setUser(true);\n    // \n    };\n    var handleChange = function(e) {\n        setLoginData(_objectSpread({}, loginData, _defineProperty({}, e.target.name, e.target.value)));\n    };\n    var handleShowModal = function() {\n        return setShowMenu(!showMenu);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__spacer)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__column),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: _types_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTE.HOME,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__logo),\n                                    src: _public_assets_logo_aegis_logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                    alt: \"logo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderNav_HeaderNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__column),\n                        children: [\n                            !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"header__login-form\"]),\n                                onSubmit: function(e) {\n                                    return handleLogin(e);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"username\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__input),\n                                            type: \"text\",\n                                            name: \"username\",\n                                            value: loginData.username,\n                                            placeholder: \"Username\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"password\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__input),\n                                            type: \"text\",\n                                            name: \"password\",\n                                            value: loginData.password,\n                                            placeholder: \"Password\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"button--primary \".concat((_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__button)),\n                                        type: \"submit\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, this),\n                            !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button--primary \".concat((_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header__button), \" \").concat((_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"header__button--mob\"])),\n                                type: \"button\",\n                                onClick: handleLoginMob,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"header__hamburger-container\"]),\n                                onClick: handleShowModal,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: _public_assets_icons_hamburger_menu_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"hamburger menu\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Davie\\\\Documents\\\\Projects\\\\aegis\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"C2F3LVnSQ1kxplCK0lk3NjSH4i4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEdBQUcsRUFBRTlCLCtFQUFhO29DQUFFK0IsR0FBRyxFQUFDLGdCQUFnQjs7Ozs7d0NBQUc7Ozs7O29DQUM5Qzs7Ozs7OzRCQUNKOzs7Ozs7b0JBQ0Q7Ozs7OztZQUNQLENBRVI7Q0FDTDtHQXRFUXpCLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQXdFZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3g/ZTdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBZWdpc0xvZ28gZnJvbSAnL3B1YmxpYy9hc3NldHMvbG9nby9hZWdpcy1sb2dvLnN2Zyc7XHJcbmltcG9ydCBIZWFkZXJOYXYgZnJvbSAnLi9IZWFkZXJOYXYvSGVhZGVyTmF2JztcclxuaW1wb3J0IEhhbWJ1cmdlckljb24gZnJvbSAnL3B1YmxpYy9hc3NldHMvaWNvbnMvaGFtYnVyZ2VyLW1lbnUuc3ZnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgUk9VVEUgfSBmcm9tICcuLi8uLi90eXBlcy9yb3V0ZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnNvbGUubG9nKHN0eWxlcylcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIFxyXG4gICAgLy8gVEVNUCBTVEFURSAtIHRvIGJlIGRlbGV0ZWRcclxuICAgIGNvbnN0IFsgdXNlciwgc2V0VXNlciBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gXHJcblxyXG4gICAgY29uc3QgWyBzaG93TWVudSwgc2V0U2hvd01lbnUgXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgWyBsb2dpbkRhdGEsIHNldExvZ2luRGF0YSBdID0gdXNlU3RhdGUoeyB1c2VybmFtZSA6IFwiXCIsIHBhc3N3b3JkIDogXCJcIn0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luTW9iID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIFRFTVBcclxuICAgICAgICBzZXRVc2VyKHRydWUpO1xyXG4gICAgICAgIC8vIFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gbG9naW5EYXRhO1xyXG4gICAgICAgIGlmICghbG9naW5EYXRhLnVzZXJuYW1lIHx8ICFsb2dpbkRhdGEucGFzc3dvcmQpIHJldHVybiBjb25zb2xlLmxvZyhcImluc3VmZmljaWVudCBsb2dpbiBkYXRhIHN1cHBsaWVkXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAvLyBUZW1wXHJcbiAgICAgICAgc2V0VXNlcih0cnVlKTtcclxuICAgICAgICAvLyBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0TG9naW5EYXRhKHtcclxuICAgICAgICAgICAgLi4ubG9naW5EYXRhLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaG93TW9kYWwgPSAoKTogdm9pZCA9PiBzZXRTaG93TWVudSghc2hvd01lbnUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhlYWRlcl9fc3BhY2VyXCJdfT48L2Rpdj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlc1tcImhlYWRlclwiXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGVyX19jb2x1bW5cIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JPVVRFLkhPTUV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVE9ETzogQ2hlY2sgaWYgeW91IG5lZWQgYW4gYSB0YWcgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX2xvZ29cIl19IHNyYz17QWVnaXNMb2dvfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlck5hdiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGVyX19jb2x1bW5cIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIHshdXNlciAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX2xvZ2luLWZvcm1cIl19IG9uU3VibWl0PXtlID0+IGhhbmRsZUxvZ2luKGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX2lucHV0XCJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHZhbHVlPXtsb2dpbkRhdGEudXNlcm5hbWV9IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXJfX2lucHV0XCJdfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtsb2dpbkRhdGEucGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnV0dG9uLS1wcmltYXJ5ICR7c3R5bGVzWydoZWFkZXJfX2J1dHRvbiddfWB9IHR5cGU9XCJzdWJtaXRcIiA+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IXVzZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidXR0b24tLXByaW1hcnkgJHtzdHlsZXNbXCJoZWFkZXJfX2J1dHRvblwiXX0gJHtzdHlsZXNbXCJoZWFkZXJfX2J1dHRvbi0tbW9iXCJdfWB9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVMb2dpbk1vYn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhlYWRlcl9faGFtYnVyZ2VyLWNvbnRhaW5lclwiXX0gb25DbGljaz17aGFuZGxlU2hvd01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0hhbWJ1cmdlckljb259IGFsdD1cImhhbWJ1cmdlciBtZW51XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFlZ2lzTG9nbyIsIkhlYWRlck5hdiIsIkhhbWJ1cmdlckljb24iLCJMaW5rIiwiUk9VVEUiLCJzdHlsZXMiLCJjb25zb2xlIiwibG9nIiwiSGVhZGVyIiwidXNlciIsInNldFVzZXIiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvZ2luRGF0YSIsInNldExvZ2luRGF0YSIsImhhbmRsZUxvZ2luTW9iIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTaG93TW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJocmVmIiwiSE9NRSIsImltZyIsInNyYyIsImFsdCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Header.tsx\n");

/***/ })

});