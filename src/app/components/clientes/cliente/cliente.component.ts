import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Cliente } from '../../../interfaces/cliente';
import { ClientesService } from '../../../providers/clientes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  cliente: Cliente ={
    nombre: "",
  	edad: 0,
  	codigo: "",
  	cui: 0,
  	telefono: 0,
  	direccion: ""
  }

  id:string;

  constructor( private _cs: ClientesService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private toastr: ToastrService
             ) {

               this.activatedRoute.params.subscribe( parametros =>{
                 this.id = parametros['id']
                 if ( this.id !== "nuevo" ) {

                   this._cs.getCliente( this.id )
                            .subscribe( cliente => this.cliente = cliente );

                 }
               });

             }

  ngOnInit() {
  }

  guardar(){

    if ( this.id == "nuevo" ) {
      this._cs.nuevoCliente( this.cliente )
      .subscribe( data =>{
        this.router.navigate( ['/clientes'] );
        this.toastr.success('Cliente Agregado', 'Operación Realizada Correctamente', {
          timeOut: 4000,
          positionClass: 'toast-top-right',
        });
      },
      error => console.error(error));
    } else {
      this._cs.actualizarCliente( this.cliente, this.id )
              .subscribe( data =>{
                this.router.navigate( ['/clientes'] );
                this.toastr.info('Cliente Actualizado', 'Operación Realizada Correctamente', {
                  timeOut: 4000,
                  positionClass: 'toast-top-right',
                });
              },
              error => console.log(error));
    }

  }

}
