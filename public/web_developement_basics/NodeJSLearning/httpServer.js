const fs  = require('fs')
const http = require('http');
const port = process.env.PORT || 3000;
//console.log(port)
const server = http.createServer((req, res)=>{
    console.log("helllllll");
    console.log(req.url)
    if(req.url=='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        const data = fs.readFileSync('public/web_developement_basics/NodeJSLearning/home.html')
        res.end(data.toString())
    }
    else if(req.url=='/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1> This my first nodejs server</h1>');
    }
})


server.listen(port,()=>{
    console.log(`Hello this on port ${port}`);
})


