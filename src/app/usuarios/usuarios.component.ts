import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { Http } from '@angular/http';
import { Users}  from '../models/users';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  Users: Array<Users>;


  fecha = new Date();
  hora = this.fecha.getHours();
  minuto = this.fecha.getMinutes();
  segundo = this.fecha.getSeconds();

  actual = this.hora + " : " + this.minuto + " : " + this.segundo;

  usuarios: any[];
  constructor(private usuariosService: UsuariosService, private http: Http) { 

    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(resp => this.Users = resp.json());
  }

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }
  // mostrarhora(){
  //   var fecha = new Date();
  //   let hora = fecha.getHours();
  //   let minuto = fecha.getMinutes();
  //   let segundos = fecha.getSeconds();
  //   let actual = hora + ' : ' + minuto + ' : ' + segundos;
  //   document.getElementById('mostrarhora').innerHTML = actual;
  // }
}
