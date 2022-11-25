const http = require("http")

const users = [
    { id: 111, name: "zhangsan" },
    { id: 112, name: "lisi" },
    { id: 113, name: "wangwu" },
]

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    if(req.url === '/api/users') {
        res.end(JSON.stringify(users))
    }else{
        res.end("Not Found!")
    }
})

server.listen(3001, () => {
    console.log("server is running at port 3001!")
})