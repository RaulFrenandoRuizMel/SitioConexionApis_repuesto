const añadir_nueva_resena = document.querySelector(".añadir_nueva_resena");
añadir_nueva_resena.innerHTML = `
                      <div class="añadir_nueva_resena">
            <div class="contenedor_campos_resena">
                <div class="titulo_y_logo">
                    <H1>Crear Nueva Reseña</H1>
                    <img src="./img/recursos/SVG/Recurso 3.svg" alt="">
                </div>
                <div class="libro_a_reseñar">
                    <p>Titulo del Libro a Reseñar:</p>
                    <input class="nombre_del_libro" type="text">
                </div>

                <div class="Usuario_reseñador">
                    <p>Nombre del Usuario:</p>
                    <input class="nombre_del_usuario" type="text">
                </div>

                <div class="asunto_de_la_reseña">
                    <p>Asunto De La Reseña:</p>
                    <input class="nombre_del_libro" type="text">
                </div>

                <div class="fecha_de_la_reseña">
                    <p>Titulo del Libro a Reseñar:</p>
                    <input class="nombre_del_libro" type="date">
                </div>

                <div class="texto_de_la_resena_emergente">
                    <p>Titulo del Libro a Reseñar:</p>
                    <input class="nombre_del_libro" type="text">
                </div>

                <div class="calificacion_de_la_resena">
                    <p>Calificacion Personal Del Libro:</p>
                    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.8 41.74">
                        <g id="Capa_3" data-name="Capa 3">
                            <path class="cls-1"
                                d="M22.69.57l4.6,14.16c.11.34.43.57.79.57h14.89c.8,0,1.14,1.03.49,1.5l-12.04,8.75c-.29.21-.41.59-.3.93l4.6,14.16c.25.77-.63,1.4-1.28.93l-12.04-8.75c-.29-.21-.69-.21-.98,0l-12.04,8.75c-.65.47-1.53-.16-1.28-.93l4.6-14.16c.11-.34-.01-.72-.3-.93L.34,16.81c-.65-.47-.32-1.5.49-1.5h14.89c.36,0,.68-.23.79-.57L21.11.57c.25-.77,1.33-.77,1.58,0Z" />
                        </g>
                    </svg>
                    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.8 41.74">
                        <g id="Capa_3" data-name="Capa 3">
                            <path class="cls-1"
                                d="M22.69.57l4.6,14.16c.11.34.43.57.79.57h14.89c.8,0,1.14,1.03.49,1.5l-12.04,8.75c-.29.21-.41.59-.3.93l4.6,14.16c.25.77-.63,1.4-1.28.93l-12.04-8.75c-.29-.21-.69-.21-.98,0l-12.04,8.75c-.65.47-1.53-.16-1.28-.93l4.6-14.16c.11-.34-.01-.72-.3-.93L.34,16.81c-.65-.47-.32-1.5.49-1.5h14.89c.36,0,.68-.23.79-.57L21.11.57c.25-.77,1.33-.77,1.58,0Z" />
                        </g>
                    </svg>
                    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.8 41.74">
                        <g id="Capa_3" data-name="Capa 3">
                            <path class="cls-1"
                                d="M22.69.57l4.6,14.16c.11.34.43.57.79.57h14.89c.8,0,1.14,1.03.49,1.5l-12.04,8.75c-.29.21-.41.59-.3.93l4.6,14.16c.25.77-.63,1.4-1.28.93l-12.04-8.75c-.29-.21-.69-.21-.98,0l-12.04,8.75c-.65.47-1.53-.16-1.28-.93l4.6-14.16c.11-.34-.01-.72-.3-.93L.34,16.81c-.65-.47-.32-1.5.49-1.5h14.89c.36,0,.68-.23.79-.57L21.11.57c.25-.77,1.33-.77,1.58,0Z" />
                        </g>
                    </svg>
                    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.8 41.74">
                        <g id="Capa_3" data-name="Capa 3">
                            <path class="cls-1"
                                d="M22.69.57l4.6,14.16c.11.34.43.57.79.57h14.89c.8,0,1.14,1.03.49,1.5l-12.04,8.75c-.29.21-.41.59-.3.93l4.6,14.16c.25.77-.63,1.4-1.28.93l-12.04-8.75c-.29-.21-.69-.21-.98,0l-12.04,8.75c-.65.47-1.53-.16-1.28-.93l4.6-14.16c.11-.34-.01-.72-.3-.93L.34,16.81c-.65-.47-.32-1.5.49-1.5h14.89c.36,0,.68-.23.79-.57L21.11.57c.25-.77,1.33-.77,1.58,0Z" />
                        </g>
                    </svg>
                    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.8 41.74">
                        <g id="Capa_3" data-name="Capa 3">
                            <path class="cls-1"
                                d="M22.69.57l4.6,14.16c.11.34.43.57.79.57h14.89c.8,0,1.14,1.03.49,1.5l-12.04,8.75c-.29.21-.41.59-.3.93l4.6,14.16c.25.77-.63,1.4-1.28.93l-12.04-8.75c-.29-.21-.69-.21-.98,0l-12.04,8.75c-.65.47-1.53-.16-1.28-.93l4.6-14.16c.11-.34-.01-.72-.3-.93L.34,16.81c-.65-.47-.32-1.5.49-1.5h14.89c.36,0,.68-.23.79-.57L21.11.57c.25-.77,1.33-.77,1.58,0Z" />
                        </g>
                    </svg>
                </div>

                <div class="botones_de_nueva_reseña">
                    <button class="publicar_resena">PUBLICAR RESEÑA</button>
                    <button class="cancelar_resena">CANCELAR RESEÑA</button>
                </div>
            </div>
        </div>
`