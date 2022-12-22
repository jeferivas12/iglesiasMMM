export function mostrar(elemento){
    let i = 0
    elemento.forEach(element => {
        
        const iglesia = document.createElement("div")
        iglesia.className ="iglesia id"+i
        const image = document.createElement("img")
        const titulo = document.createElement("h1")
        const informacion = document.createElement("p")
        const informacion2 = document.createElement("p")
        const infoPrincipal = document.createElement("div")
        informacion.appendChild(document.createTextNode("Pastor: "+element.pastor))
        informacion2.innerText= `Telefono ${element.Telefono}
        Barrio ${element.Barrio}
        Dirección ${element.dirección}`
        titulo.appendChild(document.createTextNode(element.nombre))
        image.src = "src/"+element.Imagen
        iglesia.appendChild(image)
        infoPrincipal.appendChild(titulo)
        infoPrincipal.appendChild(informacion)
        iglesia.appendChild(infoPrincipal)
        content.appendChild(iglesia)
        informacion2.className="infoDos"
        
        

        iglesia.onclick = () => {
            
            iglesia.classList.toggle("iglesiaDetalle")
            iglesia.contains(informacion2)?iglesia.removeChild(informacion2):iglesia.appendChild(informacion2)
            //iglesia.appendChild(informacion2)
            //setTimeout( () => iglesia.contains(informacion2)?iglesia.removeChild(informacion2):iglesia.appendChild(informacion2),1200)
            window.scroll(0,50)
        }
        i++
})}