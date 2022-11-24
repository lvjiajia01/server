const http = require("http")

const users = [
    { id: 4443, name: "zhangsan" },
    { id: 5553, name: "lisi" },
    { id: 6663, name: "wangwu" },
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