import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var ApicallService = /** @class */ (function () {
    function ApicallService(http) {
        this.http = http;
    }
    ApicallService.prototype.loginApi = function (userCred) {
        var body = JSON.stringify(userCred);
        return this.http.post('http://localhost:3000/login/', body, httpOptions);
    };
    ApicallService.prototype.registerApi = function (userData) {
        var body = JSON.stringify(userData);
        return this.http.post('http://localhost:3000/userSignup/', body, httpOptions);
    };
    ApicallService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApicallService);
    return ApicallService;
}());
export { ApicallService };
//# sourceMappingURL=apicall.service.js.map