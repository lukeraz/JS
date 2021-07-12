function contar(){
    let ini = (window.document.getElementById('inicio')) // barra INICIO para inserir numero
    let fim = (window.document.getElementById('fim'))    // barra FIM para inserir numero
    let pas = (window.document.getElementById('passo'))  // barra PASSO para inserir numero

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
      window.alert('Erro!')
    }else{
      res.innerHTML = 'Contando: '
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(pas.value)
      if(i < f){
        // Contagem  crescente
        for(let c = i; c <= f; c += p){
          res.innerHTML += `${c} \u{1F449} `
        }
      }else{
        // Contagem regressiva
        for(let c = i; c >= f; c -=p){
          res.innerHTML += `${c} \u{1F449} `
        }
      }
      res.innerHTML += `\u{1F3C1}`
    }
}