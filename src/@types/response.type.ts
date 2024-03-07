import { Response } from "express";
import { eStatusHTTP } from "../@enums/response.enum";

type TRetornoObjetoResponse<T = Object> = {
  status?:
    | 'Sucesso'
    | 'Erro'
    | 'Não localizado'
    | 'Não autorizado'
    | 'Acesso proibido'
    | 'Registro duplicado'
    | 'Requisição inválida'
    | 'Schema não encontrado'
    | 'Erro de servidor';
  codigo_status: eStatusHTTP;
  titulo: 'dados' | 'mensagens';
  //@ts-ignore
  conteudo: T | Response;
};

export default TRetornoObjetoResponse;