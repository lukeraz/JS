function verificar(){ // BOTAO PARA VERIFICAR A IDADE E O SEXO
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano') // CHAMA O METODO QUE ESTA NO IMPUT, NO CASO É A IDADE QUE VAI SER DIGITADA
    var res = window.document.getElementById('res') 
    if(Number(fano.value) == 0 || Number(fano.value) > ano){
       window.alert('Erro! insira uma data valida.')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(fano.value)
        var img = document.createElement('img') //CRIAMOS UMA TAG IMG PARA SER ADICIONADO FOTOS DEPENDENDO DO GENERO
        img.setAttribute('id', 'foto') // CRIAMOS UMA ID PARA IMG
       
        if(fsex[0].checked){ // verifica o sexo, no caso MASCULINO
            genero = 'Homem'
            if(idade >=0 && idade <= 11){
                img.setAttribute('src', 'bebehomem.png') // SETAMOS A FOTO CONDIZENTE COM O GENERO
                res.innerHTML=`Detectamos um menino com ${idade} anos`
                //Criança
            }else if(idade < 21){
                res.innerHTML=`Detectamos um jovem com ${idade} anos`
                img.setAttribute('src', 'homemjovem.png')
                // Adolescente
            }else if(idade < 50){
                res.innerHTML=`Detectamos um homem com ${idade} anos`
                img.setAttribute('src', 'homemadulto.png')
                //Adulto
            }else{
                res.innerHTML=`Detectamos um idoso com ${idade} anos`
                img.setAttribute('src', 'homemidoso.png')
                //Idoso
            }

        }else if(fsex[1].checked){ // verifica o sexo, no caso FEMININO
            genero = 'Mulher'
            if(idade >=0 && idade <= 11){
                res.innerHTML=`Detectamos uma menina com ${idade} anos`
                img.setAttribute('src', 'bebemulher.png')
                //Criança
            }else if(idade <21){
                res.innerHTML=`Detectamos uma jovem com ${idade} anos`
                img.setAttribute('src', 'mulherjovem.png')
                //Adolescente
            }else if(idade < 50){
                res.innerHTML=`Detectamos uma mulher com ${idade} anos`
                img.setAttribute('src', 'mulheradulta.png')
                //Adulta
            }else{
                res.innerHTML=`Detectamos uma idosa com ${idade} anos`
                img.setAttribute('src', 'mulheridosa.png')
                //idosa
            }
        }
    }
    res.style.textAlign='center'
    res.appendChild(img) // ADICIONAMOS O ATRIBUTO IMG
}