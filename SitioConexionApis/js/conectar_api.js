const categoria_de_libros_herejia_de_horus = document.querySelector("#categoria_de_libros_herejia_de_horus");
const categoria_de_libros_the_siege_of_terra = document.querySelector("#categoria_de_libros_the_siege_of_terra");
const categoria_de_libros_era_indomitus = document.querySelector("#categoria_de_libros_era_indomitus");
const categoria_de_libros_astartes_leales = document.querySelector("#categoria_de_libros_astartes_leales");
const categoria_de_libros_astartes_traidores = document.querySelector("#categoria_de_libros_astartes_traidores");


const contenedor_libros = document.querySelector(".contenedor_libros");
const plantilla_libro = document.querySelector(".plantilla_libro");
plantilla_libro.remove();


fetch("http://localhost:3000/").then(recurso => recurso.json()).then(archivo => {
    for (i = 0; i < archivo.herejia_de_horus.length; i++) {
        let clone = plantilla_libro.cloneNode(true)
        contenedor_libros.appendChild(clone)

        const titulo_del_libro = clone.querySelector(".titulo_del_libro");
        titulo_del_libro.innerHTML = archivo.herejia_de_horus[i].titulo;

        const autor_del_libro = clone.querySelector(".autor_del_libro");
        autor_del_libro.innerHTML = archivo.herejia_de_horus[i].autor;

        const reseñas_del_libro = clone.querySelector(".reseñas_del_libro");
        reseñas_del_libro.innerHTML = archivo.herejia_de_horus[i].calificacion;

        const portada_del_libro = clone.querySelector(".portada");
        portada_del_libro.style.backgroundImage = "url('http://localhost:3000/" + archivo.herejia_de_horus[i].portada + ".jpg" + "')";
    }

    for (i = 0; i < archivo.the_siege_of_terra.length; i++) {
        let clone = plantilla_libro.cloneNode(true)
        categoria_de_libros_the_siege_of_terra.appendChild(clone)

        const titulo_del_libro = clone.querySelector(".titulo_del_libro");
        titulo_del_libro.innerHTML = archivo.the_siege_of_terra[i].titulo;

        const autor_del_libro = clone.querySelector(".autor_del_libro");
        autor_del_libro.innerHTML = archivo.the_siege_of_terra[i].autor;

        const reseñas_del_libro = clone.querySelector(".reseñas_del_libro");
        reseñas_del_libro.innerHTML = archivo.the_siege_of_terra[i].calificacion;

        const portada_del_libro = clone.querySelector(".portada");
        portada_del_libro.style.backgroundImage = "url('http://localhost:3000/" + archivo.the_siege_of_terra[i].portada + ".jpg" + "')";
    }

    for (i = 0; i < archivo.era_indomitus.length; i++) {
        let clone = plantilla_libro.cloneNode(true)
        categoria_de_libros_era_indomitus.appendChild(clone)

        const titulo_del_libro = clone.querySelector(".titulo_del_libro");
        titulo_del_libro.innerHTML = archivo.era_indomitus[i].titulo;

        const autor_del_libro = clone.querySelector(".autor_del_libro");
        autor_del_libro.innerHTML = archivo.era_indomitus[i].autor;

        const reseñas_del_libro = clone.querySelector(".reseñas_del_libro");
        reseñas_del_libro.innerHTML = archivo.era_indomitus[i].calificacion;

        const portada_del_libro = clone.querySelector(".portada");
        portada_del_libro.style.backgroundImage = "url('http://localhost:3000/" + archivo.era_indomitus[i].portada + ".jpg" + "')";
    }

    for (i = 0; i < archivo.astartes_leales.length; i++) {
        let clone = plantilla_libro.cloneNode(true)
        categoria_de_libros_astartes_leales.appendChild(clone)

        const titulo_del_libro = clone.querySelector(".titulo_del_libro");
        titulo_del_libro.innerHTML = archivo.astartes_leales[i].titulo;

        const autor_del_libro = clone.querySelector(".autor_del_libro");
        autor_del_libro.innerHTML = archivo.astartes_leales[i].autor;

        const reseñas_del_libro = clone.querySelector(".reseñas_del_libro");
        reseñas_del_libro.innerHTML = archivo.astartes_leales[i].calificacion;

        const portada_del_libro = clone.querySelector(".portada");
        portada_del_libro.style.backgroundImage = "url('http://localhost:3000/" + archivo.astartes_leales[i].portada + ".jpg" + "')";


    }

    for (i = 0; i < archivo.astartes_traidores.length; i++) {
        let clone = plantilla_libro.cloneNode(true)
        categoria_de_libros_astartes_traidores.appendChild(clone)

        const titulo_del_libro = clone.querySelector(".titulo_del_libro");
        titulo_del_libro.innerHTML = archivo.astartes_traidores[i].titulo;

        const autor_del_libro = clone.querySelector(".autor_del_libro");
        autor_del_libro.innerHTML = archivo.astartes_traidores[i].autor;

        const reseñas_del_libro = clone.querySelector(".reseñas_del_libro");
        reseñas_del_libro.innerHTML = archivo.astartes_traidores[i].calificacion;

        const portada_del_libro = clone.querySelector(".portada");
        portada_del_libro.style.backgroundImage = "url('http://localhost:3000/" + archivo.astartes_traidores[i].portada + ".jpg" + "')";
    }
})
