const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = require('./app/routes/index');
const port = process.env.PORT || 3000;

// Inicializa conexao com o banco
require('./app/database');

// Middleware de decoding de json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Configura as rotas
app.use('/api', router);

// // Rota de fallback
app.use((req, res) => {
    console.log('show')
    res.status(404).json({
        error: 'Route not found'
    });
});

app.listen(port, () => console.log(`Server started on port ${port}` ));