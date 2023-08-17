function parimp(n){  //parametro

    //ação
        if (n % 2 == 0){
            return 'par'
        }else{
            return 'impar' //retorno
        }
    }
    let res = parimp(11) //chamada

    console.log(res)