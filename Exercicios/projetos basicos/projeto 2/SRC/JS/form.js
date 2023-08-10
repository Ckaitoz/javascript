function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'menino.jpeg')
            }else if (idade < 20){
                img.setAttribute('src', 'adolecenteM.webp')
            }else if(idade < 50){
                img.setAttribute('src','homem.jpeg')
            }else {
                img.setAttribute('src', 'idoso.jpeg')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'menina.jpeg')
            } else if (idade < 20){
                img.setAttribute('src', 'adolecenteF.webp')
            }else if (idade < 50){
                img.setAttribute('src', 'mulher.jpeg')
            }else {
                img.setAttribute('src', 'image/idosa.jpeg')
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}
