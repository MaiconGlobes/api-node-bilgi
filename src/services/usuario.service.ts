import { Usuario } from "@prisma/client";
import { eStatusHTTP } from "../@enums/response.enum";
import TRetornoObjetoResponse from "../@types/response.type";
import Utils from "../utils/utils";
import SegurancaService from "./seguranca.service";
import ValidacaoErro from "./validacao_erro.service";
import UsuarioRepository from "../repositories/usuario.repository";
import { Request } from "express";

class UsuarioService {
   private _usuarioRepository : UsuarioRepository;
   private _utils : Utils;
   private _validacaoErro : ValidacaoErro;
    
   constructor() {
      this._usuarioRepository = new UsuarioRepository();
      this._utils = new Utils();
      this._validacaoErro = new ValidacaoErro();
   }

   public async ListarUsuarios(AReq: Request): Promise<TRetornoObjetoResponse> {
      try {
         const retornoUsuarios = await this._usuarioRepository.Listar()

         return this._utils.MontarJsonRetorno(eStatusHTTP.SUCESSO, retornoUsuarios);
      
      } catch (error) {
         const objRetorno = this._validacaoErro.TratarErros(error);
         return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, objRetorno);
      }
   }

   public async BuscarUsuarioById(AReq: Request): Promise<TRetornoObjetoResponse> {
      try {
         const uuid = AReq['query']['uuid'];
         const retornoUsuarios = await this._usuarioRepository.BuscarId(uuid?.toString())

         return this._utils.MontarJsonRetorno(eStatusHTTP.SUCESSO, retornoUsuarios);
      
      } catch (error) {
         const objRetorno = this._validacaoErro.TratarErros(error);
         return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, objRetorno);
      }
   }

   public async CadastrarUsuario(AReq: Request): Promise<TRetornoObjetoResponse> {
      try {
         const usuario = <Usuario>AReq['body']['usuario'];
         const senha_criptografada = SegurancaService.Criptografar(usuario.senha);
         const token = SegurancaService.GerarRefreshToken(usuario.email, '10s');

         usuario['senha'] = senha_criptografada;

         const retornoUsuario = await this._usuarioRepository.Gravar(usuario)

         return this._utils.MontarJsonRetorno(eStatusHTTP.SUCESSO, this._utils.AlterarObjeto(retornoUsuario, {token}, 'senha'));
      
      } catch (error) {
         const objRetorno = this._validacaoErro.TratarErros(error);
         return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, objRetorno);
      }
   }

   public async EditarUsuario(AReq: Request): Promise<TRetornoObjetoResponse> {
      try {
         const usuario = <Usuario>AReq['body']['usuario'];
         const senha_criptografada = SegurancaService.Criptografar(usuario.senha);
         const token = SegurancaService.GerarRefreshToken(usuario.email, '10s');

         usuario['senha'] = senha_criptografada;

         const retornoUsuario = await this._usuarioRepository.Atualizar(usuario)

         return this._utils.MontarJsonRetorno(eStatusHTTP.SUCESSO, this._utils.AlterarObjeto(retornoUsuario, {token}, 'senha'));
      
      } catch (error) {
         const objRetorno = this._validacaoErro.TratarErros(error);
         return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, objRetorno);
      }
   }
}

export default UsuarioService;