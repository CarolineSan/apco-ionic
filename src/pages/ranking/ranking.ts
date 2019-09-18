import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  profiles = [
    { nome: "Buzz Lightyear", pontos: 10950, posicao: 1 },
    { nome: "Buzz Lightyear", pontos: 9950, posicao: 2 },
    { nome: "Buzz Lightyear", pontos: 9900, posicao: 3 },
    { nome: "Buzz Lightyear", pontos: 8580, posicao: 4 },
    { nome: "Buzz Lightyear", pontos: 7005, posicao: 5 },
    { nome: "Buzz Lightyear", pontos: 6875, posicao: 6 },
    { nome: "Buzz Lightyear", pontos: 6770, posicao: 7 },
    { nome: "Buzz Lightyear", pontos: 6225, posicao: 8 },
    { nome: "Buzz Lightyear", pontos: 5010, posicao: 9 },
    { nome: "Buzz Lightyear", pontos: 4889, posicao: 10 },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
