const http = require('http');
const server = http.createServer((req,res) =>{
    // console.log(req);
    // console.log(req.method);
    const {headers,url,method} = req;
    console.log(headers);
    console.log(url);
    console.log(method);
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({status:200,message:"My First Api"}));
});
const PORT = 5000;
server.listen(PORT,()=> console.log(`Server running on ${PORT}`));