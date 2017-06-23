"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../login/_services/index");
var ForgetComponent = (function () {
    function ForgetComponent(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    ForgetComponent.prototype.forget = function () {
        var _this = this;
        this.alertService.error('資料已傳送至系統管理員', true);
        //alert("資料已傳送至系統管理員");
        this.loading = true;
        setTimeout(function () { return _this.login(); }, 2000);
    };
    ForgetComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    return ForgetComponent;
}());
ForgetComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'forget.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AlertService])
], ForgetComponent);
exports.ForgetComponent = ForgetComponent;
//# sourceMappingURL=forget.component.js.map