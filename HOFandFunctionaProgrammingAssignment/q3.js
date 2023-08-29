const store = [{item : 'apple', priceUSD: 20 },  {item : 'tomato', priceUSD: 10 }, {item : 'potato', priceUSD: 40 }, {item : 'Banana', priceUSD: 30 } ];

console.log(store);


let exchangeRate = 80;

const convertItems = store.map(items =>({ 
    item: items.item,
    priceINR: items.priceUSD * exchangeRate,
}));



console.log(convertItems);