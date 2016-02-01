import {Component, View, bootstrap} from 'angular2/angular2';
import {PostitNotes} from 'components/postit-notes';

@Component({
  selector: 'main'
})

@View({
  directives: [PostitNotes],
  template: `
    <postit-notes></postit-notes>
  `
})

class Main {

}

bootstrap(Main);
