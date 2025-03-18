export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method: ${propertyKey} | Arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
}
