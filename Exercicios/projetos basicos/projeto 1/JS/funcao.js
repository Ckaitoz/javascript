function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 13){
        img.src ='imagens/manhã.webp'
        document.body.style.backgroundImage ='linear-gradient(to top,#0BC8DE, #00F5EA,#F5E001)'
            document.body.style.backgroundAttachment = 'fixed'
    }else{
        if(hora >= 13 && hora < 18){
            img.src ='imagens/tarde.webp'
            document.body.style.backgroundImage ='linear-gradient(to top, #FFAF08, #DE8C07, #DE6B07)'
            document.body.style.backgroundAttachment = 'fixed'
        }else{
            img.src = 'imagens/noite.webp'
            document.body.style.backgroundImage ='linear-gradient(to top, #002BFF, #3105E0, #2D008F)'
            document.body.style.backgroundAttachment = 'fixed'
        }
    }
}
