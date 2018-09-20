import { Component, OnInit } from '@angular/core';
import { CargosService } from '../../providers/cargos.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html'
})
export class CargosComponent implements OnInit {

  cargos: any[] = [];

  constructor( private _cs: CargosService,
               private toastr: ToastrService,
               private router: Router
              ) {

    this._cs.getCargos()
            .subscribe( data =>{

              this.cargos = data;

            });

  }

  ngOnInit() {
  }

  eliminarCargo( key$:string ){

    this._cs.borrarCargo(key$)
            .subscribe( respuesta =>{
              if( respuesta ){
                console.error(respuesta);
              } else {
                delete this.cargos[key$];
                this.toastr.error('Cargo Eliminado', 'Operación Realizada Correctamente', {
                  timeOut: 4000,
                  positionClass: 'toast-top-center',
                });
              }
            })

  }

  regresaAdCig(){
    this.router.navigate( ['/advanced-config'] );
  }

}
