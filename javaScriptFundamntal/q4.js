const products = [
    {name:"Laptop" ,price: 120000},
    {name: "Mobile",price:70000},
    {name: "Laptop Bag", price:20000},
    {name: "Watch",price: 30000},
    {name: "Mobile Charger" , price:1500}
]


function get(){
    let max = {name:"",price:Number.MIN_SAFE_INTEGER};
    let min = {name:"",price:Number.MAX_SAFE_INTEGER};
    for(let product of products){
          if(max.price<product.price){
            max.price = product.price;
            max.name = product.name;
          }

          if(min.price>product.price){
            min.price = product.price;
            min.name = product.name;
          }
    }
    console.log(`the product with the maximum ammount is ${max.name}  which is priced at Rs. ${max.price}`);
    console.log(`the product with the minimum ammount is ${min.name}  which is priced at Rs. ${min.price}`);
}

get();