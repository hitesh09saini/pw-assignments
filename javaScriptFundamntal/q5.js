
const guests = ["Anurag","Mithun","Alka","Prabir","Shivam","Farman"];

function guest(){
   let str = "";
   let i =0;
   while(i<guests.length-1){
    str+=guests[i]+", ";
    i++;
   }
   str+=guests[i];

 
   return str;
}

console.log(guest());