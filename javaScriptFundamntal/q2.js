
function calculateTotalCardValue(...v){
     
    let sum = v.reduce(function(acc , curr){
        return acc+curr;
    },0);

    console.log(sum);
    
}

calculateTotalCardValue(12,23,34,45);