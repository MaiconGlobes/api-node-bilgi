import bodyParser from "body-parser";
import routes from "./configs/route.config";
import ValidarEntradasSistemaMiddleware from './middlewares/validar_entradas.middleware';

const cors = require('cors');
const express = require('express')
const app = express()

//app.use(cors());
app.use(cors({
  origin: 'http://localhost:3005'
}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.json());
app.use('/v1/api', routes);

app.use(ValidarEntradasSistemaMiddleware.ValidarEntrada);

app.listen(3005, () => {
  console.log('Servidor rodando em http://localhost:3005');
});
