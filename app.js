// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota GET
app.get('/', (req, res) => {
    res.status(200).send('api awari');
});

// Rota POST
app.post('/items', (req, res) => {
    const item = req.body;
    // Simulando salvar o item
    console.log('Item recebido:', item);
    res.status(201).send(item);
});

// Rota PUT
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    // Simulando a atualização do item
    console.log(`Atualizando item com ID ${id}:`, updatedItem);
    res.status(200).send(updatedItem);
});

// Rota DELETE
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    // Simulando a exclusão do item
    console.log(`Deletando item com ID ${id}`);
    res.status(204).send(); // 204 No Content
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});

