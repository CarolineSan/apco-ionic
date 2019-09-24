import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FeedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedProvider {

  private baseUrl:string = "https://api.themoviedb.org/3/";
  private apiKey:string = "19b965a83f810f5c4016eda9a718f827";

  constructor(public http: HttpClient) {
    console.log('Hello FeedProvider Provider');
  }

  getUltimasPublicacoes() {
    return this.http.get(this.baseUrl + "movie/popular?api_key=" + this.apiKey);
  }

}
