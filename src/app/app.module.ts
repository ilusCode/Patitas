import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPage } from '../pages/perfil/perfil';
import { ForoPage } from '../pages/foro/foro';
import { RespuestasPage } from '../pages/respuestas/respuestas';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';
import { OlvideContrasenaPage } from '../pages/olvide-contrasena/olvide-contrasena';

@NgModule({
  declarations: [
    MyApp,
    PerfilPage,
    ForoPage,
    RespuestasPage,
    ChatPage,
    LoginPage,
    OlvideContrasenaPage,
    CrearCuentaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerfilPage,
    ForoPage,
    RespuestasPage,
    ChatPage,
    CrearCuentaPage,
    LoginPage,
    OlvideContrasenaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
