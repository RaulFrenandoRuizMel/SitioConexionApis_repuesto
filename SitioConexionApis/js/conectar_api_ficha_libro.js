const parametros_url = new URLSearchParams(window.location.search);
const id_del_libro = parametros_url.get("id");
const categoria_del_libro = parametros_url.get("categoria");

console.log(id_del_libro)
console.log(categoria_del_libro)

fetch("http://localhost:3000/").then(recurso => recurso.json()).then(archivo => {

    const libro = archivo[categoria_del_libro].find(l => l.id == id_del_libro);

    if (libro) {
        document.querySelector(".titulo_del_libro").innerHTML = libro.titulo;
        document.querySelector(".autor_del_libro").innerText = libro.autor;
        document.querySelector(".fecha_del_libro").innerText = libro.fecha;
        document.querySelector(".sinopsis p").innerText = libro.sinopsis;
    }
})
