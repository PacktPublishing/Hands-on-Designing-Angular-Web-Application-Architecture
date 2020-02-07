(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-shared', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ng-shared'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-shared.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgSharedService = /** @class */ (function () {
        function NgSharedService() {
        }
        NgSharedService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgSharedService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgSharedService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgSharedService_Factory() { return new NgSharedService(); }, token: NgSharedService, providedIn: "root" });
        return NgSharedService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-shared.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgSharedComponent = /** @class */ (function () {
        function NgSharedComponent() {
        }
        /**
         * @return {?}
         */
        NgSharedComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        NgSharedComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-ng-shared',
                        template: "\n    <p>\n      ng-shared works (update)!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgSharedComponent.ctorParameters = function () { return []; };
        return NgSharedComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-shared.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgSharedModule = /** @class */ (function () {
        function NgSharedModule() {
        }
        NgSharedModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgSharedComponent],
                        imports: [],
                        exports: [NgSharedComponent]
                    },] }
        ];
        return NgSharedModule;
    }());

    exports.NgSharedComponent = NgSharedComponent;
    exports.NgSharedModule = NgSharedModule;
    exports.NgSharedService = NgSharedService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-shared.umd.js.map
