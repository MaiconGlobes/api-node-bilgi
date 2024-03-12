import bodyParser from "body-parser";
import routes from "./configs/route.config";
import ValidarEntradasSistemaMiddleware from './middlewares/validar_entradas.middleware';
import { NextFunction, Request, Response } from "express";

const cors = require('cors');
const express = require('express')
const app = express()

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.json());
app.use('/v1/api', routes);

app.use(ValidarEntradasSistemaMiddleware.ValidarEntrada);

app.listen(3005, () => {
  console.log('Servidor rodando em http://localhost:3005');
});
