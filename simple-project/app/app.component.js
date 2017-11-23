"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var navbar_component_1 = require("./components/navbar/navbar.component");
var jumbotron_component_1 = require("./components/jumbotron/jumbotron.component");
var home_component_1 = require("./components/pages/home.component");
var about_component_1 = require("./components/pages/about.component");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<navbar></navbar><jumbotron></jumbotron><router-outlet></router-outlet>',
        directives: [navbar_component_1.NavBarComponent, jumbotron_component_1.JumbotronComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, router_1.ROUTER_DIRECTIVES],
        precompile: [home_component_1.HomeComponent, about_component_1.AboutComponent]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map