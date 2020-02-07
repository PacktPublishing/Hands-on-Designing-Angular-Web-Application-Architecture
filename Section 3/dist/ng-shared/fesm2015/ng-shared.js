import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-shared.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSharedService {
    constructor() { }
}
NgSharedService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgSharedService.ctorParameters = () => [];
/** @nocollapse */ NgSharedService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgSharedService_Factory() { return new NgSharedService(); }, token: NgSharedService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-shared.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSharedComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NgSharedComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ng-shared',
                template: `
    <p>
      ng-shared works (update)!
    </p>
  `
            }] }
];
/** @nocollapse */
NgSharedComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSharedModule {
}
NgSharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgSharedComponent],
                imports: [],
                exports: [NgSharedComponent]
            },] }
];

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
