import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

//Routes
import { APP_ROUTING } from './app.routes';

//services
import { BancoService } from './providers/banco.service';
import { CargosService } from './providers/cargos.service';
import { ClientesService } from './providers/clientes.service';
import { TipoCuentaService } from './providers/tipo-cuenta.service';
import { EmpleadoService } from './providers/empleado.service';
import { HomeService } from './providers/home.service';
import { LoginService } from './providers/login.service';
import { SignUpService } from './providers/sign-up.service';
import { AuthGardService } from './providers/auth-gard.service';
import { AuthGuardLogiService } from './providers/auth-guard-logi.service';
import { CuentasService } from './providers/cuentas.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { CargoComponent } from './components/cargos/cargo/cargo.component';
import { TipoCuentasComponent } from './components/tipo-cuentas/tipo-cuentas.component';
import { TipoCuentaComponent } from './components/tipo-cuentas/tipo-cuenta/tipo-cuenta.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { CuentaComponent } from './components/cuentas/cuenta/cuenta.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleados/empleado/empleado.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { PrestamoComponent } from './components/prestamos/prestamo/prestamo.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { TransaccionComponent } from './components/transacciones/transaccion/transaccion.component';

//pipes
import { KeysPipe } from './pipes/keys.pipe';
import { KeysClientePipe } from './pipes/keys-cliente.pipe';
import { KeysTipoCuentaPipe } from './pipes/keys-tipo-cuenta.pipe';
import { KeysEmpleadoPipe } from './pipes/keys-empleado.pipe';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdvancedConfigComponent } from './components/advanced-config/advanced-config.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CargosComponent,
    CargoComponent,
    TipoCuentasComponent,
    TipoCuentaComponent,
    CuentasComponent,
    CuentaComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ClientesComponent,
    ClienteComponent,
    PrestamosComponent,
    PrestamoComponent,
    TransaccionesComponent,
    TransaccionComponent,
    KeysPipe,
    KeysClientePipe,
    KeysTipoCuentaPipe,
    KeysEmpleadoPipe,
    LoginComponent,
    SignUpComponent,
    AdvancedConfigComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    CdkTableModule

  ],
  providers: [
    BancoService,
    CargosService,
    ClientesService,
    TipoCuentaService,
    EmpleadoService,
    HomeService,
    LoginService,
    KeysPipe,
    SignUpService,
    AuthGardService,
    AuthGuardLogiService,
    CuentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
