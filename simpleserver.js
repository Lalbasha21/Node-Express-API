/* http is a mpdule which is provided by node it self
module means already created feature by someone which we are just improting and using it.*/

const http= require('http');//import http module

//crreate server
const srever=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});//header
    res.write('<h1 style="color:red">Hello world from nodejs</h1>');//writting for response
    res.end();//end response
})

//start this.$isServer
srever.listen(3000,()=>{
    console.log('server is running on port 3000');
})
