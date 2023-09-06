let num = document.querySelector('input#fnum')
let list = document.querySelector('select#list')
let res = document.querySelector('div#res')
let valores = []

function tnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if (tnumero(num.value) && !inlist(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar!')
    }else{
        let tol = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores[pos]
        }

        media = soma/tol
        
        res.innerHTML =''
        res.innerHTML +=`<p>Ao todo, temos ${tol} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} e O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos</p> ${soma}.`
        res.innerHTML += `<p>A media dos valores digitados e ${media}`

    }
}

