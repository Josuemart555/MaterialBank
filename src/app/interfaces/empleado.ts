import { Cargo } from './cargo';

export interface Empleado {

  codigo: number,
	nombre: string,
	edad: number,
	cui: number,
	fechaContrato: string,
	cargo: Cargo

}
