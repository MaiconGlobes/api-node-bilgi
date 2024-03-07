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
const response_service_1 = __importDefault(require("../services/response.service"));
const utils_1 = __importDefault(require("../utils/utils"));
const seguranca_service_1 = __importDefault(require("../services/seguranca.service"));
const validacao_services_1 = __importDefault(require("../services/validacao.services"));
const response_enum_1 = require("../@enums/response.enum");
class ValidacaoTokenMiddleware extends response_service_1.default {
    constructor() {
        super();
        this.ValidarAccessToken = (AReq, ARes, next) => __awaiter(this, void 0, void 0, function* () {
            this._erros = new Array();
            if (AReq.headers.authorization) {
                const tokenValido = yield seguranca_service_1.default.ValidarToken(AReq.headers.authorization);
                if (!tokenValido) {
                    this._erros.push(this._validacao.DeveConterAccessTokenValido('Authorization'));
                    const objRetorno = this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.NAO_AUTORIZADO, this._erros);
                    return this.UnauthorizedObjectResult(ARes, objRetorno);
                }
            }
            next();
            return;
        });
        this._utils = new utils_1.default();
        this._validacao = new validacao_services_1.default();
    }
}
exports.default = new ValidacaoTokenMiddleware();
