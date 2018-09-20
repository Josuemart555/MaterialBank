import { Component, OnInit } from '@angular/core';
import { TipoCuentaService } from '../../providers/tipo-cuenta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tipo-cuentas',
  templateUrl: './tipo-cuentas.component.html'
})
export class TipoCuentasComponent implements OnInit {

  tiposCuentas: any[] = [];

  constructor(
                private _tcs: TipoCuentaService,
                private toastr: ToastrService
              ) {

    this._tcs.getTiposCuentas()
             .subscribe( data =>{

               this.tiposCuentas = data;

             });

  }

  ngOnInit() {
  }

  eliminarTipoCuenta( key$:string ){

    this._tcs.borrarTipoCuenta( key$ )
              .subscribe( respuesta =>{
                if ( respuesta ) {
                    console.error(respuesta);
                } else {
                  delete this.tiposCuentas[key$];
                  this.toastr.warning('Tipo de Cuenta Eliminado', 'Operación Realizada Correctamente', {
                    timeOut: 4000,
                    positionClass: 'toast-top-right',
                  });
                }
              })

  }

}
