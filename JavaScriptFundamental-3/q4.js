
function has(object , property){
    return property in object;
}

const obj = {
    Property1 : "item1",
    Property2 : "item2",
    Property3 : "item3",
    Property4 : "item4",
}

console.log(has(obj,"Property1"));