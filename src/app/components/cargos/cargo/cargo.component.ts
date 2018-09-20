import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Cargo } from '../../../interfaces/cargo';
import { CargosService } from '../../../providers/cargos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styles: []
})
export class CargoComponent implements OnInit {

  private cargo:Cargo = {
    codigo:"",
    tipoCargo:"",
    sueldo: 0
  }

  nuevo: boolean = false;
  id:string;

  constructor( private _cs: CargosService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private toastr: ToastrService
             ) {

                 this.activatedRoute.params.subscribe( parametros =>{
                                            this.id = parametros['id']
                                            if ( this.id !== "nuevo" ) {

                                              this._cs.getCargo( this.id )
                                                      .subscribe( cargo => this.cargo = cargo )

                                            }
                                          });

               }

  ngOnInit() {
  }

  guardar(){

    if ( this.id == "nuevo" ) {
      this._cs.nuevoCargo( this.cargo )
              .subscribe( data =>{
                this.router.navigate( ['/cargos'] );
                this.toastr.success('Cargo Agregado', 'Operación Realizada Correctamente', {
                  timeOut: 4000,
                  positionClass: 'toast-top-right',
                });
              },
              error=> console.error(error));
    } else {
      this._cs.actualizarCargo( this.cargo, this.id )
              .subscribe( data =>{
                this.router.navigate( ['/cargos'] );
                this.toastr.info('Cargo Actualizado', 'Operación Realizada Correctamente', {
                  timeOut: 4000,
                  positionClass: 'toast-top-right',
                });
              },
              error => console.log(error));
    }

  }

}
