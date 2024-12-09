import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private sqlite: SQLite) {
    this.crearTablas();
   }

   crearTablas() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table if not exists persona (usuario varchar(30), contrasena varchar(30), correo varchar(75), nombre varchar(30), apellido varchar(30))', [])
          .then(() => console.log('LFSC: EJECUCION CORRECTAMENTE'))
          .catch(e => console.log('LFSC: ERROR AL CREAR TABLA PERSONA'+ JSON.stringify(e)));
    
    
      })
      .catch(e => console.log('LFSC: ERROR AL CREAR O ABRIR BASE DE DATOS'+ JSON.stringify(e)));
   }


  

   almacenarUsuario(usuario: string, contrasena: string, correo: string, nombre: string, apellido: string) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('insert into persona values(?, ?, ?, ?, ?)', [usuario, contrasena, correo, nombre, apellido])
          .then(() => console.log('LFSC: PERSONA ALMACENADA '))
          .catch(e => console.log('LFSC: ERROR AL ALMACENAR PERSONA' + JSON.stringify(e)));
      })
      .catch(e => console.log('LFSC: ERROR AL CREAR O ABRIR DB'));
   }

   loginUsuario(usuario: string, contrasena: string){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql('select count(usuario) as cantidad from persona where usuario = ? and contrasena = ?', [usuario, contrasena])
          .then((data) => {
            return data.rows.item(0).cantidad;
          })
          .catch(e => console.log('LFSC: ERROR AL HACER LOGIN' + JSON.stringify(e)));
      })
      .catch(e => console.log('LFSC: ERROR AL CREAR O ABRIR DB'));
   }

   infoUsuario(usuario: string, contrasena: string) {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql(
          'SELECT correo, nombre, apellido FROM persona WHERE usuario = ? AND contrasena = ?',
          [usuario, contrasena]
        )
        .then((result: any) => {
          if (result.rows && result.rows.length > 0) {
            let objeto: any = {};
            objeto.nombre = result.rows.item(0).nombre;
            objeto.correo = result.rows.item(0).correo;
            objeto.apellido = result.rows.item(0).apellido;
    
            return objeto;
          } else {
            console.log('LFSC: No se encontraron datos para el usuario y contraseña proporcionados.');
            return null;
          }
        })
        .catch(e => console.error('LFSC: ERROR AL TENER INFO DE PERSONA:', e.message || JSON.stringify(e)));
      })
      .catch(e => console.error('LFSC: ERROR AL CREAR O ABRIR DB:', e.message || JSON.stringify(e)));

   }

   cambiarContrasena(usuario: string, contrasenaActual: string, contrasenaNueva: string){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('update persona set contrasena = ? where usuario = ? and contrasena = ?', [contrasenaNueva, usuario, contrasenaActual])
          .then(() => console.log('LFSC: CONTRASENA MODIFICADA '))
          .catch(e => console.log('LFSC: ERROR AL MODIFICAR CONTRASENA' + JSON.stringify(e)));
      })
      .catch(e => console.log('LFSC: ERROR AL CREAR O ABRIR DB'));
   }
   
   

}
