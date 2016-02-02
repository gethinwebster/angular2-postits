import {ComponentMetadata as Component, ViewMetadata as View, NgFor} from 'angular2/angular2';

import {AddPostit} from './add-postit';

import {PostitNote} from './postit-note';

import Postit from '../models/postit';

@Component({
    selector: 'postit-notes'
})

@View({
    directives: [AddPostit, NgFor, PostitNote],
    templateUrl: 'components/postit-notes.html'
})

export class PostitNotes {

    constructor() {
        console.info('PostitNotes Component Mounted Successfully');
        this.notes = [];
    }

    add() {
        const note = new Postit();
        this.notes.unshift(note);
        this.editNote(note);
    }

    editNote(note) {
        //only one note editable at a time, so save other notes first
        for (let eachNote of this.notes) {
            eachNote.save();
        }
        note.edit();
    }

    saveNote(note) {
        note.save();
        //if saved note is first in list, auto-add a new note
        if (note === this.notes[0]) {
            this.add();
        }
    }

}
