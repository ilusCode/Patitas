import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { ForoPage } from '../foro/foro';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})


export class ChatPage {

  usu: any;
  idusu: any;
  @ViewChild("content") content: any;
  user: string="";
  message:string="";
  messages=[];
  
  emisor: any;
  receptor: any;

  paramsForo = {
    usuarioPub: this.emisor,
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.usu = navParams.data;
    console.log(this.usu);
    this.emisor = this.usu;
  }
  buscar(){
    this.receptor = this.receptor;
    this.getMessages();
  }

  getMessages(){
    var mensajesRef=firebase.database().ref().child("mensajes");
    mensajesRef.on("value",(snap) => {
      var data=snap.val();
      this.messages = [];
      for(var key in data){
        if( (data[key].emisor == this.emisor || data[key].emisor == this.receptor) && (data[key].receptor == this.receptor || data[key].receptor == this.emisor)){
        this.messages.push(data[key]);
           }
      }
       //this.scrollToBotton();
    });
  }
 borrarChat(emisor:string,receptor:string){
  var mensajesRef=firebase.database().ref().child("mensajes");
  mensajesRef.on("value",(snap) => {
    var data=snap.val();
    this.messages = [];
    for(var key in data){
      if (data[key].emisor==emisor||data[key].receptor==receptor) {
        this.messages.push(data[key]);
        console.log(data[key]); 
      }
    }
     //this.scrollToBotton();
  });
 }
   scrollToBotton(){
      var contentend=document.getElementById("Contentend").offsetTop;
      this.content.scrollTo(0,contentend,200);
   }
  sendMessages(){
    var mensajesRef=firebase.database().ref().child("mensajes");
    mensajesRef.push({mensaje: this.message,emisor: this.emisor,receptor:this.receptor});
    this.message="";
  }

  salir(){
    this.navCtrl.push(LoginPage);
  }

  // fpage(){
  //   this.paramsForo.usuarioPub = this.emisor;
  //   this.navCtrl.push(ForoPage, this.paramsForo);
  //   console.log("enviar a for");
  // }

}

