const http = require("http")

const users = [
    { id: 11111, name: "zhangsan" },
    { id: 22222, name: "lisi" },
    { id: 33333, name: "wangwu" },
    { id: 444, name: "wangwu" },
    { id: 555, name: "wangwu" },
    { id: 666, name: "wangwu" },
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