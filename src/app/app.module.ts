import { Tab3PageModule } from './../pages/tab3/tab3.module';
import { Tab2PageModule } from './../pages/tab2/tab2.module';
import { Tab1PageModule } from './../pages/tab1/tab1.module';
import { AjudaPageModule } from './../pages/ajuda/ajuda.module';
import { SugestoesPageModule } from './../pages/sugestoes/sugestoes.module';
import { SobrePageModule } from './../pages/sobre/sobre.module';
import { PerfilPageModule } from './../pages/perfil/perfil.module';
import { FeedPageModule } from './../pages/feed/feed.module';
import { IntroPageModule } from './../pages/intro/intro.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPageModule } from '../pages/menu/menu.module';
import { RankingPageModule } from '../pages/ranking/ranking.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    FeedPageModule,
    MenuPageModule,
    PerfilPageModule,
    RankingPageModule,
    SobrePageModule,
    SugestoesPageModule,
    AjudaPageModule,
    Tab1PageModule,
    Tab2PageModule,
    Tab3PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
