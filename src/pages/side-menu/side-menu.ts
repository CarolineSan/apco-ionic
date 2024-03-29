import { AjudaPage } from './../ajuda/ajuda';
import { SobrePage } from './../sobre/sobre';
import { SugestoesPage } from './../sugestoes/sugestoes';
import { PerfilPage } from './../perfil/perfil';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RankingPage } from '../ranking/ranking';

/**
 * Generated class for the SideMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {

  rootPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
  }

  openPerfilPage() {
    this.navCtrl.push(PerfilPage);
  }

  openRankingPage() {
    this.navCtrl.push(RankingPage);
  }

  openSugestoesPage() {
    this.navCtrl.push(SugestoesPage);
  }

  openSobrePage() {
    this.navCtrl.push(SobrePage);
  }

  openAjudaPage() {
    this.navCtrl.push(AjudaPage);
  }

}
