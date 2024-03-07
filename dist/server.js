"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const route_config_1 = __importDefault(require("./configs/route.config"));
const validar_entradas_middleware_1 = __importDefault(require("./middlewares/validar_entradas.middleware"));
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(body_parser_1.default.urlencoded({ extended: false, limit: '50mb' }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(express.json());
app.use('/v1/api', route_config_1.default);
app.use(validar_entradas_middleware_1.default.ValidarEntrada);
app.listen(3005, () => {
    console.log('Servidor rodando em http://localhost:3005');
});
