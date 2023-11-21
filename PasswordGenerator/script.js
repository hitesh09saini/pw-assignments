function generate() {

    let length = document.getElementById("length");
    let upperletters = document.getElementById("upperletters");
    let Lowerletters = document.getElementById("lowerletters");
    let numbers = document.getElementById("numbers");
    let symbols = document.getElementById("symbols");
    
    let value  = ''
    
    if(upperletters.checked == true){
        value += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(Lowerletters.checked == true){
        value += "abcdefghijklmnopqrstuvwxyz" 
    }

    if(numbers.checked == true){
        value += "1234567890" 
    }

    if(symbols.checked == true){
        value += "!@$%^&*+#" 
    }

    if(value === ''){
        alert('check  type of password !')
        return
    }

    let pass = "";
    for(let i =0;i<length.value;i++){
       pass += value.charAt(random(value.length-1));
    }
    
    document.getElementById('text').value = pass;
}

function random(le){
    return Math.floor(Math.random()*le+1);
}

function copy(){
  var copyText = document.getElementById("text");
  copyText.select();
  copyText.setSelectionRange(0, 100); 
  navigator.clipboard.writeText(copyText.value);
}