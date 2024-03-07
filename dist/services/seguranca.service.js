"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const utils_1 = __importDefault(require("../utils/utils"));
const bcrypt = __importStar(require("bcrypt"));
class SegurancaService {
    constructor() {
        this._utils = new utils_1.default();
        this._jwt = require('jsonwebtoken');
        this._secret_key = 'chave_sereta';
    }
    Criptografar(AsenhaDescriptografada) {
        const secret = process.env.SECRET_KEY || '';
        return bcrypt.hashSync(`${secret} ${AsenhaDescriptografada}`, 10);
    }
    ChecarHash(AsenhaCriptografada, AsenhaDescriptografada) {
        const secret = process.env.SECRET_KEY || '';
        return bcrypt.compareSync(`${secret} ${AsenhaDescriptografada}`, AsenhaCriptografada);
    }
    GerarRefreshToken(AEmail, APeriodo) {
        const payload = {
            email: AEmail,
            tipo: 'refresh_token',
        };
        const options = {
            expiresIn: APeriodo,
            algorithm: 'HS256',
        };
        const refreshToken = this._jwt.sign(payload, this._secret_key, options);
        return refreshToken;
    }
    ValidarToken(AToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (AToken === undefined) {
                return false;
            }
            let tokenValido = false;
            this._jwt.verify(AToken, this._secret_key, (erro) => {
                tokenValido = erro ? false : true;
            });
            return tokenValido;
        });
    }
}
exports.default = new SegurancaService;
