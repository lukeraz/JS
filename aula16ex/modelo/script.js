let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){  //verificia se o valor digitado pelo usuario é um numero e esta entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){   
        return true
    }else{
        return false
    }
}

function inLista(n, l){     //verifica se o valor digitado pelo usuario existe dentro da lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){       //verifica se ao adicionar o numero é valido e nao contem o mesmo valor dentro da lista
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= (`Valor ${num.value} foi adicionado.`)
        lista.appendChild(item)
        
    }else{
        window.alert('ERRO! valor invalido ou  ja encontrado em lista')
        
    }
    num.value='' // faz com que o numero digitado na barra de texto suma apos ser adicionado
    num.focus() // faz com que voce nao precise clicar na barra de texto para digitar, apos ter adicionado um numero
}

function analizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de analizar')
    }else{
        let tot= valores.length // faz com que ele leia quantos numero foram adicionados dentro do array, no caso "valores"
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
    }
}

function excluir(){
    
}