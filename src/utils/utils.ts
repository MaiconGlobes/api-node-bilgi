import { eStatusHTTP } from '../@enums/response.enum';
import TRetornoObjetoResponse from '../@types/response.type';
import MapaStatusHTTP from '../@types/status_http.utils';

class Utils {

	public MontarJsonRetorno(ACodigo_status: eStatusHTTP, AConteudo?: Object): TRetornoObjetoResponse {
		const mapaStatusHTTP: MapaStatusHTTP = {
			[eStatusHTTP.SUCESSO]: { status: 'Sucesso', titulo: 'dados' },
			[eStatusHTTP.ERRO]: { status: 'Erro', titulo: 'mensagens' },
			[eStatusHTTP.NAO_LOCALIZADO]: { status: 'Não localizado', titulo: 'mensagens' },
			[eStatusHTTP.NAO_AUTORIZADO]: { status: 'Não autorizado', titulo: 'mensagens' },
			[eStatusHTTP.ACESSO_PROIBIDO]: { status: 'Acesso proibido', titulo: 'mensagens' },
			[eStatusHTTP.REGISTRO_DUPLICADO]: { status: 'Registro duplicado', titulo: 'mensagens' },
			[eStatusHTTP.REQUISICAO_INVALIDA]: { status: 'Requisição inválida', titulo: 'mensagens' },
			[eStatusHTTP.SCHEMA_NAO_ENCONTARDO]: { status: 'Schema não encontrado', titulo: 'mensagens' },
			[eStatusHTTP.ERRO_SERVIDOR]: { status: 'Erro de servidor', titulo: 'mensagens' },
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

	public AlterarObjeto<T, K extends keyof T>(AObjeto: T, APropAdicionar : object | object[] | null, ...APropOmitir: K[]): Omit<T, K> {
		const prop: Partial<T> = { ...AObjeto };

		APropOmitir.forEach(propriedade => {
			delete prop[propriedade];
		});

		const objetoManipulado = {
			...prop,
			...APropAdicionar,
			};

		return objetoManipulado as Omit<T, K>;
	}

	public ValidarCPF(ACPF: string): boolean {
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
		if (ACPF === element) return false;
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

export default Utils;