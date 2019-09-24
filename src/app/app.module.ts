import { PublicacaoPageModule } from './../pages/publicacao/publicacao.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from './../pages/login/login.module';
import { SideMenuPageModule } from './../pages/side-menu/side-menu.module';
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
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPageModule } from '../pages/menu/menu.module';
import { RankingPageModule } from '../pages/ranking/ranking.module';
import { FeedProvider } from '../providers/feed/feed';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back'
    }),
    HttpModule,
    HttpClientModule,
    IntroPageModule,
    FeedPageModule,
    MenuPageModule,
    PerfilPageModule,
    RankingPageModule,
    SobrePageModule,
    SugestoesPageModule,
    AjudaPageModule,
    SideMenuPageModule,
    LoginPageModule,
    PublicacaoPageModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedProvider
  ]
})
export class AppModule {}
