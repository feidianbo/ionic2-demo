import {Page, MenuController} from 'ionic-angular';
import {AboutPage} from '../about/about';

@Page({
    templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
    aboutPage = AboutPage;
        
    items = [{
        title: '标题一'
    }, {
            title: '标题一'
        }, {
            title: '标题一'
        }, {
            title: '标题一'
        }, {
            title: '标题一'
        }, {
            title: '标题一'
        }, {
            title: '标题一'
        }, {
            title: '标题一'
        }];

    constructor(public menu: MenuController) {
        this.menu = menu;
        console.log(menu);
    }

    itemSelected(item) {
        console.log(item);
    }
    openMenu() {
        console.log(this.menu);
        // this.menu.open();
    }
}