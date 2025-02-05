export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            console.log(`@escape acionado. Classe: ${this.constructor.name}. Método: ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escapar.js.map