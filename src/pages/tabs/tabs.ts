import { MenuPage } from './../menu/menu';
import { FeedPage } from './../feed/feed';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = MenuPage;

  constructor() {

  }
}
