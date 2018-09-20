import { Empleado } from './empleado';
import { Cuenta } from './cuenta';
import { Prestamo } from './prestamo';

export interface Transaccion {

  codigo: string,
	tipo: string,
	numeroTransaccion: number,
	monto: number,
	fechaTransaccion: Date,
	empleado: Empleado,
	cuenta: Cuenta,
	prestamo: Prestamo

}
