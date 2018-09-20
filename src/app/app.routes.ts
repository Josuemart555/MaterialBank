import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { CargoComponent } from './components/cargos/cargo/cargo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { CuentaComponent } from './components/cuentas/cuenta/cuenta.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleados/empleado/empleado.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { PrestamoComponent } from './components/prestamos/prestamo/prestamo.component';
import { TipoCuentasComponent } from './components/tipo-cuentas/tipo-cuentas.component';
import { TipoCuentaComponent } from './components/tipo-cuentas/tipo-cuenta/tipo-cuenta.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { TransaccionComponent } from './components/transacciones/transaccion/transaccion.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdvancedConfigComponent } from './components/advanced-config/advanced-config.component';
import { AuthGardService } from './providers/auth-gard.service';
import { AuthGuardLogiService } from './providers/auth-guard-logi.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'cargos',
    component: CargosComponent,
    canActivate: [ AuthGardService ]
   },
  {
    path: 'cargo/:id',
    component: CargoComponent,
    canActivate: [ AuthGardService ]
  },
  {
    path: 'clientes',
    component: ClientesComponent ,
    canActivate: [ AuthGardService ]
  },
  {
    path: 'cliente/:id',
    component: ClienteComponent ,
    canActivate: [ AuthGardService ]
  },
  {
    path: 'cuentas',
    component: CuentasComponent,
    canActivate: [ AuthGardService ]
  },
  {
    path: 'cuenta/:id',
    component: CuentaComponent ,
    canActivate: [ AuthGardService ]
  },
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [ AuthGardService ]
  },
  {
    path: 'empleado/:id',
    component: EmpleadoComponent,
    canActivate: [ AuthGardService ]
  },
  { path: 'prestamos', component: PrestamosComponent },
  { path: 'prestamo/:id', component: PrestamoComponent },
  {
    path: 'tipos-cuentas',
    component: TipoCuentasComponent ,
    canActivate: [ AuthGardService ]
  },
  {
    path: 'tipo-cuenta/:id',
    component: TipoCuentaComponent,
    canActivate: [ AuthGardService ]
  },
  { path: 'transacciones', component: TransaccionesComponent },
  { path: 'transaccion/:id', component: TransaccionComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ AuthGuardLogiService ]
   },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [ AuthGuardLogiService ] 
  },
  {
    path: 'advance-config',
    component: AdvancedConfigComponent,
    canActivate: [ AuthGardService ]
   },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
