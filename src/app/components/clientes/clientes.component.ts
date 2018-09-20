import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../providers/clientes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes: any[] = [];

  constructor(
                private _cs: ClientesService,
                private toastr: ToastrService
              ) {

    this._cs.getClientes()
            .subscribe( data =>{
              this.clientes = data;
            })

  }

  ngOnInit() {
  }

  eliminarCliente( key$: string ){

    this._cs.borrarCliente( key$ )
            .subscribe( respuesta =>{
              if ( respuesta ) {
                console.error( respuesta );
              } else {
                delete this.clientes[key$];
                this.toastr.warning('Cliente Eliminado','Operación Realizada Correctamente', {
                  timeOut: 4000,
                  positionClass: 'toast-top-right',
                });
              }
            })

  }

}
