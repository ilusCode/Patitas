import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil';
import { ForoPage } from '../foro/foro';
import { ChatPage } from '../chat/chat';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public usu: any;
  public idusu: any;
  tab1Root = PerfilPage;
  tab2Root = ForoPage;
  tab3Root = ChatPage;

  constructor(private navParams: NavParams) {
    this.idusu = navParams.get("idusu");
    console.log(this.idusu);
    this.usu = navParams.get("usu");
    console.log(this.usu);
  }
}
