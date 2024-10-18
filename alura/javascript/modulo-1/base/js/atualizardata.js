export function atualizarData(elemento) {
    let date = new Date();
    elemento.textContent = `${date.toLocaleDateString("pt-BR", {weekday: "long"})} (${date.toLocaleDateString("pt-BR")}) às ${date.toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
}