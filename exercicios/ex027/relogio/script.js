const horas = document.getElementById('hrs')
const minutos = document.getElementById('min')
const segundos = document.getElementById('seg')


const relogio = setInterval(function (time) {

let agora = new Date()

let h = agora.getHours()
let m = agora.getMinutes()
let s = agora.getSeconds()

if(h < 10 ){
    horas.innerHTML = `0${h}`
}

if(m < 10 ){
    minutos.innerHTML = `0${m}`
}

if(s < 10 ) {
    segundos.innerHTML = `0${s}`

}else{

   horas.innerHTML = `${h}`
   minutos.innerHTML = `${m}`
   segundos.innerHTML = `${s}`

}


})