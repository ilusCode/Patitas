import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public idusu: any;
  usuarios: any[];
  rfc: any;
 usuario: string;
  correo: string;
  contrasena: string;
  ano_nacimiento: any;
  sexo: string;
  tel: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController) {
    this.idusu = navParams.data;
    console.log(this.idusu);

    this.getPerfil(this.idusu);
  }

editar(){
  let alert = this.alertCtrl.create();
    alert.setTitle('Selecciona un Foro');
    alert.addInput({ type: 'text', value:this.correo});
    alert.addInput({ type: 'text', value:this.ano_nacimiento });
    alert.addInput({ type: 'password', value:this.contrasena });
    alert.addInput({ type: 'text', value:this.tel }),
      alert.addButton({
        text: 'Guardar',
        handler: foroElegido => {   
          console.log(this.correo);
          console.log(this.ano_nacimiento);
          console.log(this.contrasena);
          console.log(this.tel);
          console.log(this.idusu);
          this.rfc = firebase.database().ref().child("usuarios");
          this.rfc.on("value", (snap) => {
            var data = snap.val();
            this.usuarios = [];
            console.log(this.usuario);
            console.log(this.contrasena);
      
            for (var key in data) {
              if (data[key].usuario == this.usuario) {
                console.log(data[key]);
                
                /*this.rfc.set({
                  correo:this.correo,
                  ano_nacimiento:this.ano_nacimiento,
                  contrasena:this.contrasena,
                  tel:this.tel
                })*/
              }
            }
          });
        }
      });
    alert.present();
  }

  
  getPerfil(id: string) {
    this.rfc = firebase.database().ref().child("usuarios");
    this.rfc.on("value", (snap) => {
      var data = snap.val();
      this.usuarios = [];
      console.log(this.usuario);
      console.log(this.contrasena);

      for (var key in data) {
        if (data[key].id == id) {
          this.usuario = data[key].usuario;
          this.sexo = data[key].sexo;
          this.ano_nacimiento = data[key].ano_nacimiento;
          this.tel = data[key].telefono;
          this.correo = data[key].correo;
          this.contrasena = data[key].contrasena;
          this.usuarios.push(data[key]);
          console.log(data[key]);
        }
      }
    });
  }

  salir() {
//    this.navCtrl.push(LoginPage);
console.log("Cerrar Sesion");

  }

}
