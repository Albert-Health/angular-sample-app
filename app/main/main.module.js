import {app} from "./app.component";
import {welcome} from "./welcome.component";
import {home} from "./home.component";
import {appState, homeState, welcomeState} from "./app.states";

export const MAIN_MODULE = angular.module('main', []);

MAIN_MODULE.config(['$uiRouterProvider', function ($uiRouter) {
    // Enable tracing of each TRANSITION... (check the javascript console)
    // This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
    // Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
    $uiRouter.trace.enable(1);

    // If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
    const $urlService = $uiRouter.urlService;
    $urlService.rules.otherwise({state: 'home'});

    const $stateRegistry = $uiRouter.stateRegistry;
    $stateRegistry.register(appState);
    $stateRegistry.register(homeState);
    $stateRegistry.register(welcomeState);
}]);

MAIN_MODULE.component('app', app);
MAIN_MODULE.component('welcome', welcome);
MAIN_MODULE.component('home', home);
