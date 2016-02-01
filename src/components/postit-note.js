import {ComponentMetadata as Component, ViewMetadata as View, NgIf, formDirectives} from 'angular2/angular2';
// import {formDirectives} from 'angular2/forms';

@Component({
    selector: 'postit-note',
    properties: ['model']
})

@View({
    directives: [NgIf],
    templateUrl: 'components/postit-note.html'
})

export class PostitNote {
    constructor() {
        console.log(this.model);
    }
}
