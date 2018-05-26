import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

var config = {
  apiKey: "AIzaSyB7z1UhhsEUbuWaM8zAgmonCAytdw3hdyQ",
  authDomain: "patitas-iluscode.firebaseapp.com",
  databaseURL: "https://patitas-iluscode.firebaseio.com",
  projectId: "patitas-iluscode",
  storageBucket: "patitas-iluscode.appspot.com",
  messagingSenderId: "924114390014"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);

  }
}
