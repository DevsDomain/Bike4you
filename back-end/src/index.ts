import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

dotenv.config();

const app = express(); // cria o servidor e coloca na variável app
// suportar parâmetros JSON no body da requisição
app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Back-end',
      version: '1.0.0',
    },
  },
  apis: ['src/routes/*.ts'], // Caminho para seus arquivos de rota
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Rota do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Defina suas rotas da API aqui

// Defina uma rota de exemplo
app.get('/api/exemplo', (req, res) => {
    // Lógica da rota aqui
    res.json({ mensagem: 'Esta é uma resposta de exemplo da API.' });
  });


const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

    // define a rota para o pacote /routes
    app.use(routes);