function adicionar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('numtab')
    if(num.value.length==0){
        window.alert('ERRO! POR FAVOR INSIRA ALGUM NUMERO.')
    
    }else{
        let n = Number(num.value)
        if(n > 100 || n < 1){
            window.alert('ERRO! insira apenas numero de 1 a 100')
        }else{
            let vetor = [n]
            for(let pos in vetor){
                let item = document.createElement('option')
                item.text=`O valor ${vetor[pos]} foi adicionado`
                tab.appendChild(item)
            }
        }
    }
}

function analizar(){
   add = adicionar(vetor)
    res.innerHTML=`Ao todo temos ${a}`
}