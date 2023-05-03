let musica = document.getElementById("musica");
let programacion = document.getElementById("programacion");
let envios = document.getElementById("envios");
let real  = document.getElementById("real");
let ventas  = document.getElementById("ventas");
let deep = document.getElementById("deep");
let juegos = document.getElementById("juegos");
let inteligencia = document.getElementById("inteligencia");
let entrevistas  = document.getElementById("entrevistas");
let todos = document.getElementById("todo");

let clases = ["musica", "programacion", "envios", "real", "deep", "ventas", "juegos", "inteligencia", "entrevistas", "todo"];

musica.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("musica")[0];
    clases.map(
        (elemento) => {
            if (elemento === "musica") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

programacion.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("programacion")[0];
    clases.map(
        (elemento) => {
            if (elemento === "programacion") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

envios.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("envios")[0];
    clases.map(
        (elemento) => {
            if (elemento === "envios") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

real.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("real")[0];
    clases.map(
        (elemento) => {
            if (elemento === "real") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

ventas.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("ventas")[0];
    clases.map(
        (elemento) => {
            if (elemento === "ventas") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

deep.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("deep")[0];
    clases.map(
        (elemento) => {
            if (elemento === "deep") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

juegos.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("juegos")[0];
    clases.map(
        (elemento) => {
            if (elemento === "juegos") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

inteligencia.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("inteligencia")[0];
    clases.map(
        (elemento) => {
            if (elemento === "inteligencia") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

entrevistas.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("entrevistas")[0];
    clases.map(
        (elemento) => {
            if (elemento === "entrevistas") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})

todos.addEventListener("click",()=>{
    let contenedor = document.getElementsByClassName("todo")[0];
    clases.map(
        (elemento) => {
            if (elemento === "todo") {
                contenedor.classList.remove("oculto");
                contenedor.classList.add("visible");                
            } else {
                document.getElementsByClassName(elemento)[0].classList.remove("visible");
                document.getElementsByClassName(elemento)[0].classList.add("oculto");  
            }
        }
    )
})