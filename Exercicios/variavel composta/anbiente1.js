let num = [5,8,9,2,3]

num.push(6)

console.log(`Nosso vetor e o ${num}`)

console.log(`o vetor tem ${num.length} posições`)

console.log(`o primeiro valor do vetor e ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)

/*
A ordem que os comandos forem colocados influenciara no resultado
*/

// for(let pos=0; pos<num.length;pos++){
//     console.log(num[pos])
// }