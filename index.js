const express = require('express');
var cors = require('cors')
const app=express();
const port=5000;

app.use(cors())
app.use(express.json())
let users=[
    {id:0,name:"tushar",roll:"457789"},
    {id:1,name:"shehab",roll:"372501"},
    {id:2,name:"israfil",roll:"567789"},
    {id:3,name:"jamal",roll:"7789"}
]
app.get("/",(req,res)=>{

    res.send(users)
});



app.get("/users",(req,res)=>{
    let myname=req.query.name;
    let myroll=req.query.roll;
    
        let data=users.filter(user=>user.name.toLowerCase().includes(myname)||user.roll.toLowerCase().includes(myroll))
        res.send(data);
 
    
});

app.get("/users/:id",(req,res)=>{
    let id=req.params.id
    res.send(users[id])
});

app.post("/users",(req,res)=>{
    const newuser=req.body;
    newuser.id=users.length;
    users.push(newuser);
    res.json(newuser)
})

app.listen(port,()=>{
    console.log("server is running")
})