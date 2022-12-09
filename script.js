const jsonIglesias = [
    {
        "nombre":"MMM Boston",
        "pastor":"Pedro David Gamez",
        "dirección":"cll 56 # 36a 32",
        "Barrio":"Boston",
        "Ciudad":"Medellin",
        "Departamento":"Antioquia",
        "Telefono":"6045055228",
        "Imagen":"boston.jpg"
    },
    {
        "nombre":"MMM Caicedo",
        "pastor":"Hugo Marin",
        "dirección":"cll 56 # 36a 32",
        "Barrio":"Caicedo",
        "Ciudad":"Medellin",
        "Departamento":"Antioquia",
        "Telefono":"1234567",
        "Imagen":"boston.jpg"
    },
    {
        "nombre":"MMM Enciso",
        "pastor":"Damil Arteaga",
        "dirección":"cll 56 # 36a 32",
        "Barrio":"Enciso",
        "Ciudad":"Cali",
        "Departamento":"Valle del cauca",
        "Telefono":"12345",
        "Imagen":"boston.jpg"
    },
    {
        "nombre":"MMM Sede Centro",
        "pastor":"Pablo Castro",
        "dirección":"cll 56 # 36a 32",
        "Barrio":"Centro",
        "Ciudad":"Bogota",
        "Departamento":"Bogota",
        "Telefono":"3216547",
        "Imagen":"boston.jpg"
    }
]
const content = document.querySelector(".iglesias")
const filtroCiudad = document.querySelector("#listCiudad")
const filtroDepartamento = document.querySelector("#listDepartamento")
const buscar = document.querySelector(".btnBuscar")
let ciudades = []
const departamentos = []

jsonIglesias.forEach(e=>{
    if (!departamentos.includes(e.Departamento))
    departamentos.push(e.Departamento)
})

departamentos.sort().forEach(d=>{
    const opciond = document.createElement("option")
    opciond.name = d
    opciond.innerText = d
    filtroDepartamento.appendChild(opciond)
})


filtroDepartamento.onchange = () => 
{
    const opcion2 = document.createElement("option")
    console.log(filtroDepartamento.value)
    filtroCiudad.innerHTML=""
    
    opcion2.name = "Ciudad"
    opcion2.innerText = "Ciudad"
    opcion2.selected = true
    filtroCiudad.appendChild(opcion2)

    ciudades = []

    jsonIglesias.forEach(e=>{
        if (!ciudades.includes(e.Ciudad) && e.Departamento == filtroDepartamento.value )
        ciudades.push(e.Ciudad)
    })

    ciudades.sort().forEach(c=>{    
        const opcion = document.createElement("option")
        opcion.name = c
        opcion.innerText = c
        filtroCiudad.appendChild(opcion)
    })
}
console.log(ciudades)
console.log(departamentos)
console.log(filtroCiudad)

function mostrar(elemento){
    elemento.forEach(element => {
        const iglesia = document.createElement("div")
        iglesia.className ="iglesia"
        const image = document.createElement("img")
        const titulo = document.createElement("h1")
        const informacion = document.createElement("p")
        informacion.appendChild(document.createTextNode("Pastor: "+element.pastor))
        titulo.appendChild(document.createTextNode(element.nombre))
        image.src = "src/"+element.Imagen
        iglesia.appendChild(image)
        iglesia.appendChild(titulo)
        iglesia.appendChild(informacion)
        content.appendChild(iglesia)
})}
mostrar(jsonIglesias)


 const actualiza = ()=>{
    content.innerHTML=""
    let val = filtroCiudad.value
    const filtro = jsonIglesias.filter(e => e.Ciudad==val)
    val=="Ciudad" ? mostrar(jsonIglesias) : mostrar(filtro)
    console.log(val)
}
filtroCiudad.onchange = actualiza
buscar.onclick = actualiza
//console.table(jsonIglesias)