import {Page, NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {AboutPage} from '../about/about';
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  aboutPage = AboutPage;

  constructor(public nav: NavController) {
    this.nav = nav;

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 21; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    console.log(item);
    this.nav.push(DetailPage, {
      item: item
    });
  }
}
