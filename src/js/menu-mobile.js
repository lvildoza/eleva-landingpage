const iconoMenu = document.querySelector("#icono-menu");
let menu = document.querySelector("#menu");
let fondo = document.querySelector(".icono-menu");
fondo.classList.add("fondo-B")
iconoMenu.addEventListener("click", e =>{
    // Alteramos estilos para el manu y el body
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity")

    // Alteramos su atributo src para el icono del menu
    const rutaActual = e.target.getAttribute("src");

    if (rutaActual == "src/img/menu-hamburguesa.png") {
        e.target.setAttribute("src", "src/img/menu-hamburguesa2.png")
        fondo.classList.remove("fondo-B");
        fondo.classList.add("fondo-O");
    }else{
        e.target.setAttribute("src", "src/img/menu-hamburguesa.png")
        fondo.classList.remove("fondo-O");
        fondo.classList.add("fondo-B");
    }

    // Agregamos un iframe
    
});


