(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\najam\aw-football\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "QIP1":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest.service */ "tnAE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");

/* eslint-disable @typescript-eslint/naming-convention */





let PlayerService = class PlayerService {
    constructor(route, router, rest, alertController, navCtrl) {
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
    send() {
        this.sendingSurveyResponse = true;
        this.rest
            .sendSurveyResponse(Object.assign({ requestType: 'surveys_response', survey_response: this.survey_response }, this.sendResponse))
            .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sendingSurveyResponse = false;
            if (data.status === 'success') {
                const alert = yield this.alertController.create({
                    cssClass: 'sendSurvey',
                    message: 'Your Survey is Forwarded.',
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                                this.survey_response = [];
                                this.displaySurvey();
                            },
                            cssClass: 'btn_ok',
                        },
                    ],
                });
                yield alert.present();
                yield alert.onDidDismiss();
            }
            else {
                const alert = yield this.alertController.create({
                    cssClass: 'sendSurvey',
                    message: 'Something went wrong!',
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                                this.survey_response = [];
                                this.displaySurvey();
                            },
                            cssClass: 'btn_ok',
                        },
                    ],
                });
                yield alert.present();
                yield alert.onDidDismiss();
            }
        }));
    }
    logout() {
        this.rest.logout({
            users_id: this.player.users_id,
        });
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('team');
        localStorage.removeItem('accountType');
        this.rest.authState.next(false);
        this.navCtrl.navigateRoot('/home');
    }
    getSurvey(id) {
        console.log('FORM NOTI', this.displaySurveyStatus);
        this.isLoading = true;
        this.rest
            .getSurvey({
            requestType: 'surveys_list',
            player_id: id,
        })
            .subscribe((data) => {
            console.log('surveys_list', data);
            this.isLoading = false;
            if (data.available_surveys.length === 0) {
                this.displaySurveyStatus = true;
                this.displaySurveys = false;
            }
            else {
                this.numberOfSurvey = data.available_surveys.length;
                this.coachesByQuestions = data.available_surveys;
                this.displaySurvey();
            }
        });
    }
    displaySurvey() {
        if (this.surveys >= this.numberOfSurvey) {
            this.surveyName = '';
            this.surveyToAnswers = [];
            this.displaySurveyStatus = true;
            this.displaySurveys = false;
            // this.isLoading = false;
        }
        else {
            if (this.coachesByQuestions[this.surveys].survey_response === 'No') {
                this.sendResponse = {
                    coach_id: this.coachesByQuestions[this.surveys].coach_id,
                    player_id: this.player.users_id,
                    surveys_id: this.coachesByQuestions[this.surveys].surveys_id,
                };
                this.surveyName = this.coachesByQuestions[this.surveys].survey_name;
                this.surveyToAnswers =
                    this.coachesByQuestions[this.surveys].questions_list;
                this.surveys++;
                console.log('displaySurvey', this.surveyToAnswers);
            }
            else {
                this.surveys++;
                this.displaySurvey();
            }
        }
    }
    getAnsByChild(questionAns) {
        const index = this.survey_response.findIndex((e) => e.question_id === questionAns.question.question_id);
        if (index === -1) {
            this.survey_response.push({
                question_id: questionAns.question.question_id,
                answer: questionAns.answer,
            });
        }
        else {
            this.survey_response[index].answer = questionAns.answer;
        }
    }
    getQuestionID(id) {
        if (this.getID === id) {
            this.getID = null;
        }
        else {
            this.getID = id;
        }
    }
    doRefresh(event) {
        setTimeout(() => {
            this.displaySurveyStatus = false;
            this.displaySurveys = true;
            this.allInvites = [];
            this.surveys = 0;
            this.coachesByQuestions = [];
            this.surveyToAnswers = [];
            this.survey_response = [];
            this.player = JSON.parse(localStorage.getItem('user'));
            console.log('userdata', this.player);
            this.getTeamRequest(this.player.users_id);
            this.getSurvey(this.player.users_id);
            event.target.complete();
        }, 1000);
    }
    getTeamRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rest
                .getTeamRequest({
                requestType: 'get_team_invites',
                player_id: id,
            })
                .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data.status === 'success') {
                    this.allInvites = data.allInvites;
                }
                if (this.allInvites.length > 0) {
                    let invites = 0;
                    for (invites; invites < this.allInvites.length; invites++) {
                        const alert = yield this.alertController.create({
                            cssClass: 'requestAlert',
                            message: `${this.allInvites[invites].coach_name} want to add you to his team!`,
                            buttons: [
                                {
                                    text: 'ACCEPT',
                                    handler: () => {
                                        this.sendInviteResponse('accepted', this.allInvites[invites].teams_id);
                                    },
                                    cssClass: 'btn_accept',
                                },
                                {
                                    text: 'REJECT',
                                    handler: () => {
                                        this.sendInviteResponse('Rejected', this.allInvites[invites].teams_id);
                                    },
                                    cssClass: 'btn_reject',
                                },
                            ],
                        });
                        yield alert.present();
                        yield alert.onDidDismiss();
                    }
                }
            }));
        });
    }
    sendInviteResponse(res, teamId) {
        this.rest
            .inviteResponse({
            requestType: 'accept_invite',
            teams_id: teamId,
            response: res,
        })
            .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(data);
        }));
    }
    surveyReady() {
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
    sendDeviceID() {
        const deviceId = localStorage.getItem('deviceID');
        const user = JSON.parse(localStorage.getItem('user'));
        this.rest
            .sendDeviceId({
            deviceID: deviceId,
            users_id: user.users_id,
        })
            .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(data);
        }));
    }
};
PlayerService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PlayerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], PlayerService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/rest.service */ "tnAE");
/* harmony import */ var _services_coach_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/coach.service */ "dJ/d");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/player.service */ "QIP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");



/* eslint-disable radix */









let AppComponent = class AppComponent {
    constructor(oneSignal, navCtrl, router, platform, toastController, rest, alertController, playerService, coachService) {
        this.oneSignal = oneSignal;
        this.navCtrl = navCtrl;
        this.router = router;
        this.platform = platform;
        this.toastController = toastController;
        this.rest = rest;
        this.alertController = alertController;
        this.playerService = playerService;
        this.coachService = coachService;
        // oneSignalAppId = '33f6031f-46c8-4ee0-bb26-f857eea1e851';
        // oneSignalFirebaseId = '809200048320';
        this.oneSignalAppId = 'f629e689-5418-4d75-ab66-6e5dfb1d5226';
        this.oneSignalFirebaseId = '155437973416';
        this.pushNotification();
        this.userId = JSON.parse(localStorage.getItem('user'));
        console.log('userdetails====', this.userId);
        this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
        this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
        this.oneSignal.endInit();
        this.oneSignal.getIds().then((identity) => {
            console.log('one signal id device id in app component,', identity);
            localStorage.setItem('deviceID', identity.userId);
        });
    }
    pushNotification() {
        this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showNotificaton(data.payload.body);
            const user = JSON.parse(localStorage.getItem('user'));
            const accountType = localStorage.getItem('accountType');
            if (accountType === 'PLAYER') {
                if (data.payload.additionalData.type === 'add_team') {
                    this.playerService.getTeamRequest(user.users_id);
                }
                if (data.payload.additionalData.type === 'survey_received') {
                    this.playerService.surveyReady();
                }
            }
            if (accountType === 'COACH') {
                if (data.payload.additionalData.type === 'invite_response') {
                    const alert = yield this.alertController.create({
                        cssClass: 'requestAcceptReject',
                        message: data.payload.body,
                        buttons: [
                            {
                                text: 'Ok',
                                cssClass: 'btn_ok',
                            },
                        ],
                    });
                    yield alert.present();
                    yield alert.onDidDismiss();
                }
            }
        }));
        this.oneSignal.handleNotificationOpened().subscribe((data) => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (parseInt(user.roles_id) === 2) {
                if (data.notification.payload.additionalData.type === 'survey_response') {
                    this.router.navigate(['view-answers']);
                }
            }
        });
        this.oneSignal.endInit();
    }
    showNotificaton(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'AW-Football Notification',
                message: msg,
                color: 'light',
                duration: 2000,
                position: 'top',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                    },
                ],
            });
            yield toast.present();
            yield toast.onDidDismiss();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__["OneSignal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"] },
    { type: _services_coach_service__WEBPACK_IMPORTED_MODULE_7__["CoachService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-click-outside */ "qew9");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");










let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "dJ/d":
/*!*******************************************!*\
  !*** ./src/app/services/coach.service.ts ***!
  \*******************************************/
/*! exports provided: CoachService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachService", function() { return CoachService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "tnAE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");

/* eslint-disable @typescript-eslint/naming-convention */





let CoachService = class CoachService {
    constructor(route, router, rest, alertController, navCtrl) {
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
            message: '',
        };
        this.coach = JSON.parse(localStorage.getItem('user'));
        this.displayInput = false;
        this.team = [];
        this.teamname = '';
        this.inputvalue = false;
        this.textvalue = false;
        this.isdisabled = true;
    }
    toggle() {
        this.addLoading = false;
        this.addLoading1 = false;
        if (this.teamname == '' || this.teamname == null) {
            console.log('empty');
            // this.inputvalue=false;
            this.isdisabled = false;
        }
        else {
            console.log('notempty', this.teamname);
            // this.textvalue=true;
            // this.inputvalue=true;
            this.addLoading1 = true;
            this.isdisabled = true;
        }
        this.displayInput = !this.displayInput;
    }
    addTeam(el) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('value', el.value);
            if (el.value !== '') {
                this.addLoading1 = true;
                this.teamname = el.value;
                const alert = yield this.alertController.create({
                    cssClass: 'sendTeamRequest',
                    message: `Team name added ${el.value.trim()}`,
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: 'Ok',
                            cssClass: 'btn_ok',
                        },
                    ],
                });
                console.log('team_name', this.teamname);
            }
        });
    }
    addPlayer(el) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.teamname === '') {
                const alert = yield this.alertController.create({
                    cssClass: 'sendTeamRequest',
                    message: `Team name must be added`,
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: 'Ok',
                            cssClass: 'btn_ok',
                        },
                    ],
                });
                yield alert.present();
                yield alert.onDidDismiss();
            }
            else {
                if (el.value !== '') {
                    this.addLoading = true;
                    this.rest
                        .addPlayers({
                        requestType: 'add_player',
                        user_name: el.value.trim(),
                        coach_id: this.coach.users_id,
                        team_name: this.teamname
                    })
                        .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log('data of addPlayers', data);
                        this.addLoading = false;
                        if (data.status === 'Error') {
                            this.error.status = true;
                            this.error.message = data.msg;
                            setTimeout(() => {
                                this.error.status = false;
                                this.error.message = '';
                            }, 3000);
                            return;
                        }
                        else if (data.status === 'success') {
                            this.team = data.team;
                            this.displayInput = !this.displayInput;
                            const alert = yield this.alertController.create({
                                cssClass: 'sendTeamRequest',
                                message: `Request forwarded to ${el.value.trim()}`,
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Ok',
                                        cssClass: 'btn_ok',
                                    },
                                ],
                            });
                            yield alert.present();
                            yield alert.onDidDismiss();
                        }
                    }), (error) => {
                        this.isLoading = false;
                        this.addLoading = false;
                        this.error.status = true;
                        this.error.message = 'Something went wrong!';
                        setTimeout(() => {
                            this.error.status = false;
                            this.error.message = '';
                        }, 3000);
                    });
                }
            }
            console.log('playername', el.value);
        });
    }
    removePlayer(id) {
        this.delLoading = true;
        this.deleteId = id;
        this.rest
            .removePlayer({
            requestType: 'delete_team',
            teams_id: id,
            coach_id: this.coach.users_id,
        })
            .subscribe((data) => {
            this.deleteId = null;
            this.delLoading = false;
            if (data.status === 'error') {
                this.error.status = true;
                this.error.message = 'Error in deleteing player!';
                setTimeout(() => {
                    this.error.status = false;
                    this.error.message = '';
                }, 3000);
            }
            else if (data.status === 'success') {
                this.team = [];
                for (const player of data.team) {
                    if (player.status === 'Active') {
                        this.team.push(player);
                    }
                }
            }
            else {
                this.error.status = true;
                this.error.message = 'Something went wrong!';
                setTimeout(() => {
                    this.error.status = false;
                    this.error.message = '';
                }, 3000);
            }
        });
    }
    onEnter(el) {
        this.addPlayer(el);
    }
    onEnterTeam(el) {
        console.log('value el', el);
        this.addTeam(el);
    }
    back() {
        this.navCtrl.navigateRoot('/home-coach');
    }
    getPlayers() {
        this.rest
            .getPlayers({
            requestType: 'get_player',
            coach_id: this.coach.users_id,
        })
            .subscribe((data) => {
            console.log('data to get players', data);
            if (data.status === 'Error') {
                this.isLoading = false;
            }
            else {
                this.team = [];
                this.teamname = data.name;
                if (this.teamname == '' || this.teamname == null) {
                    console.log('empty');
                    // this.inputvalue=false;
                    this.isdisabled = false;
                    this.displayInput = false;
                }
                else {
                    console.log('notempty', this.teamname);
                    // this.textvalue=true;
                    // this.inputvalue=true;
                    this.addLoading1 = true;
                    this.isdisabled = true;
                    if (this.displayInput == false) {
                        this.displayInput = true;
                        console.log('displayInput', this.displayInput);
                    }
                    // else{
                    //   this.displayInput=false;
                    //   console.log('displayInput',this.displayInput)
                    // }
                }
                console.log('to get teamname', this.teamname);
                this.isLoading = false;
                for (const player of data.team) {
                    if (player.status === 'Active') {
                        this.team.push(player);
                    }
                }
            }
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.isLoading = true;
            this.team = [];
            this.coach = JSON.parse(localStorage.getItem('user'));
            this.getPlayers();
            event.target.complete();
            // if(this.displayInput==this.displayInput){
            //   this.displayInput=!this.displayInput
            //   console.log('true');
            // }if(this.displayInput=!this.displayInput){
            //   this.displayInput=!this.displayInput
            //   console.log('false');
            // }
        }, 1000);
    }
    ionViewWillEnter() {
        this.getPlayers();
    }
};
CoachService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
CoachService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CoachService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "tnAE":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");

/* eslint-disable @typescript-eslint/naming-convention */




let RestService = class RestService {
    constructor(http, platform) {
        this.http = http;
        this.platform = platform;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        this.phoneId = '';
        // baseURL = 'https://aw-football.com/webservices';
        this.baseURL = 'https://aw-football.com/Webservices/';
        // baseURL = 'https://dev.eigix.com/aw-football/Webservices';
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        this.platform.ready().then(() => {
            this.isLoggedIn();
        });
    }
    signIn(data) {
        return this.http.post(`${this.baseURL}/login/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    signUp(data) {
        return this.http.post(`${this.baseURL}/signup/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    addPlayers(data) {
        return this.http.post(`${this.baseURL}/manage_teams/`, JSON.stringify(data), { headers: this.headers });
    }
    getPlayers(data) {
        return this.http.post(`${this.baseURL}/manage_teams/`, JSON.stringify(data), { headers: this.headers });
    }
    removePlayer(data) {
        return this.http.post(`${this.baseURL}/manage_teams/`, JSON.stringify(data), { headers: this.headers });
    }
    getQuestions(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    sendSurvey(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    savedSurvey(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    getSurvey(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    getSurveys(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    sendSurveyResponse(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    updatetime(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    getCoachSurvey(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    getPlayersAnswer(data) {
        return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    forgotEmail(data) {
        return this.http.post(`${this.baseURL}/forgot_password/`, JSON.stringify(data), { headers: this.headers });
    }
    sendPinCode(data) {
        return this.http.post(`${this.baseURL}/forgot_password/`, JSON.stringify(data), { headers: this.headers });
    }
    resetPassword(data) {
        return this.http.post(`${this.baseURL}/forgot_password/`, JSON.stringify(data), { headers: this.headers });
    }
    getTeamRequest(data) {
        return this.http.post(`${this.baseURL}/manage_teams/`, JSON.stringify(data), { headers: this.headers });
    }
    inviteResponse(data) {
        return this.http.post(`${this.baseURL}/manage_teams/`, JSON.stringify(data), { headers: this.headers });
    }
    sendDeviceId(data) {
        return this.http.post(`${this.baseURL}/update_onsignal/`, JSON.stringify(data), { headers: this.headers });
    }
    isLoggedIn() {
        const rememberMe = JSON.parse(localStorage.getItem('rememberMe'));
        if (rememberMe) {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                this.authState.next(true);
            }
            else {
                this.authState.next(false);
            }
        }
        else {
            localStorage.removeItem('user');
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('team');
            localStorage.removeItem('accountType');
            this.authState.next(false);
        }
    }
    isAuthenticated() {
        return this.authState.value;
    }
    logout(data) {
        return this.http.post(`${this.baseURL}/logout`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
RestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], RestService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() | signin-signin-module */ "signin-signin-module").then(__webpack_require__.bind(null, /*! ./signin/signin.module */ "0m0A")).then((m) => m.SigninPageModule),
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | signin-signin-module */ "signin-signin-module").then(__webpack_require__.bind(null, /*! ./signin/signin.module */ "0m0A")).then((m) => m.SigninPageModule),
    },
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() | signin-signin-module */ "signin-signin-module").then(__webpack_require__.bind(null, /*! ./signin/signin.module */ "0m0A")).then((m) => m.SigninPageModule),
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() | signup-signup-module */ "signup-signup-module").then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "T9iC")).then((m) => m.SignupPageModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: 'player2player',
        loadChildren: () => __webpack_require__.e(/*! import() | player2player-player2player-module */ "player2player-player2player-module").then(__webpack_require__.bind(null, /*! ./player2player/player2player.module */ "VLDW")).then((m) => m.Player2playerPageModule),
    },
    {
        path: 'question2question',
        loadChildren: () => __webpack_require__.e(/*! import() | question2question-question2question-module */ "question2question-question2question-module").then(__webpack_require__.bind(null, /*! ./question2question/question2question.module */ "KWu8")).then((m) => m.Question2questionPageModule),
    },
    {
        path: 'send-survey',
        loadChildren: () => __webpack_require__.e(/*! import() | send-survey-send-survey-module */ "send-survey-send-survey-module").then(__webpack_require__.bind(null, /*! ./send-survey/send-survey.module */ "i7nJ")).then((m) => m.SendSurveyPageModule),
    },
    {
        path: 'player-survey',
        loadChildren: () => __webpack_require__.e(/*! import() | player-survey-player-survey-module */ "player-survey-player-survey-module").then(__webpack_require__.bind(null, /*! ./player-survey/player-survey.module */ "rlR9")).then((m) => m.PlayerSurveyPageModule),
    },
    {
        path: 'create-survey',
        loadChildren: () => __webpack_require__.e(/*! import() | create-survey-create-survey-module */ "create-survey-create-survey-module").then(__webpack_require__.bind(null, /*! ./create-survey/create-survey.module */ "fE+h")).then((m) => m.CreateSurveyPageModule),
    },
    {
        path: 'home-coach',
        loadChildren: () => __webpack_require__.e(/*! import() | home-coach-home-coach-module */ "home-coach-home-coach-module").then(__webpack_require__.bind(null, /*! ./home-coach/home-coach.module */ "sesZ")).then((m) => m.HomeCoachPageModule),
    },
    {
        path: 'your-team',
        loadChildren: () => __webpack_require__.e(/*! import() | your-team-your-team-module */ "your-team-your-team-module").then(__webpack_require__.bind(null, /*! ./your-team/your-team.module */ "Mzw8")).then((m) => m.YourTeamPageModule),
    },
    {
        path: 'view-answers',
        loadChildren: () => __webpack_require__.e(/*! import() | view-answers-view-answers-module */ "view-answers-view-answers-module").then(__webpack_require__.bind(null, /*! ./view-answers/view-answers.module */ "Jfia")).then((m) => m.ViewAnswersPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map