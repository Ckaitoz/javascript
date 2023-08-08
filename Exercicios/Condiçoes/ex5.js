var hora = new Date()
var turno = hora.getHours()
console.log(`Agora são exatamente ${turno}h`)
if(turno < 12){
    console.log('BOM DIA!')
} else {
    if(turno < 18){
        console.log('BOA TARDE!')
    } else {
        console.log('BOA NOITE')
    }
}