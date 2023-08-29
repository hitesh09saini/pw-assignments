function reverseString(str) {
  console.log("On Processing..");
 
    setTimeout(() => {
     console.log(reverse(str));
     
    }, 2000);


}

function reverse(str) {
  console.log("Reverse String Completed");
  return str.split("").reverse().join("");
}

reverseString("hitesh");





