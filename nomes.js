
export const nomes = ["Giulliana", "Amanda", "Marcelo", "Maria", "Jackeline"];
export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}
export const nome = aleatorio(nomes);