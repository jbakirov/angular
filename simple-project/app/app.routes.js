"use strict";
var home_component_1 = require(".components/pages/home.component");
var about_component_1 = require(".components/pages/about.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.appRouterProviders = [
    provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map