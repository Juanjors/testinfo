const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.userIp = ip;
    console.log('LA IP DEL USUARIO ES: ', ip)

    // Leer el contenido del archivo HTML
    fs.readFile('./index.html', 'utf8', (err, data) => {
        if (err) {
            // Manejar errores de lectura del archivo
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error interno del servidor');
        } else {
            // Configurar encabezados de respuesta
            res.writeHead(200, { 'Content-Type': 'text/html' });


            // Enviar el contenido del archivo HTML como respuesta
            res.end(data);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}/`);
});
