import { PublicacaoPage } from './../publicacao/publicacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    FeedProvider
  ]
})
export class FeedPage {

  public lista_publicacoes = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private feedProvider: FeedProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.carregarPublicacoes();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarPublicacoes();
  }

  carregarPublicacoes() {
    if(!this.isRefreshing) {
      this.abreCarregando();
    }
    this.feedProvider.getUltimasPublicacoes().subscribe(
      data=>{
        this.lista_publicacoes = data['results'];
        console.log(this.lista_publicacoes);
        this.fechaCarregando();
        if(this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error=>{
        console.log(error);
        this.fechaCarregando();
        if(this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    );
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando"
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  substr (size, value) {
    if (value && value.length > size) {
        return value.substr(0, size) + "...";
    }
    return value;
  };

  abrirPublicacao() {
    this.navCtrl.push(PublicacaoPage);
  }

}
