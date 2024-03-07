"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eStatusHTTP = void 0;
var eStatusHTTP;
(function (eStatusHTTP) {
    eStatusHTTP[eStatusHTTP["SUCESSO"] = 1] = "SUCESSO";
    eStatusHTTP[eStatusHTTP["ERRO"] = 2] = "ERRO";
    eStatusHTTP[eStatusHTTP["NAO_LOCALIZADO"] = 3] = "NAO_LOCALIZADO";
    eStatusHTTP[eStatusHTTP["NAO_AUTORIZADO"] = 4] = "NAO_AUTORIZADO";
    eStatusHTTP[eStatusHTTP["ACESSO_PROIBIDO"] = 5] = "ACESSO_PROIBIDO";
    eStatusHTTP[eStatusHTTP["REGISTRO_DUPLICADO"] = 6] = "REGISTRO_DUPLICADO";
    eStatusHTTP[eStatusHTTP["REQUISICAO_INVALIDA"] = 7] = "REQUISICAO_INVALIDA";
    eStatusHTTP[eStatusHTTP["SCHEMA_NAO_ENCONTARDO"] = 8] = "SCHEMA_NAO_ENCONTARDO";
    eStatusHTTP[eStatusHTTP["ERRO_SERVIDOR"] = 99] = "ERRO_SERVIDOR";
})(eStatusHTTP || (exports.eStatusHTTP = eStatusHTTP = {}));
