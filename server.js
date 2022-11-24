const http = require("http")

const users = [
    { id: 123, name: "zhangsan" },
    { id: 234, name: "lisi" },
    { id: 345, name: "wangwu" },
]

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    if(req.url === '/api/users') {
        res.end(JSON.stringify(users))
    }else{
        res.end("Not Found!")
    }
})

server.listen(3000, () => {
    console.log("server is running at port 3000!")
})