import {Page, Events} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
    constructor(public events: Events) {
        
        function createUser(user) {
            console.log('User created!');
            events.publish('user:created', user);
        }
        events.subscribe('user:created', (user) => {
          console.log('Welcome', user);
        });
        createUser({ name: 'Feidianbo' });
    }
}

// function createUser(user) {
//     console.log('User created!');
//     // events.publish('user:created', user);
// }
// events.subscribe('user:created', (user) => {
//   console.log('Welcome', user);
// });
// createUser({ name: 'Feidianbo' });