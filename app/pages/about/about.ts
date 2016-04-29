import {Page, NavController} from 'ionic-angular';
import {Toast} from 'ionic-angular';

/*
  Generated class for the AboutPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/about/about.html',
})
export class AboutPage {
    constructor(public nav: NavController) {
        this.nav = nav;
    }
    
   showToast () {
        let toast = Toast.create({
            message: 'User was added successfully',
            duration: 3000
        });
        
        this.nav.present(toast);
    }
}
