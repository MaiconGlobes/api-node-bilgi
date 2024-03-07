"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_enum_1 = require("../@enums/response.enum");
class Utils {
    MontarJsonRetorno(ACodigo_status, AConteudo) {
        const mapaStatusHTTP = {
            [response_enum_1.eStatusHTTP.SUCESSO]: { status: 'Sucesso', titulo: 'dados' },
            [response_enum_1.eStatusHTTP.ERRO]: { status: 'Erro', titulo: 'mensagens' },
            [response_enum_1.eStatusHTTP.NAO_LOCALIZADO]: { status: 'Não localizado', titulo: 'mensagens' },
            [response_enum_1.eStatusHTTP.NAO_AUTORIZADO]: { status: 'Não autorizado', titulo: 'mensagens' },
            [response_enum_1.eStatusHTTP.ACESSO_PROIBIDO]: { status: 'Acesso proibido', titulo: 'mensagens' },
            [response_enum_1.eStatusHTTP.REGISTRO_DUPLICADO]: { status: 'Registro duplicado', titulo: 'mensagens' },
            [response_enum_1.eStatusHTTP.REQUISICAO_INVALIDA]: { status: 'Requisição inválida', titulo: 'mensagens' },
            [response_enum_1.eStatusHTTP.SCHEMA_NAO_ENCONTARDO]: { status: 'Schema não encontrado', titulo: 'mensagens' },
            [response_enum_1.eStatusHTTP.ERRO_SERVIDOR]: { status: 'Erro de servidor', titulo: 'mensagens' },
        };
        const { status, titulo } = mapaStatusHTTP[ACodigo_status] || {
            status: 'Erro de servidor',
            titulo: 'mensagens',
        };
        return {
            status,
            codigo_status: ACodigo_status,
            titulo,
            //@ts-ignore
            conteudo: AConteudo,
        };
    }
    AlterarObjeto(AObjeto, APropAdicionar, ...APropOmitir) {
        const prop = Object.assign({}, AObjeto);
        APropOmitir.forEach(propriedade => {
            delete prop[propriedade];
        });
        const objetoManipulado = Object.assign(Object.assign({}, prop), APropAdicionar);
        return objetoManipulado;
    }
    ValidarCPF(ACPF) {
        const cnpjInvalidos = [
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999',
        ];
        if (ACPF === undefined || ACPF === null) {
            return false;
        }
        cnpjInvalidos.forEach((element) => {
            if (ACPF === element)
                return false;
        });
        let soma = 0;
        let resto = 0;
        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(ACPF.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        resto = resto == 10 || resto == 11 ? 0 : resto;
        if (resto != parseInt(ACPF.substring(9, 10))) {
            return false;
        }
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(ACPF.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        resto = resto == 10 || resto == 11 ? 0 : resto;
        if (resto != parseInt(ACPF.substring(10, 11))) {
            return false;
        }
        return true;
    }
}
exports.default = Utils;
