const formulario = document.getElementById('formulario')

const dbUser = 'oski'
const dbPassword = '1234abc'

const crear = (user) => {
    let span = document.createElement('span')
    span.classList.add('lista')
    span.innerHTML = `
    Bienvenido ${user}
    `
    let render = document.getElementById('render')
    render.appendChild(span)
    window.location.href = "menu.html"
}
function errores(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('hide')
    error.classList.add('error')
    setTimeout(() => {
        error.classList.remove('error')
        error.classList.add('hide')
    },5000)
}
function validar(u,p){
    if(u === '' || p === ''){
        console.log('Por favor ingresa un dato');
        errores('Datos')
    }
    else{
        if(u === dbUser && p === dbPassword){
            console.log('Bienvenido a tu cuenta');
            crear(dbUser)
        }
        else if(u != dbUser){
            errores('Usuario')
        }
        else if(p != dbPassword){
            errores('Password')
        }
    }
}
formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value
    validar(usuario, password)
})