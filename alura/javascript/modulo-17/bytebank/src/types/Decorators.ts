export function ValidaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(valorDoDebito: number) {
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser debitado precisa ser maior do que 0!");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    }
    return descriptor;
}

export function ValidaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(valorDoDebito: number) {
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser depositado precisa ser maior do que 0!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    }
    return descriptor;
}