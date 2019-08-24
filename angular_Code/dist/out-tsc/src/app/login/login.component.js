import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.title = 'Sample';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginSub = function () {
        this.router.navigate(['/dash']);
        console.log('username', this.uname, this.pwd);
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map