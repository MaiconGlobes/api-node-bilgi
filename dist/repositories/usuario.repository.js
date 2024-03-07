"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class UsuarioRepository {
    Listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.database.usuario.findMany();
            return usuarios;
        });
    }
    BuscarId(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.database.usuario.findFirst({
                where: {
                    id: uuid ? uuid : ''
                }
            });
            return usuario;
        });
    }
    Gravar(AUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.database.usuario.create({
                data: AUser
            });
            return usuario;
        });
    }
    Atualizar(AUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.database.usuario.update({
                where: {
                    id: AUser.id
                },
                data: AUser
            });
            return usuario;
        });
    }
}
exports.default = UsuarioRepository;
