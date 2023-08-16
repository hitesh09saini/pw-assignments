const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price :82000,
    color : "Grey",
    hardDisk:"256 GB"
};


function print(productDetails){
    console.log("Below are the product details.");
    console.log(`name : ${productDetails.name}`);
    console.log(`price : ${productDetails.price}`);
    console.log(`color : ${productDetails.color}`);
    console.log(`hardDisk : ${productDetails.hardDisk}`);

}

print(productDetails);