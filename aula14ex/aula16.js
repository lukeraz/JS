let num = [5, 8, 2, 9, 3]
num.push(11)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos  = num.indexOf(8)
if(pos == -1){
    console.log('o valor nao foi encontrado')
}else{
    console.log(`O valor esta na posição ${pos}`)
}
