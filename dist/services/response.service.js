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
/*Nome de métodos baseados em cada nome de verbos HTTP em https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status*/
class ResponseService {
    ProcurarObjJSONRetorno({ status, codigo_status, titulo, conteudo }) {
        const atributosComuns = {
            status: status,
            codigo_status: codigo_status,
            [titulo]: conteudo,
        };
        const objJSONRetorno = {
            retorno: atributosComuns,
        };
        return objJSONRetorno;
    }
    OkObjectResult(Aresp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return Aresp.status(200).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
    CreatedObjectResult(Aresp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return Aresp.status(201).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
    NotFoundResult(AResp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return AResp.status(200).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
    NoContentResult(Aresp) {
        return __awaiter(this, void 0, void 0, function* () {
            return Aresp.status(204).json();
        });
    }
    ConflictObjectResult(Aresp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return Aresp.status(409).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
    BadRequestResult(Aresp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return Aresp.status(400).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
    UnauthorizedObjectResult(Aresp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return Aresp.status(401).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
    ForbiddenObjectResult(Aresp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return Aresp.status(403).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
    UnprocessableEntity(AResp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return AResp.status(422).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
    ServerErrorMessageResult(AResp, AObjetoRetorno) {
        return __awaiter(this, void 0, void 0, function* () {
            return AResp.status(500).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
        });
    }
}
exports.default = ResponseService;
