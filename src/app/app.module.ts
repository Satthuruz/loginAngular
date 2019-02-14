import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './servicios/usuarios.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent, canActivate: [LoginGuard]},
  {path: 'usuarios/:id', component: UsuarioComponent, canActivate: [LoginGuard] },
  {path: 'login', component: LoginComponent, canActivate: [NoLoginGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuariosService, LoginGuard,NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
