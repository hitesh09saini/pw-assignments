function uniqueCharactersCheck(name){
     
    for(let i=0;i<name.length;i++ ){

        for(let j=0;j<name.length;j++){

            if(i == j)continue;
            else if(name.charAt(i)==name.charAt(j)){

              console.log("The input string contains duplicates");
              return;
            }

        }
    }

    console.log("The input string contains unique characters");


}

uniqueCharactersCheck("anurag");