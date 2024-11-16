const hr = document.getElementById('hrs')
const min = document.querySelector('span#minutos')
const seg = document.getElementById('segundos') 


const relogio = setInterval(function time() {
    
let agora = new Date()

    let h = agora.getHours()
    let m = agora.getMinutes()
    let s = agora.getSeconds()

    if(h < 10 ){
        hr.innerHTML = `0${h}`
    }if(m < 10 ){
        min.innerHTML = `0${m}`
    }if(s < 10){
        seg.innerHTML = `0${s}`
    }else {

        hr.innerHTML = `${h}`
        min.innerHTML = `${m}`
        seg.innerHTML = `${s}`

    }

})