import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/detail/detail.html',
})
export class DetailPage {
  selectedItem;
  
  constructor(public nav: NavController, params: NavParams) {
    console.log(params);
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = params.get('item');
  }
}
