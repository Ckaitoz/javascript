function contar() {
    var ini = document.getElementById('iniciar')
    var fim = document.getElementById('final')
    var passo = document.getElementById('pass')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[erro] Faltan dados')
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('passo invalido!')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}
