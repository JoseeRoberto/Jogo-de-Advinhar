function botaoclicar(){
    var segredo = Math.floor(Math.random()*11)
    var inputDoNumero = document.getElementById("numero").value
    console.log("Segredo: " + segredo);
    console.log("Input do usuário: " + inputDoNumero);
    if(segredo == inputDoNumero){
        location.href = "acertou gif.gif";
        console.log("Acertou!");
    }
    else{
        location.href = "errou gif.gif"
        console.log("Errou")
    }
}