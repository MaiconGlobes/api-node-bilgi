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
const express_validator_1 = require("express-validator");
const utils_1 = __importDefault(require("../utils/utils"));
const response_enum_1 = require("../@enums/response.enum");
const cadastro_usuario_middleware_validator_1 = __importDefault(require("./validators/cadastro.usuario.middleware.validator"));
class UsuarioMiddleware extends response_service_1.default {
    constructor() {
        super();
        this.ValidarCadastro = (AReq, ARes, next) => __awaiter(this, void 0, void 0, function* () {
            this._erros = new Array();
            yield cadastro_usuario_middleware_validator_1.default.Validar(AReq);
            const errorFormatter = ({ msg }) => {
                return msg;
            };
            const erros = (0, express_validator_1.validationResult)(AReq);
            if (!erros.isEmpty()) {
                const msgArray = (0, express_validator_1.validationResult)(AReq).formatWith(errorFormatter).array();
                msgArray.forEach((mensagem) => {
                    this._erros.push({ codigo: '22', descricao: mensagem });
                });
                return this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.REQUISICAO_INVALIDA, this._erros));
            }
            next();
            return;
        });
        this.ValidarEdicao = (AReq, ARes, next) => __awaiter(this, void 0, void 0, function* () {
            this._erros = new Array();
            yield cadastro_usuario_middleware_validator_1.default.Validar(AReq);
            const errorFormatter = ({ msg }) => {
                return msg;
            };
            const erros = (0, express_validator_1.validationResult)(AReq);
            if (!erros.isEmpty()) {
                const msgArray = (0, express_validator_1.validationResult)(AReq).formatWith(errorFormatter).array();
                msgArray.forEach((mensagem) => {
                    this._erros.push({ codigo: '22', descricao: mensagem });
                });
                return this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.REQUISICAO_INVALIDA, this._erros));
            }
            next();
            return;
        });
        this.ValidarDelecao = (AReq, ARes, next) => __awaiter(this, void 0, void 0, function* () {
            this._erros = new Array();
            yield cadastro_usuario_middleware_validator_1.default.Validar(AReq);
            const errorFormatter = ({ msg }) => {
                return msg;
            };
            const erros = (0, express_validator_1.validationResult)(AReq);
            if (!erros.isEmpty()) {
                const msgArray = (0, express_validator_1.validationResult)(AReq).formatWith(errorFormatter).array();
                msgArray.forEach((mensagem) => {
                    this._erros.push({ codigo: '22', descricao: mensagem });
                });
                return this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.REQUISICAO_INVALIDA, this._erros));
            }
            next();
            return;
        });
        this._utils = new utils_1.default();
    }
}
exports.default = new UsuarioMiddleware();
