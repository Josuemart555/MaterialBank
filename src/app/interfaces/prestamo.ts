import { Cliente } from './cliente';
import { Transaccion } from './transaccion';

export interface Prestamo {

  numeroPrestamo: number,
	 saldoInicial: number,
	 montoPagado: number,
	 saldoDebido: number,
	 cliente: Cliente
   transaccion: Transaccion[]

}
