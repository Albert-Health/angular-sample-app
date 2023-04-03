/**
 * This file imports the third party library dependencies, then creates the angular module "demo"
 * and exports it.
 */
// External dependencies
import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";

import {MAIN_MODULE} from '../main/main.module';
import {GLOBAL_MODULE} from '../global/global.module';
import {ALBERT_MODULE} from '@albert-health/video-call-angular/dist/albertModule';
// Create the angular module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
export const ngmodule = angular.module("demo", [
        uiRouter,
        MAIN_MODULE.name,
        GLOBAL_MODULE.name,
        ALBERT_MODULE.name
    ])
;
