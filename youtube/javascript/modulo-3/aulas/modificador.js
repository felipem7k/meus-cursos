function capitalizar(colecao, atributo) {
    if (typeof colecao[0] == 'object') {
        return colecao.map((obj) => {
            var letraInicial = obj[atributo].charAt(0).toUpperCase();
            var restoTexto = obj[atributo].slice(1).toLowerCase();

            obj[atributo] = letraInicial + restoTexto;

            return obj;
        });
    } else {
        return colecao.map((obj) => {
            var letraInicial = obj.charAt(0).toUpperCase();
            var restoTexto = obj.slice(1).toLowerCase();

            obj = letraInicial + restoTexto;

            return obj;
        });
    }
};

function ordenar(colecao, attr){    
    return attr ?
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number' ?
                a[attr] - b[attr] :
                a[attr].localeCompare(b[attr])
        }):
        colecao.sort(function(a,b){
            return typeof a == 'number' ?
                a - b :
                a.localeCompare(b)
        });
}

export default {
    capitalizar: capitalizar, 
    ordenar: ordenar
};
