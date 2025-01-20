// https://www.youtube.com/watch?v=iGV8gjzx3to&ab_channel=DevPleno

const stock = [];

function producer() {
    stock.push(Math.random()*100);
    setTimeout(producer, Math.ceil(Math.random()*3000));
    console.log('producer', stock.length);
}

function consumer() {
    stock.pop();
    setTimeout(consumer, Math.ceil(Math.random()*3000));
    console.log('consumer', stock.length);
}

producer();
consumer();