"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const erros_enum_1 = require("../@enums/erros.enum");
const response_enum_1 = require("../@enums/response.enum");
const utils_1 = __importDefault(require("../utils/utils"));
const validacao_services_1 = __importDefault(require("./validacao.services"));
class ValidacaoErro {
    constructor() {
        this._utils = new utils_1.default();
        this._validacaoServices = new validacao_services_1.default();
    }
    TratarErros(AErro) {
        switch (AErro === null || AErro === void 0 ? void 0 : AErro.code) {
            case erros_enum_1.eCodigoErro.DUPLICATE_KEY_VALUE_MYSQL:
                return this.ErroRegistroDuplicado(AErro, new Array());
            case erros_enum_1.eCodigoErro.VALUE_NOT_PRESENT_MYSQL:
                return this.ErroValorNaoPresente(AErro, new Array());
            case erros_enum_1.eCodigoErro.VALUE_TO_LONG_MYSQL:
                return this.ErroValorMuitoLongo(new Array());
            case erros_enum_1.eCodigoErro.INPUT_INVALID_MYSQL:
                return this.ErroEntradaInvalida(new Array());
            default:
                return this.ErroDefault(AErro, new Array());
        }
    }
    ErroRegistroDuplicado(AErro, AArrayErros) {
        const regex = /Unique constraint failed on the constraint/gi;
        let resultado = '';
        const reg_duplicado = regex.test(AErro === null || AErro === void 0 ? void 0 : AErro.message);
        if (reg_duplicado)
            resultado = 'Registro duplicado! Violação de Unique constraint.';
        AArrayErros.push(this._validacaoServices.DuplicidadeDeRegistro((AErro === null || AErro === void 0 ? void 0 : AErro.table) ? AErro.table : 'Banco de dados', resultado));
        return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.REGISTRO_DUPLICADO, AArrayErros);
    }
    ErroValorNaoPresente(AErro, AArrayErros) {
        const str = AErro === null || AErro === void 0 ? void 0 : AErro.detail.slice(4);
        let resultado = str.replace('(', '[');
        resultado = resultado.replace(')', ']');
        resultado = resultado.replace(/[\\"]/g, '');
        resultado = resultado.replace('is not present in table', 'não está presente na tabela');
        AArrayErros.push(this._validacaoServices.ErroProcessamento('Banco de dados', resultado));
        return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.ERRO, AArrayErros);
    }
    ErroValorMuitoLongo(AArrayErros) {
        AArrayErros.push(this._validacaoServices.ErroProcessamento('Banco de dados', 'Valor muito longo para um ou mais campos da tabela do banco de dados.'));
        return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.ERRO, AArrayErros);
    }
    ErroDefault(AErro, AArrayErros) {
        const regex = /Invalid `database/gi;
        let resultado = '';
        const reg_duplicado = regex.test(AErro === null || AErro === void 0 ? void 0 : AErro.message);
        if (reg_duplicado)
            resultado = `Banco de dados inválido\n#:${AErro === null || AErro === void 0 ? void 0 : AErro.message}`;
        AArrayErros.push(this._validacaoServices.DuplicidadeDeRegistro((AErro === null || AErro === void 0 ? void 0 : AErro.table) ? AErro.table : 'Banco de dados', resultado));
        return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.REGISTRO_DUPLICADO, AArrayErros);
        ;
    }
    ErroEntradaInvalida(AArrayErros) {
        AArrayErros.push(this._validacaoServices.ErroProcessamento('Banco de dados', 'sintaxe de entrada inválida para um ou mais tipos.'));
        return this._utils.MontarJsonRetorno(response_enum_1.eStatusHTTP.ERRO, AArrayErros);
    }
}
exports.default = ValidacaoErro;
