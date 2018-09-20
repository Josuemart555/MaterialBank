import { Component } from '@angular/core';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  usuario:Usuario;

  verNav: boolean = false;

  constructor(){
  }

}
