import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private feedProvider: FeedProvider) {
  }

  ionViewDidLoad() {
    this.feedProvider.getUltimasPublicacoes().subscribe(
      data=>{
        this.lista_publicacoes = data['results'];
        console.log(this.lista_publicacoes);
      }, error=>{
        console.log(error);
      }
    );
  }

}
