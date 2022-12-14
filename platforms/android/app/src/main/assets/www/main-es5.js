(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\najam\aw-football\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "QIP1":
    /*!********************************************!*\
      !*** ./src/app/services/player.service.ts ***!
      \********************************************/

    /*! exports provided: PlayerService */

    /***/
    function QIP1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayerService", function () {
        return PlayerService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rest.service */
      "tnAE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* eslint-disable @typescript-eslint/naming-convention */


      var PlayerService = /*#__PURE__*/function () {
        function PlayerService(route, router, rest, alertController, navCtrl) {
          _classCallCheck(this, PlayerService);

          this.route = route;
          this.router = router;
          this.rest = rest;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.displaySurveyStatus = false;
          this.displaySurveys = true;
          this.open = false;
          this.close = false;
          this.isLoading = false;
          this.sendingSurveyResponse = false;
          this.numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          this.yesNoOptions = ['YES', 'NO'];
          this.surveys = 0;
          this.surveyToAnswers = [];
          this.coachesByQuestions = [];
          this.surveyName = '';
          this.survey_response = [];
          this.allInvites = [];
        }

        _createClass(PlayerService, [{
          key: "send",
          value: function send() {
            var _this = this;

            this.sendingSurveyResponse = true;
            this.rest.sendSurveyResponse(Object.assign({
              requestType: 'surveys_response',
              survey_response: this.survey_response
            }, this.sendResponse)).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var alert, _alert;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.sendingSurveyResponse = false;

                        if (!(data.status === 'success')) {
                          _context.next = 11;
                          break;
                        }

                        _context.next = 4;
                        return this.alertController.create({
                          cssClass: 'sendSurvey',
                          message: 'Your Survey is Forwarded.',
                          backdropDismiss: false,
                          buttons: [{
                            text: 'Ok',
                            handler: function handler() {
                              _this2.survey_response = [];

                              _this2.displaySurvey();
                            },
                            cssClass: 'btn_ok'
                          }]
                        });

                      case 4:
                        alert = _context.sent;
                        _context.next = 7;
                        return alert.present();

                      case 7:
                        _context.next = 9;
                        return alert.onDidDismiss();

                      case 9:
                        _context.next = 18;
                        break;

                      case 11:
                        _context.next = 13;
                        return this.alertController.create({
                          cssClass: 'sendSurvey',
                          message: 'Something went wrong!',
                          backdropDismiss: false,
                          buttons: [{
                            text: 'Ok',
                            handler: function handler() {
                              _this2.survey_response = [];

                              _this2.displaySurvey();
                            },
                            cssClass: 'btn_ok'
                          }]
                        });

                      case 13:
                        _alert = _context.sent;
                        _context.next = 16;
                        return _alert.present();

                      case 16:
                        _context.next = 18;
                        return _alert.onDidDismiss();

                      case 18:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.rest.logout({
              users_id: this.player.users_id
            });
            localStorage.removeItem('user');
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('team');
            localStorage.removeItem('accountType');
            this.rest.authState.next(false);
            this.navCtrl.navigateRoot('/home');
          }
        }, {
          key: "getSurvey",
          value: function getSurvey(id) {
            var _this3 = this;

            console.log('FORM NOTI', this.displaySurveyStatus);
            this.isLoading = true;
            this.rest.getSurvey({
              requestType: 'surveys_list',
              player_id: id
            }).subscribe(function (data) {
              console.log('surveys_list', data);
              _this3.isLoading = false;

              if (data.available_surveys.length === 0) {
                _this3.displaySurveyStatus = true;
                _this3.displaySurveys = false;
              } else {
                _this3.numberOfSurvey = data.available_surveys.length;
                _this3.coachesByQuestions = data.available_surveys;

                _this3.displaySurvey();
              }
            });
          }
        }, {
          key: "displaySurvey",
          value: function displaySurvey() {
            if (this.surveys >= this.numberOfSurvey) {
              this.surveyName = '';
              this.surveyToAnswers = [];
              this.displaySurveyStatus = true;
              this.displaySurveys = false; // this.isLoading = false;
            } else {
              if (this.coachesByQuestions[this.surveys].survey_response === 'No') {
                this.sendResponse = {
                  coach_id: this.coachesByQuestions[this.surveys].coach_id,
                  player_id: this.player.users_id,
                  surveys_id: this.coachesByQuestions[this.surveys].surveys_id
                };
                this.surveyName = this.coachesByQuestions[this.surveys].survey_name;
                this.surveyToAnswers = this.coachesByQuestions[this.surveys].questions_list;
                this.surveys++;
                console.log('displaySurvey', this.surveyToAnswers);
              } else {
                this.surveys++;
                this.displaySurvey();
              }
            }
          }
        }, {
          key: "getAnsByChild",
          value: function getAnsByChild(questionAns) {
            var index = this.survey_response.findIndex(function (e) {
              return e.question_id === questionAns.question.question_id;
            });

            if (index === -1) {
              this.survey_response.push({
                question_id: questionAns.question.question_id,
                answer: questionAns.answer
              });
            } else {
              this.survey_response[index].answer = questionAns.answer;
            }
          }
        }, {
          key: "getQuestionID",
          value: function getQuestionID(id) {
            if (this.getID === id) {
              this.getID = null;
            } else {
              this.getID = id;
            }
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this4 = this;

            setTimeout(function () {
              _this4.displaySurveyStatus = false;
              _this4.displaySurveys = true;
              _this4.allInvites = [];
              _this4.surveys = 0;
              _this4.coachesByQuestions = [];
              _this4.surveyToAnswers = [];
              _this4.survey_response = [];
              _this4.player = JSON.parse(localStorage.getItem('user'));
              console.log('userdata', _this4.player);

              _this4.getTeamRequest(_this4.player.users_id);

              _this4.getSurvey(_this4.player.users_id);

              event.target.complete();
            }, 1000);
          }
        }, {
          key: "getTeamRequest",
          value: function getTeamRequest(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.rest.getTeamRequest({
                        requestType: 'get_team_invites',
                        player_id: id
                      }).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var _this6 = this;

                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (data.status === 'success') {
                                    this.allInvites = data.allInvites;
                                  }

                                  if (!(this.allInvites.length > 0)) {
                                    _context3.next = 3;
                                    break;
                                  }

                                  return _context3.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                    var invites, alert;
                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            invites = 0;
                                            invites;

                                          case 2:
                                            if (!(invites < _this6.allInvites.length)) {
                                              _context2.next = 13;
                                              break;
                                            }

                                            _context2.next = 5;
                                            return _this6.alertController.create({
                                              cssClass: 'requestAlert',
                                              message: "".concat(_this6.allInvites[invites].coach_name, " want to add you to his team!"),
                                              buttons: [{
                                                text: 'ACCEPT',
                                                handler: function handler() {
                                                  _this6.sendInviteResponse('accepted', _this6.allInvites[invites].teams_id);
                                                },
                                                cssClass: 'btn_accept'
                                              }, {
                                                text: 'REJECT',
                                                handler: function handler() {
                                                  _this6.sendInviteResponse('Rejected', _this6.allInvites[invites].teams_id);
                                                },
                                                cssClass: 'btn_reject'
                                              }]
                                            });

                                          case 5:
                                            alert = _context2.sent;
                                            _context2.next = 8;
                                            return alert.present();

                                          case 8:
                                            _context2.next = 10;
                                            return alert.onDidDismiss();

                                          case 10:
                                            invites++;
                                            _context2.next = 2;
                                            break;

                                          case 13:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2);
                                  })(), "t0", 3);

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "sendInviteResponse",
          value: function sendInviteResponse(res, teamId) {
            var _this7 = this;

            this.rest.inviteResponse({
              requestType: 'accept_invite',
              teams_id: teamId,
              response: res
            }).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        console.log(data);

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
            });
          }
        }, {
          key: "surveyReady",
          value: function surveyReady() {
            this.displaySurveyStatus = false;
            this.displaySurveys = true;
            this.allInvites = [];
            this.surveys = 0;
            this.coachesByQuestions = [];
            this.surveyToAnswers = [];
            this.survey_response = [];
            this.player = JSON.parse(localStorage.getItem('user'));
            this.getTeamRequest(this.player.users_id);
            this.getSurvey(this.player.users_id);
          }
        }, {
          key: "sendDeviceID",
          value: function sendDeviceID() {
            var _this8 = this;

            var deviceId = localStorage.getItem('deviceID');
            var user = JSON.parse(localStorage.getItem('user'));
            this.rest.sendDeviceId({
              deviceID: deviceId,
              users_id: user.users_id
            }).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        console.log(data);

                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
            });
          }
        }]);

        return PlayerService;
      }();

      PlayerService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      PlayerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PlayerService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/rest.service */
      "tnAE");
      /* harmony import */


      var _services_coach_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/coach.service */
      "dJ/d");
      /* harmony import */


      var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/player.service */
      "QIP1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* eslint-disable radix */


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(oneSignal, navCtrl, router, platform, toastController, rest, alertController, playerService, coachService) {
          _classCallCheck(this, AppComponent);

          this.oneSignal = oneSignal;
          this.navCtrl = navCtrl;
          this.router = router;
          this.platform = platform;
          this.toastController = toastController;
          this.rest = rest;
          this.alertController = alertController;
          this.playerService = playerService;
          this.coachService = coachService; // oneSignalAppId = '33f6031f-46c8-4ee0-bb26-f857eea1e851';
          // oneSignalFirebaseId = '809200048320';

          this.oneSignalAppId = 'f629e689-5418-4d75-ab66-6e5dfb1d5226';
          this.oneSignalFirebaseId = '155437973416';
          this.pushNotification();
          this.userId = JSON.parse(localStorage.getItem('user'));
          console.log('userdetails====', this.userId);
          this.oneSignal.setLogLevel({
            logLevel: 6,
            visualLevel: 2
          });
          this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
          this.oneSignal.endInit();
          this.oneSignal.getIds().then(function (identity) {
            console.log('one signal id device id in app component,', identity);
            localStorage.setItem('deviceID', identity.userId);
          });
        }

        _createClass(AppComponent, [{
          key: "pushNotification",
          value: function pushNotification() {
            var _this9 = this;

            this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var user, accountType, alert;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        this.showNotificaton(data.payload.body);
                        user = JSON.parse(localStorage.getItem('user'));
                        accountType = localStorage.getItem('accountType');

                        if (accountType === 'PLAYER') {
                          if (data.payload.additionalData.type === 'add_team') {
                            this.playerService.getTeamRequest(user.users_id);
                          }

                          if (data.payload.additionalData.type === 'survey_received') {
                            this.playerService.surveyReady();
                          }
                        }

                        if (!(accountType === 'COACH')) {
                          _context7.next = 13;
                          break;
                        }

                        if (!(data.payload.additionalData.type === 'invite_response')) {
                          _context7.next = 13;
                          break;
                        }

                        _context7.next = 8;
                        return this.alertController.create({
                          cssClass: 'requestAcceptReject',
                          message: data.payload.body,
                          buttons: [{
                            text: 'Ok',
                            cssClass: 'btn_ok'
                          }]
                        });

                      case 8:
                        alert = _context7.sent;
                        _context7.next = 11;
                        return alert.present();

                      case 11:
                        _context7.next = 13;
                        return alert.onDidDismiss();

                      case 13:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) {
              var user = JSON.parse(localStorage.getItem('user'));

              if (parseInt(user.roles_id) === 2) {
                if (data.notification.payload.additionalData.type === 'survey_response') {
                  _this9.router.navigate(['view-answers']);
                }
              }
            });
            this.oneSignal.endInit();
          }
        }, {
          key: "showNotificaton",
          value: function showNotificaton(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        header: 'AW-Football Notification',
                        message: msg,
                        color: 'light',
                        duration: 2000,
                        position: 'top',
                        buttons: [{
                          text: 'Ok',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      toast = _context8.sent;
                      _context8.next = 5;
                      return toast.present();

                    case 5:
                      _context8.next = 7;
                      return toast.onDidDismiss();

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__["OneSignal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]
        }, {
          type: _services_coach_service__WEBPACK_IMPORTED_MODULE_7__["CoachService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-click-outside */
      "qew9");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "dJ/d":
    /*!*******************************************!*\
      !*** ./src/app/services/coach.service.ts ***!
      \*******************************************/

    /*! exports provided: CoachService */

    /***/
    function dJD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoachService", function () {
        return CoachService;
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


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rest.service */
      "tnAE");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* eslint-disable @typescript-eslint/naming-convention */


      var CoachService = /*#__PURE__*/function () {
        function CoachService(route, router, rest, alertController, navCtrl) {
          _classCallCheck(this, CoachService);

          this.route = route;
          this.router = router;
          this.rest = rest;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.deleteId = null;
          this.addLoading = false;
          this.addLoading1 = false;
          this.delLoading = false;
          this.isLoading = true;
          this.error = {
            status: false,
            message: ''
          };
          this.coach = JSON.parse(localStorage.getItem('user'));
          this.displayInput = false;
          this.team = [];
          this.teamname = '';
          this.inputvalue = false;
          this.textvalue = false;
          this.isdisabled = true;
        }

        _createClass(CoachService, [{
          key: "toggle",
          value: function toggle() {
            this.addLoading = false;
            this.addLoading1 = false;

            if (this.teamname == '' || this.teamname == null) {
              console.log('empty'); // this.inputvalue=false;

              this.isdisabled = false;
            } else {
              console.log('notempty', this.teamname); // this.textvalue=true;
              // this.inputvalue=true;

              this.addLoading1 = true;
              this.isdisabled = true;
            }

            this.displayInput = !this.displayInput;
          }
        }, {
          key: "addTeam",
          value: function addTeam(el) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      console.log('value', el.value);

                      if (!(el.value !== '')) {
                        _context9.next = 8;
                        break;
                      }

                      this.addLoading1 = true;
                      this.teamname = el.value;
                      _context9.next = 6;
                      return this.alertController.create({
                        cssClass: 'sendTeamRequest',
                        message: "Team name added ".concat(el.value.trim()),
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Ok',
                          cssClass: 'btn_ok'
                        }]
                      });

                    case 6:
                      alert = _context9.sent;
                      console.log('team_name', this.teamname);

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "addPlayer",
          value: function addPlayer(el) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!(this.teamname === '')) {
                        _context11.next = 10;
                        break;
                      }

                      _context11.next = 3;
                      return this.alertController.create({
                        cssClass: 'sendTeamRequest',
                        message: "Team name must be added",
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Ok',
                          cssClass: 'btn_ok'
                        }]
                      });

                    case 3:
                      alert = _context11.sent;
                      _context11.next = 6;
                      return alert.present();

                    case 6:
                      _context11.next = 8;
                      return alert.onDidDismiss();

                    case 8:
                      _context11.next = 11;
                      break;

                    case 10:
                      if (el.value !== '') {
                        this.addLoading = true;
                        this.rest.addPlayers({
                          requestType: 'add_player',
                          user_name: el.value.trim(),
                          coach_id: this.coach.users_id,
                          team_name: this.teamname
                        }).subscribe(function (data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                            var _this11 = this;

                            var _alert2;

                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    console.log('data of addPlayers', data);
                                    this.addLoading = false;

                                    if (!(data.status === 'Error')) {
                                      _context10.next = 9;
                                      break;
                                    }

                                    this.error.status = true;
                                    this.error.message = data.msg;
                                    setTimeout(function () {
                                      _this11.error.status = false;
                                      _this11.error.message = '';
                                    }, 3000);
                                    return _context10.abrupt("return");

                                  case 9:
                                    if (!(data.status === 'success')) {
                                      _context10.next = 19;
                                      break;
                                    }

                                    this.team = data.team;
                                    this.displayInput = !this.displayInput;
                                    _context10.next = 14;
                                    return this.alertController.create({
                                      cssClass: 'sendTeamRequest',
                                      message: "Request forwarded to ".concat(el.value.trim()),
                                      backdropDismiss: false,
                                      buttons: [{
                                        text: 'Ok',
                                        cssClass: 'btn_ok'
                                      }]
                                    });

                                  case 14:
                                    _alert2 = _context10.sent;
                                    _context10.next = 17;
                                    return _alert2.present();

                                  case 17:
                                    _context10.next = 19;
                                    return _alert2.onDidDismiss();

                                  case 19:
                                  case "end":
                                    return _context10.stop();
                                }
                              }
                            }, _callee10, this);
                          }));
                        }, function (error) {
                          _this10.isLoading = false;
                          _this10.addLoading = false;
                          _this10.error.status = true;
                          _this10.error.message = 'Something went wrong!';
                          setTimeout(function () {
                            _this10.error.status = false;
                            _this10.error.message = '';
                          }, 3000);
                        });
                      }

                    case 11:
                      console.log('playername', el.value);

                    case 12:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "removePlayer",
          value: function removePlayer(id) {
            var _this12 = this;

            this.delLoading = true;
            this.deleteId = id;
            this.rest.removePlayer({
              requestType: 'delete_team',
              teams_id: id,
              coach_id: this.coach.users_id
            }).subscribe(function (data) {
              _this12.deleteId = null;
              _this12.delLoading = false;

              if (data.status === 'error') {
                _this12.error.status = true;
                _this12.error.message = 'Error in deleteing player!';
                setTimeout(function () {
                  _this12.error.status = false;
                  _this12.error.message = '';
                }, 3000);
              } else if (data.status === 'success') {
                _this12.team = [];

                var _iterator = _createForOfIteratorHelper(data.team),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var player = _step.value;

                    if (player.status === 'Active') {
                      _this12.team.push(player);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                _this12.error.status = true;
                _this12.error.message = 'Something went wrong!';
                setTimeout(function () {
                  _this12.error.status = false;
                  _this12.error.message = '';
                }, 3000);
              }
            });
          }
        }, {
          key: "onEnter",
          value: function onEnter(el) {
            this.addPlayer(el);
          }
        }, {
          key: "onEnterTeam",
          value: function onEnterTeam(el) {
            console.log('value el', el);
            this.addTeam(el);
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.navigateRoot('/home-coach');
          }
        }, {
          key: "getPlayers",
          value: function getPlayers() {
            var _this13 = this;

            this.rest.getPlayers({
              requestType: 'get_player',
              coach_id: this.coach.users_id
            }).subscribe(function (data) {
              console.log('data to get players', data);

              if (data.status === 'Error') {
                _this13.isLoading = false;
              } else {
                _this13.team = [];
                _this13.teamname = data.name;

                if (_this13.teamname == '' || _this13.teamname == null) {
                  console.log('empty'); // this.inputvalue=false;

                  _this13.isdisabled = false;
                  _this13.displayInput = false;
                } else {
                  console.log('notempty', _this13.teamname); // this.textvalue=true;
                  // this.inputvalue=true;

                  _this13.addLoading1 = true;
                  _this13.isdisabled = true;

                  if (_this13.displayInput == false) {
                    _this13.displayInput = true;
                    console.log('displayInput', _this13.displayInput);
                  } // else{
                  //   this.displayInput=false;
                  //   console.log('displayInput',this.displayInput)
                  // }

                }

                console.log('to get teamname', _this13.teamname);
                _this13.isLoading = false;

                var _iterator2 = _createForOfIteratorHelper(data.team),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var player = _step2.value;

                    if (player.status === 'Active') {
                      _this13.team.push(player);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this14 = this;

            setTimeout(function () {
              _this14.isLoading = true;
              _this14.team = [];
              _this14.coach = JSON.parse(localStorage.getItem('user'));

              _this14.getPlayers();

              event.target.complete(); // if(this.displayInput==this.displayInput){
              //   this.displayInput=!this.displayInput
              //   console.log('true');
              // }if(this.displayInput=!this.displayInput){
              //   this.displayInput=!this.displayInput
              //   console.log('false');
              // }
            }, 1000);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getPlayers();
          }
        }]);

        return CoachService;
      }();

      CoachService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      CoachService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CoachService);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "tnAE":
    /*!******************************************!*\
      !*** ./src/app/services/rest.service.ts ***!
      \******************************************/

    /*! exports provided: RestService */

    /***/
    function tnAE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestService", function () {
        return RestService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* eslint-disable @typescript-eslint/naming-convention */


      var RestService = /*#__PURE__*/function () {
        function RestService(http, platform) {
          var _this15 = this;

          _classCallCheck(this, RestService);

          this.http = http;
          this.platform = platform;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          this.phoneId = ''; // baseURL = 'https://aw-football.com/webservices';

          this.baseURL = 'https://aw-football.com/Webservices/'; // baseURL = 'https://dev.eigix.com/aw-football/Webservices';

          this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
          this.headers.append('Access-Control-Allow-Origin', '*');
          this.headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
          this.platform.ready().then(function () {
            _this15.isLoggedIn();
          });
        }

        _createClass(RestService, [{
          key: "signIn",
          value: function signIn(data) {
            return this.http.post("".concat(this.baseURL, "/login/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "signUp",
          value: function signUp(data) {
            return this.http.post("".concat(this.baseURL, "/signup/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "addPlayers",
          value: function addPlayers(data) {
            return this.http.post("".concat(this.baseURL, "/manage_teams/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "getPlayers",
          value: function getPlayers(data) {
            return this.http.post("".concat(this.baseURL, "/manage_teams/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "removePlayer",
          value: function removePlayer(data) {
            return this.http.post("".concat(this.baseURL, "/manage_teams/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "getQuestions",
          value: function getQuestions(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "sendSurvey",
          value: function sendSurvey(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "savedSurvey",
          value: function savedSurvey(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "getSurvey",
          value: function getSurvey(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "getSurveys",
          value: function getSurveys(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "sendSurveyResponse",
          value: function sendSurveyResponse(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "updatetime",
          value: function updatetime(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "getCoachSurvey",
          value: function getCoachSurvey(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "getPlayersAnswer",
          value: function getPlayersAnswer(data) {
            return this.http.post("".concat(this.baseURL, "/Survey/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "forgotEmail",
          value: function forgotEmail(data) {
            return this.http.post("".concat(this.baseURL, "/forgot_password/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "sendPinCode",
          value: function sendPinCode(data) {
            return this.http.post("".concat(this.baseURL, "/forgot_password/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(data) {
            return this.http.post("".concat(this.baseURL, "/forgot_password/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "getTeamRequest",
          value: function getTeamRequest(data) {
            return this.http.post("".concat(this.baseURL, "/manage_teams/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "inviteResponse",
          value: function inviteResponse(data) {
            return this.http.post("".concat(this.baseURL, "/manage_teams/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "sendDeviceId",
          value: function sendDeviceId(data) {
            return this.http.post("".concat(this.baseURL, "/update_onsignal/"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var rememberMe = JSON.parse(localStorage.getItem('rememberMe'));

            if (rememberMe) {
              var user = JSON.parse(localStorage.getItem('user'));

              if (user) {
                this.authState.next(true);
              } else {
                this.authState.next(false);
              }
            } else {
              localStorage.removeItem('user');
              localStorage.removeItem('rememberMe');
              localStorage.removeItem('team');
              localStorage.removeItem('accountType');
              this.authState.next(false);
            }
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authState.value;
          }
        }, {
          key: "logout",
          value: function logout(data) {
            return this.http.post("".concat(this.baseURL, "/logout"), JSON.stringify(data), {
              headers: this.headers
            });
          }
        }]);

        return RestService;
      }();

      RestService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      RestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RestService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'signin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | signin-signin-module */
          "signin-signin-module").then(__webpack_require__.bind(null,
          /*! ./signin/signin.module */
          "0m0A")).then(function (m) {
            return m.SigninPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | signin-signin-module */
          "signin-signin-module").then(__webpack_require__.bind(null,
          /*! ./signin/signin.module */
          "0m0A")).then(function (m) {
            return m.SigninPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }, {
        path: 'signin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | signin-signin-module */
          "signin-signin-module").then(__webpack_require__.bind(null,
          /*! ./signin/signin.module */
          "0m0A")).then(function (m) {
            return m.SigninPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | signup-signup-module */
          "signup-signup-module").then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "T9iC")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-password-forgot-password-module */
          "forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./forgot-password/forgot-password.module */
          "JgOp")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'player2player',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | player2player-player2player-module */
          "player2player-player2player-module").then(__webpack_require__.bind(null,
          /*! ./player2player/player2player.module */
          "VLDW")).then(function (m) {
            return m.Player2playerPageModule;
          });
        }
      }, {
        path: 'question2question',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | question2question-question2question-module */
          "question2question-question2question-module").then(__webpack_require__.bind(null,
          /*! ./question2question/question2question.module */
          "KWu8")).then(function (m) {
            return m.Question2questionPageModule;
          });
        }
      }, {
        path: 'send-survey',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | send-survey-send-survey-module */
          "send-survey-send-survey-module").then(__webpack_require__.bind(null,
          /*! ./send-survey/send-survey.module */
          "i7nJ")).then(function (m) {
            return m.SendSurveyPageModule;
          });
        }
      }, {
        path: 'player-survey',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | player-survey-player-survey-module */
          "player-survey-player-survey-module").then(__webpack_require__.bind(null,
          /*! ./player-survey/player-survey.module */
          "rlR9")).then(function (m) {
            return m.PlayerSurveyPageModule;
          });
        }
      }, {
        path: 'create-survey',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | create-survey-create-survey-module */
          "create-survey-create-survey-module").then(__webpack_require__.bind(null,
          /*! ./create-survey/create-survey.module */
          "fE+h")).then(function (m) {
            return m.CreateSurveyPageModule;
          });
        }
      }, {
        path: 'home-coach',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-coach-home-coach-module */
          "home-coach-home-coach-module").then(__webpack_require__.bind(null,
          /*! ./home-coach/home-coach.module */
          "sesZ")).then(function (m) {
            return m.HomeCoachPageModule;
          });
        }
      }, {
        path: 'your-team',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | your-team-your-team-module */
          "your-team-your-team-module").then(__webpack_require__.bind(null,
          /*! ./your-team/your-team.module */
          "Mzw8")).then(function (m) {
            return m.YourTeamPageModule;
          });
        }
      }, {
        path: 'view-answers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | view-answers-view-answers-module */
          "view-answers-view-answers-module").then(__webpack_require__.bind(null,
          /*! ./view-answers/view-answers.module */
          "Jfia")).then(function (m) {
            return m.ViewAnswersPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map