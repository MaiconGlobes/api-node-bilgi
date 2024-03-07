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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_enum_1 = require("../@enums/response.enum");
const response_service_1 = __importDefault(require("../services/response.service"));
const usuario_service_1 = __importDefault(require("../services/usuario.service"));
class UsuarioController extends response_service_1.default {
    constructor() {
        super();
        this.ProcessarListarUsuarios = (AReq, AResp) => __awaiter(this, void 0, void 0, function* () {
            try {
                const objRetorno = yield this._usuarioService.ListarUsuarios(AReq);
                switch (objRetorno.codigo_status) {
                    case response_enum_1.eStatusHTTP.SUCESSO:
                        return yield this.OkObjectResult(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.ERRO:
                        return yield this.UnprocessableEntity(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.NAO_AUTORIZADO:
                        return yield this.UnauthorizedObjectResult(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.ACESSO_PROIBIDO:
                        return yield this.ForbiddenObjectResult(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.ERRO_SERVIDOR:
                        return yield this.ServerErrorMessageResult(AResp, objRetorno);
                }
            }
            catch (error) {
                const objRetorno = { status: 'Erro', codigo_status: 1, titulo: 'mensagens', conteudo: {} };
                return yield this.ServerErrorMessageResult(AResp, objRetorno);
            }
        });
        this.ProcessarCadastrarUsuario = (AReq, AResp) => __awaiter(this, void 0, void 0, function* () {
            try {
                const objRetorno = yield this._usuarioService.CadastrarUsuario(AReq);
                switch (objRetorno.codigo_status) {
                    case response_enum_1.eStatusHTTP.SUCESSO:
                        return yield this.CreatedObjectResult(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.ERRO:
                        return yield this.UnprocessableEntity(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.NAO_AUTORIZADO:
                        return yield this.UnauthorizedObjectResult(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.ACESSO_PROIBIDO:
                        return yield this.ForbiddenObjectResult(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.ERRO_SERVIDOR:
                        return yield this.ServerErrorMessageResult(AResp, objRetorno);
                }
            }
            catch (error) {
                const objRetorno = { status: 'Erro', codigo_status: 1, titulo: 'mensagens', conteudo: {} };
                return yield this.ServerErrorMessageResult(AResp, objRetorno);
            }
        });
        this.ProcessarEditarUsuario = (AReq, AResp) => __awaiter(this, void 0, void 0, function* () {
            try {
                const objRetorno = yield this._usuarioService.EditarUsuario(AReq);
                switch (objRetorno.codigo_status) {
                    case response_enum_1.eStatusHTTP.SUCESSO:
                        return yield this.NoContentResult(AResp);
                    case response_enum_1.eStatusHTTP.ERRO:
                        return yield this.UnprocessableEntity(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.NAO_AUTORIZADO:
                        return yield this.UnauthorizedObjectResult(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.ACESSO_PROIBIDO:
                        return yield this.ForbiddenObjectResult(AResp, objRetorno);
                    case response_enum_1.eStatusHTTP.ERRO_SERVIDOR:
                        return yield this.ServerErrorMessageResult(AResp, objRetorno);
                }
            }
            catch (error) {
                const objRetorno = { status: 'Erro', codigo_status: 1, titulo: 'mensagens', conteudo: {} };
                return yield this.ServerErrorMessageResult(AResp, objRetorno);
            }
        });
        this._usuarioService = new usuario_service_1.default();
    }
}
exports.default = new UsuarioController();
