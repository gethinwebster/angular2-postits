import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
    selector: 'add-postit'
})

@View({
    template: '+'
})

export class AddPostit {

    constructor() {
        console.info('AddPostit Component Mounted Successfully');
    }

}
