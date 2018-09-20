import { TipoCuenta } from './tipo-cuenta';
import { Transaccion } from './transaccion';

export interface Cuenta {

  tipoCuenta: TipoCuenta,
	saldoInicial: number,
	saldo: number,
	numeroCuenta: number,
	fechaCreacion: Date,
	listaTransacciones?: Transaccion[]
}
