import {Component, View, NgIf, formDirectives, Input, Output, EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'postit-note',
    properties: ['model'],
    events: ['save', 'edit']
})

@View({
    directives: [NgIf],
    templateUrl: 'components/postit-note.html'
})

export class PostitNote {
    @Output() save:
        EventEmitter<any> = new EventEmitter();
    @Output() edit:
        EventEmitter<any> = new EventEmitter();

    saveNote(event) {
        event.preventDefault();
        console.log('saving note...', this.model);
        this.save.next(this.model);
    }

    editNote(event) {
        event.preventDefault();
        if (!this.isEditing) {
            console.log('editing note...', this.model);
            this.edit.next(this.model);
        }
    }
}
