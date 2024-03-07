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
const utils_1 = __importDefault(require("../utils/utils"));
const seguranca_service_1 = __importDefault(require("./seguranca.service"));
const validacao_erro_service_1 = __importDefault(require("./validacao_erro.service"));
const usuario_repository_1 = __importDefault(require("../repositories/usuario.repository"));
class UsuarioService {
    constructor() {
        this._usuarioRepository = new usuario_repository_1.default();
        this._utils = new utils_1.default();
        this._validacaoErro = new validacao_erro_service_1.default();
    }
    ListarUsuarios(AReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const retornoUsuarios = yield this._usuarioRepository.Listar();
                return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.SUCESSO, retornoUsuarios);
            }
            catch (error) {
                const objRetorno = this._validacaoErro.TratarErros(error);
                return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.ERRO, objRetorno);
            }
        });
    }
    BuscarUsuarioById(AReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uuid = AReq['query']['uuid'];
                const retornoUsuarios = yield this._usuarioRepository.BuscarId(uuid === null || uuid === void 0 ? void 0 : uuid.toString());
                return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.SUCESSO, retornoUsuarios);
            }
            catch (error) {
                const objRetorno = this._validacaoErro.TratarErros(error);
                return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.ERRO, objRetorno);
            }
        });
    }
    CadastrarUsuario(AReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = AReq['body']['usuario'];
                const senha_criptografada = seguranca_service_1.default.Criptografar(usuario.senha);
                const token = seguranca_service_1.default.GerarRefreshToken(usuario.email, '10s');
                usuario['senha'] = senha_criptografada;
                const retornoUsuario = yield this._usuarioRepository.Gravar(usuario);
                return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.SUCESSO, this._utils.AlterarObjeto(retornoUsuario, { token }, 'senha'));
            }
            catch (error) {
                const objRetorno = this._validacaoErro.TratarErros(error);
                return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.ERRO, objRetorno);
            }
        });
    }
    EditarUsuario(AReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = AReq['body']['usuario'];
                const senha_criptografada = seguranca_service_1.default.Criptografar(usuario.senha);
                const token = seguranca_service_1.default.GerarRefreshToken(usuario.email, '10s');
                usuario['senha'] = senha_criptografada;
                const retornoUsuario = yield this._usuarioRepository.Atualizar(usuario);
                return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.SUCESSO, this._utils.AlterarObjeto(retornoUsuario, { token }, 'senha'));
            }
            catch (error) {
                const objRetorno = this._validacaoErro.TratarErros(error);
                return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.ERRO, objRetorno);
            }
        });
    }
}
exports.default = UsuarioService;
