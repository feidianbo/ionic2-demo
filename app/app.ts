import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

@App({
    template: /*'./app.html',//*/'<ion-nav [root]="rootPage"></ion-nav>',
    config: { // http://ionicframework.com/docs/v2/api/config/Config/
        backButtonText: '后退',
        // iconMode: 'ios',
        // modalEnter: 'modal-slide-in',
        // modalLeave: 'modal-slide-out',
        // tabbarPlacement: 'bottom',
        // pageTransition: 'ios',
    }
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        console.log(page);
    }
}