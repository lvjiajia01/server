const http = require("http")

const users = [
    { id: 111111, name: "zhangsan" },
    { id: 11112, name: "lisi" },
    { id: 12213, name: "wangwu" },
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