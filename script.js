function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 13

msg.innerHTML = `Agora é ${hora} horas`
if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'imagens/manha4.png'
    document.body.style.background = 'blue'
}else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'imagens/tarde4.png'
    document.body.style.background = 'red'
}else{
    //boa noite
    img.src = 'imagens/noite4.png'
     document.body.style.background = 'black'
}
}