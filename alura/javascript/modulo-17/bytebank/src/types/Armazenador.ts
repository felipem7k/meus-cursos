export default class Armazenador {
    public static salvar(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }

    public static obter(chave: string, reviver?: (this: any, key: string, value: any) => string) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }

        if (reviver) {
            return JSON.parse(valor, reviver);
        }

        return JSON.parse(valor);
    }
}