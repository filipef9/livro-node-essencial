// Carrega os módulos
const http = require('http');
const url = require('url');

// Função de callback para o servidor HTTP
const callback = (request, response) => {
    // Cabeçalho (header) com o tipo da resposta + UTF-8 como charset
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    // Faz o parse da URL separando o caminho (rota)
    const parts = url.parse(request.url);

    // Verifica a rota
    if (parts.path == '/') {
        response.end('Site na raiz.');
    } else if (parts.path == '/carros') {
        response.end('Você digitou a rota /carros.');
    } else {
        response.end(`Rota inválida: ${parts.path}`);
    }
};

// Cria um servidor HTTP que vai responder "Hello World" para todas as requisições
const server = http.createServer(callback);

// Porta que o servidor irá escutar
server.listen(3000);

// Mensagem ao iniciar o servidor
console.log('Servidor iniciado em http:/localhost:3000');