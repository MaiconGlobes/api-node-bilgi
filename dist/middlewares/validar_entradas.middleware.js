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
const utils_1 = __importDefault(require("../utils/utils"));
const validacao_services_1 = __importDefault(require("../services/validacao.services"));
class ValidarEntradasSistemaMiddleware extends response_service_1.default {
    constructor() {
        super();
        this.ValidarEntrada = (AError, AReq, ARes, next) => __awaiter(this, void 0, void 0, function* () {
            const catchErro = AError.stack;
            const objErros = new Array();
            if (catchErro === null || catchErro === void 0 ? void 0 : catchErro.includes('SyntaxError')) {
                objErros.push(this._validacao.ErroProcessamento('JSON', `JSON mal formatado ou inválido: ${AError.query ? AError.query : AError}`));
                this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.REQUISICAO_INVALIDA, objErros));
            }
            else {
                objErros.push(this._validacao.ErroInternoServidor(''));
                this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.ERRO_SERVIDOR, objErros));
            }
        });
        this._utils = new utils_1.default();
        this._validacao = new validacao_services_1.default();
    }
}
exports.default = new ValidarEntradasSistemaMiddleware();
