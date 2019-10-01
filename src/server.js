const express = require('express');


const app = express();

//get, post, put, delete
//yarn add express
//yarn add nodemon -d (depedencia de desenvovilmento)


app.get('/', (req, res)=>{ //req representa a requisição e res a resposta
    return res.json({ message: 'Hello Omnistack'}) //send resposta de texto
});

app.listen(3333); //Porta