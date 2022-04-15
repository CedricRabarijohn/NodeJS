let http = require('http')
let fs = require('fs')
let server = http.createServer()
server.on('request',(req, res) => {
    res.writeHead(200)
    let url = new URL(req.url, `http://${req.headers.host}`)
    let name = url.searchParams.get('name')
    fs.readFile('index.html','utf8', (err,data) => {
        if(err){
            res.writeHead(404,{'Content-type':'text/html; charset=utf-8'})
            res.end("Une erreur s'est produite , veuillez reessayer plus tard")
        }else{
            res.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
            let url = new URL(req.url, `http://${req.headers.host}`)
            let name = url.searchParams.get('name') === null | url.searchParams.get('name') === '' ? 'anonyme' : url.searchParams.get('name')
            data = data.replace('{{ name }}', name)
            res.end(data)
        }
    })
})
server.listen(8080)