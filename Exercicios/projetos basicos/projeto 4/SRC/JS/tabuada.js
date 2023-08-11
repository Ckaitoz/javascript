function tabuada() {
    let inum = document.getElementById('numero')
    let tab = document.getElementById('tabu')
    let res = document.querySelector('div#res')

    if (inum.value.lenght == 0) {
        window.alert('valor invalido por favor preencha a caixa!')
    } else {
        let n = Number(inum.value)

        let c = 1
        tab.innerHTML = ''
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}