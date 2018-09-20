import { Cuenta } from './cuenta';

export interface Cliente {

  nombre: string,
	edad: number,
	codigo: string,
	cui: number,
	telefono: number,
	direccion: string,
	listaCuentas?: Cuenta[]

}
