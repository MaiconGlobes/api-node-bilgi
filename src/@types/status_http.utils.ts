import { eStatusHTTP } from "../@enums/response.enum";
import TRetornoObjetoResponse from "./response.type";

type TMapaStatusHTTP = {
    [key in eStatusHTTP]: { status: TRetornoObjetoResponse['status']; titulo: TRetornoObjetoResponse['titulo'] };
};

  export default TMapaStatusHTTP;