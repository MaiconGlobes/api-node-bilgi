"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRoutes = void 0;
const express_1 = __importDefault(require("express"));
const usuario_controller_1 = __importDefault(require("../controllers/usuario.controller"));
const usuario_middleware_1 = __importDefault(require("../middlewares/usuario.middleware"));
const usuarioRoutes = express_1.default.Router();
exports.usuarioRoutes = usuarioRoutes;
usuarioRoutes.get('/listar-usuario', usuario_controller_1.default.ProcessarListarUsuarios);
usuarioRoutes.post('/cadastrar-usuario', usuario_middleware_1.default.ValidarCadastro, usuario_controller_1.default.ProcessarCadastrarUsuario);
usuarioRoutes.put('/editar-usuario', usuario_middleware_1.default.ValidarEdicao, //corrigir as validações de edição
usuario_controller_1.default.ProcessarEditarUsuario);
usuarioRoutes.delete('/deletar-usuario', usuario_middleware_1.default.ValidarDelecao, //corrigir as validações de deleção (uuid valido)
usuario_controller_1.default.ProcessarCadastrarUsuario);
