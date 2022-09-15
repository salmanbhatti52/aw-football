(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "6h0i":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function h0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"headBg\">\n      <div class=\"header\">\n        <div class=\"back-btn\">\n          <svg\n            (click)=\"back()\"\n            class=\"backSvg\"\n            version=\"1.1\"\n            id=\"Capa_1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\"\n            y=\"0px\"\n            width=\"14.25px\"\n            height=\"20.43px\"\n            viewBox=\"0 0 792.082 792.082\"\n            style=\"enable-background: new 0 0 792.082 792.082\"\n            xml:space=\"preserve\"\n          >\n            <g>\n              <g id=\"_x37__34_\">\n                <g>\n                  <path\n                    d=\"M317.896,396.024l304.749-276.467c27.36-27.36,27.36-71.677,0-99.037s-71.677-27.36-99.036,0L169.11,342.161\n\t\t\t\tc-14.783,14.783-21.302,34.538-20.084,53.897c-1.218,19.359,5.301,39.114,20.084,53.897l354.531,321.606\n\t\t\t\tc27.36,27.36,71.677,27.36,99.037,0s27.36-71.677,0-99.036L317.896,396.024z\"\n                  />\n                </g>\n              </g>\n            </g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n          </svg>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"container\">\n    <div class=\"row1\">\n      <div class=\"col-6\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          class=\"logoSvg\"\n          viewBox=\"0 0 242.667 218.249\"\n        >\n          <defs>\n            <style>\n              .a {\n                fill: #002c53;\n              }\n              .b {\n                fill: #c91e53;\n              }\n            </style>\n          </defs>\n          <g transform=\"translate(-857.417 -1035.46)\">\n            <g transform=\"translate(857.417 1209.876)\">\n              <path\n                class=\"a\"\n                d=\"M865.228,1240.938a.735.735,0,0,1,.366-.443.7.7,0,0,1,.51-.043q7.617,2.725,15.328,5.071a.749.749,0,0,1,.494.372.818.818,0,0,1,.02.6q-.586,1.94-1.171,3.88a.831.831,0,0,1-.35.449.72.72,0,0,1-.647.069q-4.981-1.515-9.924-3.187-.814,2.407-1.628,4.814,3.706,1.254,7.432,2.419a.9.9,0,0,1,.48.33.645.645,0,0,1,.053.591l-1.161,3.742a.842.842,0,0,1-.352.448.671.671,0,0,1-.607.077q-3.8-1.19-7.581-2.467-1.2,3.555-2.4,7.112-.226.668-1.015.4-2.614-.891-5.219-1.823a.643.643,0,0,1-.381-.869Z\"\n                transform=\"translate(-857.417 -1240.422)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M893.681,1262.015a11.9,11.9,0,0,1,1.32-3.1,12.588,12.588,0,0,1,2.051-2.558,13.3,13.3,0,0,1,2.615-1.951,13.083,13.083,0,0,1,3.015-1.254,13.946,13.946,0,0,1,3.282-.5,13.647,13.647,0,0,1,6.648,1.526,13.862,13.862,0,0,1,2.742,1.877,13.332,13.332,0,0,1,2.168,2.445,12.859,12.859,0,0,1,1.5,2.894,13.054,13.054,0,0,1,.725,3.2,11.767,11.767,0,0,1-.157,3.366,11.433,11.433,0,0,1-1.094,3.188,11.916,11.916,0,0,1-4.466,4.737,13.325,13.325,0,0,1-3.105,1.363,13.712,13.712,0,0,1-3.475.547,14.731,14.731,0,0,1-7.128-1.636,13.762,13.762,0,0,1-2.886-2.007,13.149,13.149,0,0,1-2.2-2.579,12.436,12.436,0,0,1-1.419-2.981,11.511,11.511,0,0,1-.134-6.576Zm6.523,1.677a6.537,6.537,0,0,0-.14,2.583,6.108,6.108,0,0,0,.846,2.327,6.356,6.356,0,0,0,1.726,1.832,7.334,7.334,0,0,0,5.239,1.2,6.3,6.3,0,0,0,2.357-.894,6.116,6.116,0,0,0,1.773-1.726,6.54,6.54,0,0,0,1-2.386,6.685,6.685,0,0,0,.048-2.578,6.336,6.336,0,0,0-2.59-4.107,7.011,7.011,0,0,0-5.06-1.162,6.369,6.369,0,0,0-4.118,2.568A6.682,6.682,0,0,0,900.2,1263.692Z\"\n                transform=\"translate(-862.76 -1242.244)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M935.7,1270.776a11.972,11.972,0,0,1,.984-3.221,12.59,12.59,0,0,1,1.763-2.76,13.273,13.273,0,0,1,2.384-2.218,13.069,13.069,0,0,1,2.853-1.567,13.846,13.846,0,0,1,3.2-.839,13.515,13.515,0,0,1,6.741.815,13.8,13.8,0,0,1,2.912,1.578,13.194,13.194,0,0,1,2.4,2.2,12.873,12.873,0,0,1,1.784,2.721,13.08,13.08,0,0,1,1.052,3.1,11.827,11.827,0,0,1,.2,3.364,11.493,11.493,0,0,1-.752,3.285,11.915,11.915,0,0,1-3.931,5.181,13.276,13.276,0,0,1-2.935,1.682,13.574,13.574,0,0,1-3.385.91,14.577,14.577,0,0,1-7.228-.874,13.64,13.64,0,0,1-3.065-1.69,13.061,13.061,0,0,1-2.443-2.332,12.416,12.416,0,0,1-1.714-2.813,11.523,11.523,0,0,1-.876-3.156A11.666,11.666,0,0,1,935.7,1270.776Zm6.628.977a6.57,6.57,0,0,0,.13,2.584,6.127,6.127,0,0,0,1.079,2.224,6.309,6.309,0,0,0,1.9,1.639,7.271,7.271,0,0,0,5.312.642,6.3,6.3,0,0,0,2.242-1.139,6.138,6.138,0,0,0,1.577-1.9,6.583,6.583,0,0,0,.741-2.478,6.724,6.724,0,0,0-.221-2.568,6.34,6.34,0,0,0-2.993-3.811,6.6,6.6,0,0,0-2.51-.805,6.526,6.526,0,0,0-2.621.185,6.359,6.359,0,0,0-3.809,2.99A6.711,6.711,0,0,0,942.331,1271.753Z\"\n                transform=\"translate(-869.061 -1243.346)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M976.926,1263.479a.661.661,0,0,1,.255-.509.823.823,0,0,1,.568-.164q8.952.5,17.919.527a.849.849,0,0,1,.533.181.73.73,0,0,1,.266.539q0,2.035,0,4.069a.9.9,0,0,1-.211.564.721.721,0,0,1-.6.269q-2.922-.008-5.844-.066-.177,8.972-.356,17.945a.745.745,0,0,1-.242.528.807.807,0,0,1-.611.225q-2.619-.057-5.239-.154a.882.882,0,0,1-.562-.243.688.688,0,0,1-.245-.56q.351-8.967.7-17.935-2.912-.114-5.822-.277a.759.759,0,0,1-.746-.878Q976.806,1265.511,976.926,1263.479Z\"\n                transform=\"translate(-875.192 -1243.757)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1012.507,1263.879a.775.775,0,0,1,.174-.555.71.71,0,0,1,.534-.223q5.528-.187,11.051-.557a7.205,7.205,0,0,1,2.8.351,7.411,7.411,0,0,1,2.4,1.324,7.321,7.321,0,0,1,1.741,2.107,6.727,6.727,0,0,1,.816,2.7,6.334,6.334,0,0,1-.2,2.313,6.04,6.04,0,0,1-.977,1.984,8.206,8.206,0,0,1,2.188,2.394,7.146,7.146,0,0,1,1.016,3.084,6.631,6.631,0,0,1-.357,2.872,7.562,7.562,0,0,1-1.464,2.481,7.874,7.874,0,0,1-2.339,1.8,7.571,7.571,0,0,1-2.941.809q-6.449.452-12.908.671a.882.882,0,0,1-.577-.153.639.639,0,0,1-.232-.525Q1012.87,1275.314,1012.507,1263.879Zm13.008,5.809a2.273,2.273,0,0,0-.251-.9,2.367,2.367,0,0,0-.578-.717,2.482,2.482,0,0,0-.847-.461,2.806,2.806,0,0,0-1.044-.122q-1.81.111-3.623.2.121,2.373.242,4.747,1.811-.092,3.622-.2a3.208,3.208,0,0,0,1.061-.239,2.281,2.281,0,0,0,1.287-1.335A2.3,2.3,0,0,0,1025.515,1269.687Zm1.584,9.436a2.562,2.562,0,0,0-.272-.966,2.891,2.891,0,0,0-.619-.836,2.954,2.954,0,0,0-.9-.571,2.375,2.375,0,0,0-1.085-.175q-2.293.147-4.588.265.14,2.733.279,5.468,2.331-.119,4.66-.269a2.5,2.5,0,0,0,1.06-.3,2.836,2.836,0,0,0,.821-.672,2.765,2.765,0,0,0,.509-.915A2.617,2.617,0,0,0,1027.1,1279.123Z\"\n                transform=\"translate(-880.53 -1243.715)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1055.1,1259.9a.489.489,0,0,1,.078-.226,1.2,1.2,0,0,1,.193-.243,1.212,1.212,0,0,1,.259-.195.8.8,0,0,1,.272-.1q2.115-.311,4.228-.649a.72.72,0,0,1,.505.094,2.127,2.127,0,0,1,.346.251l.563.854q6.141,10.24,12.84,20.263a.449.449,0,0,1,.047.534.926.926,0,0,1-.632.328q-2.53.477-5.067.918a1.2,1.2,0,0,1-.651-.029.891.891,0,0,1-.423-.4q-.5-.765-.966-1.524t-.942-1.528q-4.644.775-9.3,1.427-.217.875-.448,1.742t-.454,1.742a.89.89,0,0,1-.824.723q-2.619.35-5.241.66a.933.933,0,0,1-.579-.1q-.241-.137-.136-.479Q1052.25,1271.958,1055.1,1259.9Zm4.078,6.486q-.194.876-.38,1.882t-.365,2.028q-.18,1.02-.374,2.019t-.4,1.873q2.652-.387,5.3-.814Q1061.039,1269.89,1059.179,1266.386Z\"\n                transform=\"translate(-885.93 -1243.112)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1084.722,1254.689a.711.711,0,0,1,.581-.867q2.421-.54,4.835-1.115a.791.791,0,0,1,.552.07.7.7,0,0,1,.368.451l4.173,17.339q4.733-1.139,9.442-2.411a.825.825,0,0,1,.583.046.679.679,0,0,1,.365.462q.566,2.079,1.133,4.159a.738.738,0,0,1-.067.546.793.793,0,0,1-.5.39q-7.77,2.1-15.606,3.843-.773.171-.928-.534Z\"\n                transform=\"translate(-891.29 -1242.25)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1114.921,1246.692a.719.719,0,0,1,.045-.546.732.732,0,0,1,.469-.367q2.383-.733,4.758-1.5a.8.8,0,0,1,.557.025.7.7,0,0,1,.4.42l5.535,16.954q4.654-1.519,9.275-3.172a.831.831,0,0,1,.587,0,.672.672,0,0,1,.4.431q.732,2.028,1.46,4.057a.734.734,0,0,1-.024.549.8.8,0,0,1-.472.43q-7.624,2.726-15.339,5.1c-.507.156-.831,0-.971-.456Z\"\n                transform=\"translate(-895.788 -1240.991)\"\n              />\n            </g>\n            <g transform=\"translate(908.536 1035.46)\">\n              <path\n                class=\"a\"\n                d=\"M1032.179,1153.61h-4.966v-10.185h26.738v10.185h-6.112l-19.607,58.82h5.348v10.185H997.8V1212.43h4.965l-14.131-42.269L974.5,1212.43H979.6v10.185h-35.9V1212.43h5.348l-19.607-58.82h-6.11v-10.185H950.7v10.185h-5.6l16.68,50.162,16.806-50.162h-5.093v-10.185h30.174v10.185h-4.965l16.806,50.162Z\"\n                transform=\"translate(-918.358 -1051.55)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1026.079,1110.3l-19.478-58.82h6.238v-10.185H975.28v10.185h5.6L961.4,1110.3h-3.82v10.185h24.19V1110.3h-4.838l4.583-13.877h24.317l4.583,13.877h-4.838v10.185H1029.9V1110.3Zm-42.142-21.261,9.8-29.028,9.55,29.028Z\"\n                transform=\"translate(-923.463 -1036.329)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M999.115,1073.611l-5.475,17.7h10.823Zm0,6.875,2.929,8.53h-5.858Z\"\n                transform=\"translate(-928.837 -1041.145)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M1028.648,1104.592l-16.3-49.016h4.456v-20.116H969.446v20.116h3.947l-16.3,49.016h-5.348v19.989h8.022v-2.165h-5.858v-15.787h4.965l17.061-53.218H971.61v-15.787h43.033v15.787h-4.966l17.061,53.218h5.092v15.787h-5.346v2.165h7.383v-19.989Z\"\n                transform=\"translate(-922.594 -1035.459)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M1008.33,1109.368H987.45l-2.037,8.276h3.31v15.74h2.164v-17.778h-3.056l1.527-4.2h17.061l1.4,4.2h-3.056v17.778h2.164v-15.74h3.31Z\"\n                transform=\"translate(-927.611 -1046.474)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M1023.542,1155.542V1139.8h-2.164v17.9h3.056l-9.8,29.409-9.8-29.409h2.929v-20.069H996.8v-.046H980.764v2.164h24.7v15.787h-3.31l12.477,37.3,12.349-37.3Zm0,0V1139.8h-2.164v17.9h3.056l-9.8,29.409-9.8-29.409h2.929v-20.069H996.8v-.046H980.764v2.164h24.7v15.787h-3.31l12.477,37.3,12.349-37.3Zm-2.164-17.951v20.115h3.056l-9.8,29.409-9.8-29.409h2.929v-20.115H967.778v20.115h2.927l-9.675,29.792-9.931-29.792h3.565v-20.115H917.488v20.115h7.13l16.3,49.017h-2.928v19.988h45.579v-19.988h-2.929l7.13-20.243,7.129,20.243h-2.928v19.988h45.58v-19.988h-2.928l16.3-49.017h7v-20.115Zm34.376,17.951H1049.9l-18.207,53.218h3.693v15.787H994.132V1208.76h3.31l-9.675-26.736-9.676,26.736h3.31v15.787h-41.25V1208.76h3.692l-18.206-53.218h-5.985v-15.787h32.976v15.787h-4.074l12.35,37.3,12.477-37.3h-3.437v-15.787h35.521v15.787h-3.31l12.477,37.3,12.349-37.3h-3.438v-15.787h32.212Zm-32.212,0V1139.8h-2.164v17.9h3.056l-9.8,29.409-9.8-29.409h2.929v-20.069H996.8v-.046H980.764v2.164h24.7v15.787h-3.31l12.477,37.3,12.349-37.3Zm0,0V1139.8h-2.164v17.9h3.056l-9.8,29.409-9.8-29.409h2.929v-20.069H996.8v-.046H980.764v2.164h24.7v15.787h-3.31l12.477,37.3,12.349-37.3Z\"\n                transform=\"translate(-917.488 -1050.68)\"\n              />\n            </g>\n            <g transform=\"translate(911.943 1080.031)\">\n              <path\n                class=\"a\"\n                d=\"M932.662,1087.837l2.637,8.116h8.533l-6.9,5.016,2.637,8.116-6.9-5.016-6.9,5.016,2.637-8.116-6.9-5.016h8.533Z\"\n                transform=\"translate(-921.492 -1087.837)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1063.424,1087.837l2.637,8.116h8.533l-6.9,5.016,2.637,8.116-6.9-5.016-6.9,5.016,2.637-8.116-6.9-5.016h8.533Z\"\n                transform=\"translate(-940.979 -1087.837)\"\n              />\n            </g>\n          </g>\n        </svg>\n      </div>\n      <p class=\"heading\">{{userType}} SIGNUP</p>\n    </div>\n    <div class=\"row2\">\n      <div class=\"col-6-btn\">\n        <p *ngIf=\"error.status\" class=\"error\">{{error.message}}</p>\n        <p *ngIf=\"emailError.status\" class=\"error\">{{emailError.message}}</p>\n        <div class=\"inputs\">\n          <ion-input\n            [(ngModel)]=\"email\"\n            class=\"input\"\n            (keyup.enter)=\"setFocusToUsername(usernameInput)\"\n            required\n            value=\"\"\n            type=\"email\"\n            placeholder=\"Email Address\"\n          ></ion-input>\n          <p *ngIf=\"usernameError.status\" class=\"error\">\n            {{usernameError.message}}\n          </p>\n          <ion-input\n            #usernameInput\n            (keyup.enter)=\"setFocusToPass(passInput)\"\n            [(ngModel)]=\"username\"\n            required\n            class=\"input\"\n            value=\"\"\n            type=\"text\"\n            placeholder=\"Username\"\n          ></ion-input>\n          <p *ngIf=\"passwordError.status\" class=\"error\">\n            {{passwordError.message}}\n          </p>\n          <ion-input\n            [(ngModel)]=\"password\"\n            #passInput\n            (keyup.enter)=\"signup()\"\n            required\n            class=\"input\"\n            value=\"\"\n            type=\"password\"\n            placeholder=\"Password\"\n          ></ion-input>\n        </div>\n        <ion-button\n          [disabled]=\"isLoading\"\n          (click)=\"signup()\"\n          class=\"btn_signup\"\n        >\n          <div *ngIf=\"isLoading\" class=\"lds-ring\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n          <span *ngIf=\"!isLoading\">SIGNUP</span>\n        </ion-button>\n      </div>\n    </div>\n    <div class=\"signin\">\n      <p>Already have an account?</p>\n      <p (click)=\"loginPage()\" class=\"signinText\">LOGIN</p>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "RPFs":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function RPFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "T9iC":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function T9iC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "RPFs");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "fJgH":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function fJgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #f5f5f5;\n}\n\n.header {\n  display: flex;\n  padding-top: 5px;\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 10px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.container {\n  width: 80%;\n  margin: auto;\n}\n\n.row2 {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 26px;\n}\n\n.row1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.col-6-btn {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.btn_signup {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: #002c53;\n  font-weight: 300;\n  color: #fff;\n  letter-spacing: 0;\n  --border-radius: 10px;\n}\n\n.heading {\n  margin: 32px 0 30px 0;\n  font-weight: 600;\n  font-size: 25px;\n  letter-spacing: 2.5px;\n}\n\n.input {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  border-radius: 10px;\n  background-color: #fff;\n  color: #002c53;\n  font-weight: 400;\n  font-size: 14px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n\n.signin {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 50px;\n  margin-bottom: 10px;\n}\n\n.signin p {\n  font-size: 14px;\n}\n\n.signinText {\n  cursor: pointer;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border: 4px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media only screen and (min-height: 568px) {\n  .logoSvg {\n    width: 160.667px;\n    height: 143.249px;\n  }\n\n  .heading {\n    font-size: 20px;\n    margin: 5px 0 5px 0;\n  }\n\n  .input {\n    --padding-start: 15px;\n    --padding-end: 15px;\n    --padding-top: 15px;\n    --padding-bottom: 15px;\n    margin-bottom: 10px;\n  }\n\n  .btn_signup {\n    --padding-top: 15px;\n    --padding-bottom: 15px;\n  }\n\n  .error {\n    font-size: 12px;\n    padding-bottom: 0;\n  }\n\n  .row2 {\n    margin-bottom: 5px;\n  }\n\n  .signin {\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (min-height: 610px) {\n  .logoSvg {\n    width: 180.667px;\n    height: 150.249px;\n  }\n\n  .input {\n    --padding-start: 20px;\n    --padding-end: 20px;\n    --padding-top: 20px;\n    --padding-bottom: 20px;\n    margin-bottom: 10px;\n  }\n\n  .btn_signup {\n    --padding-top: 20px;\n    --padding-bottom: 20px;\n  }\n\n  .heading {\n    font-size: 25px;\n    margin: 10px 0 10px 0;\n  }\n\n  .signin {\n    margin-top: 20px;\n  }\n}\n\n@media only screen and (min-height: 640px) {\n  .logoSvg {\n    width: 200.667px;\n    height: 190.249px;\n  }\n\n  .heading {\n    margin: 10px 0 10px 0;\n  }\n\n  .error {\n    font-size: 13px;\n    padding-bottom: 0;\n  }\n}\n\n@media only screen and (min-height: 665px) {\n  .logoSvg {\n    width: 220.667px;\n    height: 180.249px;\n  }\n\n  .heading {\n    margin: 15px 0 15px 0;\n  }\n\n  .error {\n    font-size: 14px;\n    padding-bottom: 5px;\n  }\n\n  .signin {\n    margin-top: 20px;\n  }\n}\n\n@media only screen and (min-height: 700px) {\n  .signin {\n    margin-top: 40px;\n  }\n}\n\n@media only screen and (min-height: 731px) {\n  .logoSvg {\n    width: 232.667px;\n    height: 208.249px;\n  }\n\n  .heading {\n    margin: 30px 0 30px 0;\n  }\n\n  .error {\n    font-size: 14px;\n    padding-bottom: 5px;\n  }\n\n  .signin {\n    margin-top: 30px;\n  }\n}\n\n@media only screen and (min-height: 736px) {\n  .logoSvg {\n    width: 215.667px;\n    height: 180.249px;\n  }\n\n  .heading {\n    margin: 30px 0 30px 0;\n  }\n\n  .signin {\n    margin-top: 25px;\n  }\n}\n\n@media only screen and (min-height: 760px) {\n  .signin {\n    margin-top: 40px;\n  }\n}\n\n@media only screen and (min-height: 780px) {\n  .signin {\n    margin-top: 60px;\n  }\n}\n\n@media only screen and (min-height: 800px) {\n  .logoSvg {\n    width: 232.667px;\n    height: 260.249px;\n  }\n\n  .heading {\n    margin: 15px 0 15px 0;\n  }\n\n  .signin {\n    margin-top: 15px;\n  }\n}\n\n@media only screen and (min-height: 823px) {\n  .logoSvg {\n    width: 232.667px;\n    height: 260.249px;\n  }\n\n  .heading {\n    margin: 30px 0 30px 0;\n  }\n\n  .signin {\n    margin-top: 55px;\n  }\n}\n\n@media only screen and (min-height: 844px) {\n  .logoSvg {\n    width: 260.667px;\n    height: 275.249px;\n  }\n\n  .signup {\n    margin-top: 85px;\n  }\n}\n\n@media only screen and (min-height: 896px) {\n  .logoSvg {\n    width: 280.667px;\n    height: 310.249px;\n  }\n\n  .signin {\n    margin-top: 70px;\n  }\n}\n\n@media only screen and (min-height: 926px) {\n  .logoSvg {\n    width: 310.667px;\n    height: 340.249px;\n  }\n\n  .signin {\n    margin-top: 75px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0FBT0Y7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUxBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVFGOztBQUxBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNFQUFBO1VBQUEsOERBQUE7RUFDQSxzREFBQTtBQVNGOztBQVBBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQVVGOztBQVJBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQVdGOztBQVRBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQVlGOztBQVZBO0VBQ0U7SUFDRSx1QkFBQTtFQWFGO0VBWEE7SUFDRSx5QkFBQTtFQWFGO0FBQ0Y7O0FBbkJBO0VBQ0U7SUFDRSx1QkFBQTtFQWFGO0VBWEE7SUFDRSx5QkFBQTtFQWFGO0FBQ0Y7O0FBWEE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFhRjs7RUFYQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQWNGOztFQVpBO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQWVGOztFQWJBO0lBQ0UsbUJBQUE7SUFDQSxzQkFBQTtFQWdCRjs7RUFkQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQWlCRjs7RUFmQTtJQUNFLGtCQUFBO0VBa0JGOztFQWhCQTtJQUNFLGdCQUFBO0VBbUJGO0FBQ0Y7O0FBakJBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VBbUJGOztFQWpCQTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFvQkY7O0VBbEJBO0lBQ0UsbUJBQUE7SUFDQSxzQkFBQTtFQXFCRjs7RUFuQkE7SUFDRSxlQUFBO0lBQ0EscUJBQUE7RUFzQkY7O0VBcEJBO0lBQ0UsZ0JBQUE7RUF1QkY7QUFDRjs7QUFyQkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUF1QkY7O0VBckJBO0lBQ0UscUJBQUE7RUF3QkY7O0VBdEJBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBeUJGO0FBQ0Y7O0FBdkJBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VBeUJGOztFQXZCQTtJQUNFLHFCQUFBO0VBMEJGOztFQXhCQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQTJCRjs7RUF6QkE7SUFDRSxnQkFBQTtFQTRCRjtBQUNGOztBQTFCQTtFQUNFO0lBQ0UsZ0JBQUE7RUE0QkY7QUFDRjs7QUExQkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUE0QkY7O0VBMUJBO0lBQ0UscUJBQUE7RUE2QkY7O0VBM0JBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBOEJGOztFQTVCQTtJQUNFLGdCQUFBO0VBK0JGO0FBQ0Y7O0FBN0JBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VBK0JGOztFQTdCQTtJQUNFLHFCQUFBO0VBZ0NGOztFQTlCQTtJQUNFLGdCQUFBO0VBaUNGO0FBQ0Y7O0FBL0JBO0VBQ0U7SUFDRSxnQkFBQTtFQWlDRjtBQUNGOztBQS9CQTtFQUNFO0lBQ0UsZ0JBQUE7RUFpQ0Y7QUFDRjs7QUEvQkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFpQ0Y7O0VBL0JBO0lBQ0UscUJBQUE7RUFrQ0Y7O0VBaENBO0lBQ0UsZ0JBQUE7RUFtQ0Y7QUFDRjs7QUFoQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFrQ0Y7O0VBaENBO0lBQ0UscUJBQUE7RUFtQ0Y7O0VBakNBO0lBQ0UsZ0JBQUE7RUFvQ0Y7QUFDRjs7QUFsQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFvQ0Y7O0VBbENBO0lBQ0UsZ0JBQUE7RUFxQ0Y7QUFDRjs7QUFuQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFxQ0Y7O0VBbkNBO0lBQ0UsZ0JBQUE7RUFzQ0Y7QUFDRjs7QUFwQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFzQ0Y7O0VBcENBO0lBQ0UsZ0JBQUE7RUF1Q0Y7QUFDRiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4uYmFjay1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMCAxNXB4O1xyXG4gIGZpbGw6ICMzMzM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iYWNrU3ZnIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4vLy9cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnJvdzIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxufVxyXG4ucm93MSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC02LWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuX3NpZ251cCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMmM1MztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIG1hcmdpbjogMzJweCAwIDMwcHggMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbn1cclxuLmlucHV0IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAyYzUzO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2lnbmluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNpZ25pbiBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zaWduaW5UZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLy9zcGlubmVyXHJcbi5sZHMtcmluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuLmxkcy1yaW5nIGRpdiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDU2OHB4KSB7XHJcbiAgLmxvZ29Tdmcge1xyXG4gICAgd2lkdGg6IDE2MC42NjdweDtcclxuICAgIGhlaWdodDogMTQzLjI0OXB4O1xyXG4gIH1cclxuICAuaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG4gIH1cclxuICAuaW5wdXQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmJ0bl9zaWdudXAge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTVweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnJvdzIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuc2lnbmluIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDYxMHB4KSB7XHJcbiAgLmxvZ29Tdmcge1xyXG4gICAgd2lkdGg6IDE4MC42NjdweDtcclxuICAgIGhlaWdodDogMTUwLjI0OXB4O1xyXG4gIH1cclxuICAuaW5wdXQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmJ0bl9zaWdudXAge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICB9XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2NDBweCkge1xyXG4gIC5sb2dvU3ZnIHtcclxuICAgIHdpZHRoOiAyMDAuNjY3cHg7XHJcbiAgICBoZWlnaHQ6IDE5MC4yNDlweDtcclxuICB9XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gIH1cclxuICAuZXJyb3Ige1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY2NXB4KSB7XHJcbiAgLmxvZ29Tdmcge1xyXG4gICAgd2lkdGg6IDIyMC42NjdweDtcclxuICAgIGhlaWdodDogMTgwLjI0OXB4O1xyXG4gIH1cclxuICAuaGVhZGluZyB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuc2lnbmluIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MzFweCkge1xyXG4gIC5sb2dvU3ZnIHtcclxuICAgIHdpZHRoOiAyMzIuNjY3cHg7XHJcbiAgICBoZWlnaHQ6IDIwOC4yNDlweDtcclxuICB9XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMzBweCAwO1xyXG4gIH1cclxuICAuZXJyb3Ige1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MzZweCkge1xyXG4gIC5sb2dvU3ZnIHtcclxuICAgIHdpZHRoOiAyMTUuNjY3cHg7XHJcbiAgICBoZWlnaHQ6IDE4MC4yNDlweDtcclxuICB9XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMzBweCAwO1xyXG4gIH1cclxuICAuc2lnbmluIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSB7XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3ODBweCkge1xyXG4gIC5zaWduaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODAwcHgpIHtcclxuICAubG9nb1N2ZyB7XHJcbiAgICB3aWR0aDogMjMyLjY2N3B4O1xyXG4gICAgaGVpZ2h0OiAyNjAuMjQ5cHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5nIHtcclxuICAgIG1hcmdpbjogMTVweCAwIDE1cHggMDtcclxuICB9XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODIzcHgpIHtcclxuICAubG9nb1N2ZyB7XHJcbiAgICB3aWR0aDogMjMyLjY2N3B4O1xyXG4gICAgaGVpZ2h0OiAyNjAuMjQ5cHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5nIHtcclxuICAgIG1hcmdpbjogMzBweCAwIDMwcHggMDtcclxuICB9XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4NDRweCkge1xyXG4gIC5sb2dvU3ZnIHtcclxuICAgIHdpZHRoOiAyNjAuNjY3cHg7XHJcbiAgICBoZWlnaHQ6IDI3NS4yNDlweDtcclxuICB9XHJcbiAgLnNpZ251cCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4OTZweCkge1xyXG4gIC5sb2dvU3ZnIHtcclxuICAgIHdpZHRoOiAyODAuNjY3cHg7XHJcbiAgICBoZWlnaHQ6IDMxMC4yNDlweDtcclxuICB9XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA5MjZweCkge1xyXG4gIC5sb2dvU3ZnIHtcclxuICAgIHdpZHRoOiAzMTAuNjY3cHg7XHJcbiAgICBoZWlnaHQ6IDM0MC4yNDlweDtcclxuICB9XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "yL7A":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function yL7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.page.html */
      "6h0i");
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.page.scss */
      "fJgH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* eslint-disable radix */

      /* eslint-disable max-len */


      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(route, router, rest, alertController, navCtrl, oneSignal, platform) {
          var _this = this;

          _classCallCheck(this, SignupPage);

          this.route = route;
          this.router = router;
          this.rest = rest;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.oneSignal = oneSignal;
          this.platform = platform; // signalAppId = '33f6031f-46c8-4ee0-bb26-f857eea1e851';
          // firebaseId = '809200048320';

          this.oneSignalAppId = 'f629e689-5418-4d75-ab66-6e5dfb1d5226';
          this.oneSignalFirebaseId = '155437973416';
          this.phoneId = '';
          this.email = '';
          this.username = '';
          this.password = '';
          this.isLoading = false;
          this.emailError = {
            status: false,
            message: ''
          };
          this.usernameError = {
            status: false,
            message: ''
          };
          this.passwordError = {
            status: false,
            message: ''
          };
          this.error = {
            status: false,
            message: ''
          };
          this.email = '';
          this.username = '';
          this.password = '';
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.userType = _this.router.getCurrentNavigation().extras.state.user;
            }
          }); // this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
          // this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
          // this.oneSignal.endInit();
          // this.oneSignal.getIds().then((identity) => {
          //   console.log('one signal id,', identity);
          //   this.phoneId = identity.userId;
          //   localStorage.setItem('deviceID', identity.userId);
          // });
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.email = '';
            this.username = '';
            this.password = ''; // this.phoneId = localStorage.getItem('deviceID');
          }
        }, {
          key: "loginPage",
          value: function loginPage() {
            var navigationExtras = {
              state: {
                user: this.userType
              }
            };
            this.navCtrl.navigateBack(['signin'], navigationExtras);
          }
        }, {
          key: "signup",
          value: function signup() {
            var _this2 = this;

            this.phoneId = localStorage.getItem('deviceID');

            if (this.email && this.username && this.password) {
              if (!this.validateEmail(this.email)) {
                this.emailError.status = true;
                this.emailError.message = 'Invalid Email address.';
                setTimeout(function () {
                  _this2.emailError.status = false;
                  _this2.emailError.message = '';
                }, 3000);
                return;
              }

              if (this.userType === 'COACH') {
                this.isLoading = true;
                this.rest.signUp({
                  requestType: 'coach',
                  email: this.email,
                  username: this.username,
                  password: this.password,
                  deviceID: this.phoneId
                }).subscribe(function (data) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _this3 = this;

                    var alert;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(data.status === 'error')) {
                              _context.next = 8;
                              break;
                            }

                            this.isLoading = false;
                            this.error.status = true;
                            this.error.message = data.msg;
                            setTimeout(function () {
                              _this3.error.status = false;
                              _this3.error.message = '';
                            }, 3000);
                            return _context.abrupt("return");

                          case 8:
                            if (!(data.status === 'success')) {
                              _context.next = 21;
                              break;
                            }

                            localStorage.setItem('user', JSON.stringify(data.users_data));
                            localStorage.setItem('accountType', this.userType);
                            this.isLoading = false;
                            _context.next = 14;
                            return this.alertController.create({
                              cssClass: 'registeredAlert',
                              message: 'Registered successfully.',
                              backdropDismiss: false,
                              buttons: [{
                                text: 'Ok',
                                handler: function handler() {
                                  _this3.email = '';
                                  _this3.username = '';
                                  _this3.password = '';

                                  if (Object.keys(localStorage).includes('user')) {
                                    if (parseInt(data.users_data.roles_id) === 3) {
                                      if (_this3.userType === 'COACH') {
                                        _this3.navCtrl.navigateRoot('/home-coach');
                                      }

                                      if (_this3.userType === 'PLAYER') {
                                        _this3.navCtrl.navigateRoot('/player-survey');
                                      }
                                    }

                                    if (parseInt(data.users_data.roles_id) === 2) {
                                      _this3.navCtrl.navigateRoot('/home-coach');
                                    } else {
                                      _this3.error.status = true;
                                      _this3.error.message = 'Something went wrong!';
                                      setTimeout(function () {
                                        _this3.error.status = false;
                                        _this3.error.message = '';
                                      }, 3000);
                                    }
                                  }

                                  _this3.navCtrl.navigateRoot('/home-coach');
                                },
                                cssClass: 'btn_ok'
                              }]
                            });

                          case 14:
                            alert = _context.sent;
                            _context.next = 17;
                            return alert.present();

                          case 17:
                            _context.next = 19;
                            return alert.onDidDismiss();

                          case 19:
                            _context.next = 25;
                            break;

                          case 21:
                            this.isLoading = false;
                            this.error.status = true;
                            this.error.message = 'Something went wrong!';
                            setTimeout(function () {
                              _this3.error.status = false;
                              _this3.error.message = '';
                            }, 3000);

                          case 25:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                }, function (error) {
                  _this2.isLoading = false;
                  _this2.error.status = true;
                  _this2.error.message = 'Something went wrong!';
                  setTimeout(function () {
                    _this2.error.status = false;
                    _this2.error.message = '';
                  }, 3000);
                });
              } else if (this.userType === 'PLAYER') {
                this.isLoading = true;
                this.rest.signUp({
                  requestType: 'player',
                  username: this.username,
                  email: this.email,
                  password: this.password,
                  deviceID: this.phoneId
                }).subscribe(function (data) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var _this4 = this;

                    var alert;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            console.log('signup response check====', data);

                            if (!(data.status === 'error')) {
                              _context2.next = 9;
                              break;
                            }

                            this.isLoading = false;
                            this.error.status = true;
                            this.error.message = data.msg;
                            setTimeout(function () {
                              _this4.error.status = false;
                              _this4.error.message = '';
                            }, 3000);
                            return _context2.abrupt("return");

                          case 9:
                            if (!(data.status === 'success')) {
                              _context2.next = 22;
                              break;
                            }

                            localStorage.setItem('user', JSON.stringify(data.users_data));
                            localStorage.setItem('accountType', this.userType);
                            this.isLoading = false;
                            _context2.next = 15;
                            return this.alertController.create({
                              cssClass: 'registeredAlert',
                              message: 'Registered successfully.',
                              backdropDismiss: false,
                              buttons: [{
                                text: 'Ok',
                                handler: function handler() {
                                  _this4.email = '';
                                  _this4.username = '';
                                  _this4.password = '';

                                  if (Object.keys(localStorage).includes('user')) {
                                    if (parseInt(data.users_data.roles_id) === 3) {
                                      if (_this4.userType === 'COACH') {
                                        _this4.navCtrl.navigateRoot('/home-coach');
                                      }

                                      if (_this4.userType === 'PLAYER') {
                                        _this4.navCtrl.navigateRoot('/player-survey');
                                      }
                                    }

                                    if (parseInt(data.users_data.roles_id) === 1) {
                                      _this4.navCtrl.navigateRoot('/player-survey');
                                    } else {
                                      _this4.error.status = true;
                                      _this4.error.message = 'Something went wrong!';
                                      setTimeout(function () {
                                        _this4.error.status = false;
                                        _this4.error.message = '';
                                      }, 3000);
                                    }
                                  }
                                },
                                cssClass: 'btn_ok'
                              }]
                            });

                          case 15:
                            alert = _context2.sent;
                            _context2.next = 18;
                            return alert.present();

                          case 18:
                            _context2.next = 20;
                            return alert.onDidDismiss();

                          case 20:
                            _context2.next = 26;
                            break;

                          case 22:
                            this.isLoading = false;
                            this.error.status = true;
                            this.error.message = 'Something went wrong!';
                            setTimeout(function () {
                              _this4.error.status = false;
                              _this4.error.message = '';
                            }, 3000);

                          case 26:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                }, function (error) {
                  _this2.isLoading = false;
                  _this2.error.status = true;
                  _this2.error.message = 'Something went wrong!';
                  setTimeout(function () {
                    _this2.error.status = false;
                    _this2.error.message = '';
                  }, 3000);
                });
              } else {
                this.router.navigate(['home']);
              }

              return;
            }

            if (!this.email) {
              this.emailError.status = true;
              this.emailError.message = 'Email address is required';
            }

            if (!this.username) {
              this.usernameError.status = true;
              this.usernameError.message = 'Username is required';
            }

            if (!this.password) {
              this.passwordError.status = true;
              this.passwordError.message = 'Password is required';
            }

            setTimeout(function () {
              _this2.emailError.status = false;
              _this2.emailError.message = '';
              _this2.usernameError.status = false;
              _this2.usernameError.message = '';
              _this2.passwordError.status = false;
              _this2.passwordError.message = '';
            }, 3000);
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
        }, {
          key: "back",
          value: function back() {
            var navigationExtras = {
              state: {
                user: this.userType
              }
            };
            this.router.navigate(['signin'], navigationExtras);
          }
        }, {
          key: "setFocusToUsername",
          value: function setFocusToUsername(el) {
            el.setFocus();
          }
        }, {
          key: "setFocusToPass",
          value: function setFocusToPass(el) {
            el.setFocus();
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map