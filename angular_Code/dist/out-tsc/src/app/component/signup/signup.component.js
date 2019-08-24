import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../../apicall.service';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(_apiservice, router) {
        this._apiservice = _apiservice;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registerUser = function (formData) {
        var _this = this;
        console.log(formData.value.email);
        var userData = {
            name: formData.value.uname,
            email: formData.value.email,
            pwd: formData.value.pws
        };
        this._apiservice.loginApi(userData).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) { return false; });
    };
    SignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ApicallService, Router])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map