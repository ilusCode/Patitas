import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { TabsPage } from '../tabs/tabs';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta';
import { OlvideContrasenaPage } from '../olvide-contrasena/olvide-contrasena';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuarios: string[];
  rfc: any;
  usuario: string;
  contrasena: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  olvideContrasena() {
    this.navCtrl.push(OlvideContrasenaPage);
  }
  creaCuenta() {
    this.navCtrl.push(CrearCuentaPage);
  }

  entrar() {
    this.usuario;
    this.contrasena;
    if (
      this.usuario != "" &&
      this.contrasena != ""
    ) {
      this.rfc = firebase.database().ref().child("usuarios");
      this.rfc.on("value", (snap) => {
        var data = snap.val();
        this.usuarios = [];
        console.log(this.usuario);
        console.log(this.contrasena);

        for (var key in data) {
          if (data[key].usuario == this.usuario && data[key].contrasena == this.contrasena) {
            this.usuarios.push(data[key]);
            console.log("entrar");
            console.log(data[key].id);
            this.navCtrl.setRoot(TabsPage, { idusu: data[key].id ,usu:data[key].usuario});
          }
        }
        this.usuario = "";
        this.contrasena = "";
      });
    } else {
      let alert = this.alertCtrl.create();
      alert.setTitle('Error');
      alert.addButton({ text: 'ok' });
      alert.present();
    }
  }
}
