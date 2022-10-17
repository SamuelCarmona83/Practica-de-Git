
const scoreGoal = (event) => {
    console.log('Golazooooooooo!', event)
}

window.onload = () => {
    console.log('Soy el script')
    let app = document.querySelector("#app")//seleccionado un elemendit id="app"

    let body = document.querySelector("body")//selecionar body
    app.classList.add('flex')
    app.classList.add('flex-col')
    body.classList.add('bg-gray-50')
    
    let h1 = document.createElement('h1')
    h1.innerText = 'Me da pena ser de el Barcelona'
    //h1.classList.add('text-9xl')
    //h1.classList.add('text-red-700')
    h1.className = 'text-9xl text-red-500'
    
    let button = document.createElement('button')
    button.innerText = '✋🏽 Extrañamos a Messi'
    button.classList.add('bg-blue-700')
    button.classList.add('text-white')
    button.classList.add('pa-2xl')
    button.classList.add('rounded-full')
    button.classList.add('ma-lg')
    
    
    
    app.appendChild(h1)
    app.appendChild(button)


                            //evento & handler
    button.addEventListener('click', (evento) => {
        console.log('Lo extraños mas que a Ronaldinho 🧶', evento)
    })

    body.addEventListener('click', scoreGoal)

}