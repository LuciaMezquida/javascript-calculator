(this["webpackJsonpmodule-3-leccion-05-ejercicio-08-lucia"]=this["webpackJsonpmodule-3-leccion-05-ejercicio-08-lucia"]||[]).push([[0],{15:function(_,e,t){},16:function(_,e,t){},17:function(_,e,t){"use strict";t.r(e);var a=t(0),s=t(1),c=t.n(s),r=t(4),l=t.n(r),i=(t(15),t(5)),n=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;t(_),a(_),s(_),c(_),r(_)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(i.a,{})}),document.getElementById("root")),n()},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__),_styleSheets_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_styleSheets_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_styleSheets_App_css__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),numbers=[7,8,9,4,5,6,1,2,3,0],operations=["/","*","-","+"],ids={7:"seven",8:"eight",9:"nine",4:"four",5:"five",6:"six",1:"one",2:"two",3:"three",0:"zero","/":"divide","*":"multiply","-":"subtract","+":"add"},App=function(_React$Component){Object(_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(_){var e;return Object(_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=_super.call(this,_)).state={lastPressed:void 0,calc:"0",operation:void 0},e.handleClick=e.handleClick.bind(Object(_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(_Users_latialuci_Documents_GitHub_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"handleClick",value:function handleClick(ev){console.log(ev.target.innerHTML);var calc=this.state.calc,keyText=ev.target.innerHTML;switch(keyText){case"AC":this.setState({calc:"0"});break;case"=":var result=eval(calc);this.setState({calc:result})}}},{key:"render",value:function(){var _=this,e=numbers.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{onClick:_.handleClick,className:0===e?"big-h btn":"btn",children:e},e)})),t=operations.map((function(e,t){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{onClick:_.handleClick,className:"btn orange",children:e},t)}));return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"display",className:"display",children:this.state.calc}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"nums-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{className:"btn ac big-h",onClick:this.handleClick,id:"clear",children:"AC"}),e,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{className:"btn",onClick:this.handleClick,id:"decimal",children:"."})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"ops-container",children:[t,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{className:"orange btn",onClick:this.handleClick,id:"equals",children:"="})]})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);__webpack_exports__.a=App}},[[17,1,2]]]);
//# sourceMappingURL=main.19377812.chunk.js.map