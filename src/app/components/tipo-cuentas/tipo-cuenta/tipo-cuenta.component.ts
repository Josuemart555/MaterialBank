import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { TipoCuenta } from '../../../interfaces/tipo-cuenta';
import { TipoCuentaService } from '../../../providers/tipo-cuenta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tipo-cuenta',
  templateUrl: './tipo-cuenta.component.html',
  styles: []
})
export class TipoCuentaComponent implements OnInit {

  tipoCuenta: TipoCuenta = {
    codigo: 0,
    nombre: "",
    saldoApertura: 0
  }

  id:string;

  constructor(
                private _tcs: TipoCuentaService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private toastr: ToastrService
             ) {

               this.activatedRoute.params.subscribe( parametros =>{

                 this.id = parametros['id']
                 if ( this.id !== "nuevo" ) {

                   this._tcs.getTipoCuenta( this.id )
                            .subscribe( tipoCuenta => this.tipoCuenta = tipoCuenta );

                 }

               })

             }

  ngOnInit() {
  }

  guardar(){

    if ( this.id == "nuevo" ) {
      this._tcs.nuevoTipoCuenta( this.tipoCuenta )
                .subscribe( data =>{
                  this.router.navigate( ['/tipos-cuentas'] );
                  this.toastr.success('Tipo de Cuenta Agregado', 'Operación Realizada Correctamente', {
                    timeOut: 4000,
                    positionClass: 'toast-top-right',
                  });
                },
      error => console.error(error));
    } else {
      this._tcs.actualizarTipoCuenta( this.tipoCuenta, this.id )
               .subscribe( data =>{
                 this.router.navigate( ['/tipos-cuentas'] );
                 this.toastr.info('Tipo de Cuenta Actualizado', 'Operación Realizada Correctamente', {
                   timeOut: 4000,
                   positionClass: 'toast-top-right',
                 });
               },
               error => console.error(error));
    }

  }

}
