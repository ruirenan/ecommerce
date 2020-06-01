const express = require('express');

const app = express();

app.get('/test', (request, response) => {
   return response.send('ok')
})

app.listen(3333, () => {
    console.log("Server rodando")
});