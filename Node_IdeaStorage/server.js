const app = require('./app')
const http = require('http')

const server = http.createServer(app);
server.on('listening',()=>{
    console.log("Server created on port : 8080")
})
server.listen(8080);