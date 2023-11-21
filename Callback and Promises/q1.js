function doubleUsingCallback(arr,callback){
   return arr.map(callback);
}



const arr= [1,2,3,4,5,6,7];

const newArr = doubleUsingCallback(arr, (num)=>num*2);

console.log(newArr);