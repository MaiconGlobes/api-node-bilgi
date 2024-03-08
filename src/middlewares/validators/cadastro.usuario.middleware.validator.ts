import { Request } from 'express';
import { check } from 'express-validator';
import Utils from '../../utils/utils';
import IMiddlwareValidar from '../../interfaces/middleware.validar.interface';
import ValidacaoServices from '../../services/validacao.services';

class ValidacaousuarioMiddleware implements IMiddlwareValidar {
  private _utils : Utils;
  private _validacaoServices : ValidacaoServices;

  constructor() {
    this._utils = new Utils();
    this._validacaoServices = new ValidacaoServices();
  }

  public async Validar(AReq: Request): Promise<void> {
    // const cpfValido: boolean = true ;//false || this._utils.ValidarCPF(AReq['body']['usuario']['cpf']);

    // await check('usuario.nome').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.nome')).run(AReq);
    // await check('usuario.nome').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.nome')).run(AReq);
    // await check('usuario.nome').isLength({ min: 10, max: 50 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.nome', 10, 50)).run(AReq);
  
    // await check('usuario.email').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.email')).run(AReq);
    // await check('usuario.email').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.email')).run(AReq);
    // await check('usuario.email').isLength({ min: 3, max: 200 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.email', 3, 200)).run(AReq);
    // await check('usuario.email').isEmail().withMessage(this._validacaoServices.DeveConterEMAILValido('usuario.email')).run(AReq);

    // await check('usuario.senha').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.senha')).run(AReq);
    // await check('usuario.senha').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.senha')).run(AReq);
    // await check('usuario.senha').isLength({ min: 6, max: 8 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.senha', 6, 8)).run(AReq);

    // await check(`usuario.cpf`).optional().exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo(`usuario.cpf`)).run(AReq);
    // await check(`usuario.cpf`).optional().custom(() => cpfValido).withMessage(this._validacaoServices.DeveConterCPFValido(`usuario.cpf`)).run(AReq);
    // await check(`usuario.cpf`).optional().isLength({ min: 11, max: 11 }).withMessage(this._validacaoServices.DeveConterXCaracteres(`usuario.cpf`, 11)).run(AReq);
    // await check(`usuario.cpf`).optional().isNumeric({ no_symbols: true }).withMessage(this._validacaoServices.DeveConterColecaoStringNumerica(`usuario.cpf`)).run(AReq);

    // await check(`usuario.data_nascimento`).notEmpty().withMessage(this._validacaoServices.NaoPodeSerVazio(`usuario.data_nascimento`)).run(AReq);
    // await check(`usuario.data_nascimento`).isISO8601().withMessage(this._validacaoServices.DeveConterDATAValida(`usuario.data_nascimento`)).run(AReq);

    // await check(`usuario.endereco`).optional().isLength({ max: 100 }).withMessage(this._validacaoServices.DeveConterNoMaximoXCaracteres(`usuario.endereco`, 100)).run(AReq);
    
    // await check(`usuario.numero`).optional().isLength({ min: 1, max: 10 }).withMessage(this._validacaoServices.DeveTerValorEntre(`usuario.numero`, 1, 10)).run(AReq);

    // await check('usuario.municipio').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.municipio')).run(AReq);
    // await check('usuario.municipio').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.municipio')).run(AReq);
    // await check('usuario.municipio').isLength({ min: 1, max: 50 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.municipio', 1, 50)).run(AReq);
  
    // await check('usuario.uf').exists().withMessage(this._validacaoServices.DeveSerInformado('usuario.uf')).run(AReq);
    // await check('usuario.uf').exists({ checkNull: true }).withMessage(this._validacaoServices.NaoPodeSerNulo('usuario.uf')).run(AReq);
    // await check('usuario.uf').isLength({ min: 2, max: 2 }).withMessage(this._validacaoServices.DeveConterDeXaXCaracteres('usuario.uf', 2, 2)).run(AReq);
  
    // await check(`usuario.cep`).optional().isNumeric({ no_symbols: true }).withMessage(this._validacaoServices.DeveConterColecaoStringNumerica(`usuario.cep`)).run(AReq);
    // await check('usuario.cep').isLength({ min: 8, max: 8 }).withMessage(this._validacaoServices.DeveConterXDigitos('usuario.cep', 8)).run(AReq);

  }
}

export default new ValidacaousuarioMiddleware();