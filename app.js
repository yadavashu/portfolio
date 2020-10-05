const express=require('express')
const app=express();


const port=8080

app.use(express.static(__dirname + '/public'))
app.get('/',(req,res)=>{
console.log("hello")
res.sendFile('home.html', {root: __dirname + '/public/'});
})


app.listen(process.env.PORT || 5000,()=>{
    console.log("connected to server")
})