const http = require("http")

const users = [
    { id: 11, name: "zhangsan" },
    { id: 21, name: "lisi" },
    { id: 31, name: "wangwu" },
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