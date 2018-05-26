import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-crear-cuenta',
  templateUrl: 'crear-cuenta.html',
})
export class CrearCuentaPage {

  tel: any;
  sexo: any;
  usuario: any;
  idUsuario: any;
  ref: any;
  hora: string;
  dia: string;
  ano_nacimiento: number;
  conf_contrasena: any;
  contrasena: any;
  correo: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuentaPage');
  }

  registrarse() {
    let alert = this.alertCtrl.create();
    var fecha = new Date();
    if (
      this.usuario != "" &&
      this.contrasena != "" &&
      this.conf_contrasena != "" &&
      this.sexo != "" &&
      this.ano_nacimiento != 0 &&
      this.tel != "" &&
      this.correo != "")

      if (this.contrasena == this.conf_contrasena && this.ano_nacimiento <= 2000) {
        this.dia = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        this.hora = fecha.getHours() + ":" + fecha.getMinutes();
        this.ref = firebase.database().ref().child("usuarios");
        this.idUsuario = this.ref.push().key;
        this.ref.child(this.idUsuario).set({
          usuario: this.usuario,
          sexo: this.sexo,
          contrasena: this.contrasena,
          ano_nacimiento: this.ano_nacimiento,
          dia: this.dia,
          hora: this.hora,
          tel: this.tel,
          id: this.idUsuario
        });

        this.idUsuario = "";
        this.usuario = "";
        this.contrasena = "";
        this.conf_contrasena = "";
        this.ano_nacimiento = 0;
        this.sexo = "";
        this.tel = 0;

        alert.setTitle('Felicidades');
        alert.setMessage('Proyecto Patitas te da la bienvenida');
        alert.addButton({
          text: 'ok',
          handler: () => {
            this.navCtrl.push(LoginPage);
          }
        });
        alert.present();
      } else {
        alert.setTitle('Error');
        alert.setMessage('Algun dato ingresado esta mal');
        alert.addButton({ text: 'ok' });
        alert.present();
      }
  }
}