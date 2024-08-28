1. Ao efetuar mais testes em nossa aplicação Sorteador de Números, você observará que está sendo permitido colocar um valor no campo “Do número” maior que o valor informado no campo “Até o número”, o que não é recomendável. O ideal é emitir um alerta para que o usuário reveja se inseriu os dados corretamente.

Agora é a sua vez de colocar a mão na massa! Implemente uma proteção dentro da função sortear para que esse alerta seja exibido.

2. Fizemos uma proteção em nosso loop for para que nunca sejam sorteados números repetidos dentro de um intervalo. Porém, o que acontece se o usuário escolher uma quantidade de números para sortear superior aos números de um determinado intervalo? Por exemplo, caso escolha para sortear 5 números de 10 a 13, conforme a imagem abaixo:

Isso vai gerar um loop infinito, pois a execução ficará presa o tempo inteiro na repetição while e o sorteio não será realizado. Para conferir essa informação, feche a página do navegador. Faça essa alteração no código, incluindo um alert dentro do bloco while; logo em seguida, abra novamente a página com o Live Server e veja os alerts acontecendo ao repetir o teste com os mesmos valores descritos na imagem acima:

Veja que você vai ter uma sequência de alerts que não vão parar de ser exibidos, caracterizando ali o loop infinito. Feche novamente o navegador para interromper a execução.

Como podemos proteger essa situação? Podemos verificar se a quantidade de números escolhidos no campo “Quantidade de números” é igual ou inferior ao intervalo de números entre os campos “Do número” e “Até o número”. Isso irá prevenir que esse erro aconteça.

Agora, então, é a sua vez de colocar a mão na massa! Vamos implementar essa proteção?