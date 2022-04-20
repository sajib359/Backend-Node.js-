const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/' , (req,res) => {
    res.send('Hi i am now pro developer !! now i can code Node now !!! hey this sajib .i want to be a web developer. now i am working content developer')
});

const users =[
    { id: 1 , name: "Sajib" , email: "sajib@gmail.com" , phone: "01799999999" },
    { id: 2 , name: "Dev" , email: "dev@gmail.com" , phone: "01799999999"},
    { id: 3 , name: "Poga" , email: "Poga@gmail.com" , phone: "01799999999"},
    { id: 4 , name: "Moga" , email: "Moga@gmail.com" , phone: "01799999999"},
    { id: 5 , name: "Boga" , email: "Boga@gmail.com" , phone: "01799999999"},
    { id: 6 , name: "Muta" , email: "muta@gmail.com" , phone: "01799999999"},
    {id: 7 , name: "Bolod" , email: "Bolod@gmail.com" , phone: "01799999999"}
]

app.get('/users' ,(req , res)=> {
    res.send(users);
})

app.get('/user/:id' , (req ,res)=> {
    console.log(req.params);
    const id =req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Listing to port' , port);
})