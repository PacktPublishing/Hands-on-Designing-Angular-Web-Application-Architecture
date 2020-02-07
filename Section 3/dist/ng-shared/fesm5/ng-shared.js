import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-shared.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgSharedService = /** @class */ (function () {
    function NgSharedService() {
    }
    NgSharedService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgSharedService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgSharedService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgSharedService_Factory() { return new NgSharedService(); }, token: NgSharedService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [NgSharedComponent],
                    imports: [],
                    exports: [NgSharedComponent]
                },] }
    ];
    return NgSharedModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgSharedComponent, NgSharedModule, NgSharedService };
//# sourceMappingURL=ng-shared.js.map
