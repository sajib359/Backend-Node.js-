const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/' , (req,res) => {
    res.send('Hi i am now pro developer !! now i can code Node now !!!')
});

app.listen(port, () => {
    console.log('Listing to port' , port);
})