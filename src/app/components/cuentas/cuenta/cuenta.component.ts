import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../../../providers/cuentas.service';
import { TipoCuentaService } from '../../../providers/tipo-cuenta.service';
import { TipoCuenta } from '../../../interfaces/tipo-cuenta';
import { Cuenta } from '../../../interfaces/cuenta';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styles: []
})
export class CuentaComponent implements OnInit {

  cuenta: Cuenta;
  tiposCuentas: TipoCuenta[] = [];

  constructor(
                private _ctS: CuentasService,
                private _tcS: TipoCuentaService
              )
              {

                this._tcS.getTiposCuentas().subscribe( data =>{
                  this.tiposCuentas = data;
                })

              }

  ngOnInit() {
  }

  guardar(){
    
  }

}
