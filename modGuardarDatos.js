export const cargadatos = () => {
    const btnCargaDatos = document.querySelector(".btnCargaDatos")
    const formulario = document.querySelector("form")
btnCargaDatos.onclick = ()=> {
    btnCargaDatos.classList.toggle("inactive")
    formulario.classList.toggle("inactive")
}



formulario.addEventListener('submit', async (e) => {
    e.preventDefault()
    btnCargaDatos.classList.toggle("inactive")
    formulario.classList.toggle("inactive")
    const iglesia = formulario["inpIglesia"].value
    const pastor = formulario["inpPastor"].value
    const barrio = formulario["inpBarrio"].value
    const ciudad = formulario["inpCiudad"].value
    const departamento = formulario["inpDepartamento"].value
    const direccion = formulario["inpDireccion"].value
    const telefono = formulario["inpTelefono"].value
    console.log(iglesia)

    const modFirebase = await import("./modFirebase.js")
    await modFirebase.setIglesia(iglesia,pastor,barrio,ciudad,departamento,direccion,telefono)
})}