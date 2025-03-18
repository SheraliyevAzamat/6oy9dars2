"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMethod = LogMethod;
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method: ${propertyKey} | Arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
}
//# sourceMappingURL=logMethod.js.map