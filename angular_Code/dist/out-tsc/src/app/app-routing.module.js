import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashComponent } from './component/dash/dash.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './login/login.component';
var routes = [
    { path: 'dash', component: DashComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', component: LoginComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map