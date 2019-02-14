import { Injectable } from '@angular/core';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios = [
    {id:1, nombre: 'Stalin', apellido: 'Pilapanta'},
    {id:2, nombre: 'Kevin', apellido: 'Morales'},
    {id:3, nombre: 'Miguel', apellido: 'Caisa'},
    {id:4, nombre: 'James', apellido: 'Aguaisa'}
  ];

  constructor() { }

  getUsuarios(){
    return this.usuarios;
  }

  getUsuario(id: number){
    return this.getUsuarios().find( usuario => usuario.id === id);
  }
}
