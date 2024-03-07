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
const express_validator_1 = require("express-validator");
const utils_1 = __importDefault(require("../../utils/utils"));
const validacao_services_1 = __importDefault(require("../../services/validacao.services"));
class ValidacaousuarioMiddleware {
    constructor() {
        this._utils = new utils_1.default();
        this._validacaoServices = new validacao_services_1.default();
    }
    Validar(AReq) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpfValido = false || this._utils.ValidarCPF(AReq['body']['usuario']['cpf']);
            yield (0, express_validator_1.check)('usuario.nome').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.nome')).run(AReq);
            yield (0, express_validator_1.check)('usuario.nome').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.nome')).run(AReq);
            yield (0, express_validator_1.check)('usuario.nome').isLength({ min: 10, max: 50 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.nome', 10, 50)).run(AReq);
            yield (0, express_validator_1.check)('usuario.email').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.email')).run(AReq);
            yield (0, express_validator_1.check)('usuario.email').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.email')).run(AReq);
            yield (0, express_validator_1.check)('usuario.email').isLength({ min: 3, max: 200 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.email', 3, 200)).run(AReq);
            yield (0, express_validator_1.check)('usuario.email').isEmail().withMessage(this._validacaoServices.DeveConterEMAILValido('usuario.email')).run(AReq);
            yield (0, express_validator_1.check)('usuario.senha').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.senha')).run(AReq);
            yield (0, express_validator_1.check)('usuario.senha').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.senha')).run(AReq);
            yield (0, express_validator_1.check)('usuario.senha').isLength({ min: 6, max: 8 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.senha', 6, 8)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.cpf`).optional().exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo(`usuario.cpf`)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.cpf`).optional().custom(() => cpfValido).withMessage(this._validacaoServices.DeveConterCPFValido(`usuario.cpf`)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.cpf`).optional().isLength({ min: 11, max: 11 }).withMessage(this._validacaoServices.DeveConterXCaracteres(`usuario.cpf`, 11)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.cpf`).optional().isNumeric({ no_symbols: true }).withMessage(this._validacaoServices.DeveConterColecaoStringNumerica(`usuario.cpf`)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.data_nascimento`).optional({ nullable: true }).notEmpty().withMessage(this._validacaoServices.NaoPodeSerVazio(`usuario.data_nascimento`)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.data_nascimento`).optional({ nullable: true }).isISO8601().withMessage(this._validacaoServices.DeveConterDATAValida(`usuario.data_nascimento`)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.endereco`).optional().isLength({ max: 100 }).withMessage(this._validacaoServices.DeveConterNoMaximoXCaracteres(`usuario.endereco`, 100)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.numero`).optional().isLength({ min: 1, max: 10 }).withMessage(this._validacaoServices.DeveTerValorEntre(`usuario.numero`, 1, 10)).run(AReq);
            yield (0, express_validator_1.check)('usuario.municipio').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.municipio')).run(AReq);
            yield (0, express_validator_1.check)('usuario.municipio').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.municipio')).run(AReq);
            yield (0, express_validator_1.check)('usuario.municipio').isLength({ min: 1, max: 50 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.municipio', 1, 50)).run(AReq);
            yield (0, express_validator_1.check)('usuario.uf').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.uf')).run(AReq);
            yield (0, express_validator_1.check)('usuario.uf').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.uf')).run(AReq);
            yield (0, express_validator_1.check)('usuario.uf').isLength({ min: 2, max: 2 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.uf', 2, 2)).run(AReq);
            yield (0, express_validator_1.check)(`usuario.cep`).optional().isNumeric({ no_symbols: true }).withMessage(this._validacaoServices.DeveConterColecaoStringNumerica(`usuario.cep`)).run(AReq);
            yield (0, express_validator_1.check)('usuario.cep').isLength({ min: 8, max: 8 }).withMessage(this._validacaoServices.DeveConterXDigitos('usuario.municipio', 8)).run(AReq);
        });
    }
}
exports.default = new ValidacaousuarioMiddleware();
