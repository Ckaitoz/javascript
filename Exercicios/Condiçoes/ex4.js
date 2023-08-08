var idade = 70
if(idade < 16){
    console.log('Não vota')
} else {
    if(idade>= 16 &&
        //esse dado  esta implicito por tanto não e necessario colocar a idade pois se der false ja e maior que 16 
        idade < 18 || idade > 65){
        console.log('voto opicional')
    } else {
        console.log('voto obrigatorio')
    }
}