function tabuada(){
    let n = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    
    if(n.value.length == 0){
        window.alert('ERRO!')
    }else{
       let num = Number(n.value)
       let c = 1
       tab.innerHTML=''
      
       while(c <=10){
        let item = window.document.createElement('option')
        item.text=`${num} x ${c}= ${num*c}`
        tab.appendChild(item)
        c++
       }
    }
}