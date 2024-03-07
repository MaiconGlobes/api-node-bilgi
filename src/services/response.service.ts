import { Response, Request } from 'express';
import TRetornoObjetoResponse from '../@types/response.type';

/*Nome de métodos baseados em cada nome de verbos HTTP em https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status*/

class ResponseService {

  private ProcurarObjJSONRetorno({ status, codigo_status, titulo, conteudo }: TRetornoObjetoResponse): Object {
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

  protected async OkObjectResult(Aresp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return Aresp.status(200).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }

  protected async CreatedObjectResult(Aresp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return Aresp.status(201).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }

  protected async NotFoundResult(AResp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return AResp.status(200).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }

  protected async NoContentResult(Aresp: Response): Promise<Response> {
    return Aresp.status(204).json();
  }

  protected async ConflictObjectResult(Aresp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return Aresp.status(409).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }

  protected async BadRequestResult(Aresp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return Aresp.status(400).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }

  protected async UnauthorizedObjectResult(Aresp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return Aresp.status(401).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }

  protected async ForbiddenObjectResult(Aresp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return Aresp.status(403).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }

  protected async UnprocessableEntity(AResp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return AResp.status(422).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }

  protected async ServerErrorMessageResult(AResp: Response, AObjetoRetorno: TRetornoObjetoResponse): Promise<Response> {
    return AResp.status(500).json(this.ProcurarObjJSONRetorno(AObjetoRetorno));
  }
}

export default ResponseService;