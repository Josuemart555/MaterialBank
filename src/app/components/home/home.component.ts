import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../providers/home.service';
import { Usuario } from '../../interfaces/usuario';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public usuariosList: Usuario[] = [];

  usuario = {
    email: "",
    password: "",
    role: ""
  }

  priveraVez:boolean;

  constructor(
                private _hs: HomeService,
                private router: Router,
              ) {

      if ( JSON.parse( localStorage.getItem('usuario') ) == null || JSON.parse( localStorage.getItem('usuario') ) == '' ) {
            this.router.navigate(['/login'])
      } else {
          this.usuario = JSON.parse(localStorage.getItem('usuario'))
      }


  }

  ngOnInit() {

  }

  signOff(){

    localStorage.setItem('usuario', null);
    localStorage.setItem('role', null);
    window.localStorage.clear();
    this.router.navigate( ['login'] );

  }

}
