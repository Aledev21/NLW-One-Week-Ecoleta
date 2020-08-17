import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) =>{
    console.log('listagem de usuarios');

    //JSON

    response.json([
        'Deigo',
        'Dodojogo',
        'fp',
        'Agua',
        'COca'
    ]);
});





app.listen(3333);