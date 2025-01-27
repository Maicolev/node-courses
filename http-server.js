const http = require('node:http')
const { findAvailablePort } = require('./net-port')

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hello World\n');
    })

/**server.listen(3000, () => {
    console.log('Server listening on port 3000' + 'http://localhost:3000')
    }
)**/

const desiredPort = process.env.PORT ?? 3000

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log('Server listening on port ' + port + 'http://localhost:' + port)
    })
})