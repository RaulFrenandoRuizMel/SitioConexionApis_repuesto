const http = require("node:http");
const fs = require("node:fs")

const puerto = 3000;
const archivo = JSON.parse(fs.readFileSync("./libros.json").toString())

const server = http.createServer((request, response) => {

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

    switch(request.method){
        case "GET":

         if(request.url == "/"){
                response.statusCode = 200
                response.setHeader("Content-Type", "application/json")
                response.end(JSON.stringify(archivo))
                return 0
            }
                response.statusCode = 200
                response.end(file)
        break;
        case "POST":

        break;
        case "PUT":

        break;
        case "DELETE":

        break;
        case "OPTIONS":
            response.writeHead(204);
            response.end();
        break;
    }
    
    /*
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({}));
    */
});

server.listen(puerto, () =>{
    console.log("Servidor a la escucha en http://localhost:" + puerto);
});