"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_route_1 = require("../routes/usuario.route");
const routes = (0, express_1.default)();
routes.use('/usuario', usuario_route_1.usuarioRoutes);
exports.default = routes;
