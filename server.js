let http = require('http')
let fs = require('fs')
let server = http.createServer()
server.on('request',(req, res) => {
    res.writeHead(200)
    let url = new URL(req.url, `http://${req.headers.host}`)
    let name = url.searchParams.get('name')
    fs.readFile('index.html', (err,data) => {
        if(err){
            res.writeHead(404,{'Content-type':'text/html; charset=utf-8'})
            res.end()
        }else{

        }
    })
})
server.listen(8080)