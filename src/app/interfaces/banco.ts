import { Cargo } from './cargo';
import { Empleado } from './empleado';
import { TipoCuenta } from './tipo-cuenta';
import { Cliente } from './cliente';
import { Cuenta } from './Cuenta';
import { Prestamo } from './prestamo';
import { Transaccion } from './transaccion';

export interface Banco {

  nombre: string,
	ubicacion: string,
	correoElectronico: string,
	telefono: number,
	listaCargos?: Cargo,
	listaEmpleados?: Empleado,
	listaTiposCuentas?: TipoCuenta,
	listaClientes?: Cliente,
	listaCuentas?: Cuenta,
	listaPrestamos?: Prestamo,
	listaTransacciones?: Transaccion

}
