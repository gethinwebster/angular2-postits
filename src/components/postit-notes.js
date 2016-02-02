import {Component, View, NgFor} from 'angular2/angular2';

import {PostitNote} from './postit-note';

import Postit from '../models/postit';

@Component({
    selector: 'postit-notes'
})

@View({
    directives: [NgFor, PostitNote],
    templateUrl: 'components/postit-notes.html'
})

export class PostitNotes {

    constructor() {
        this.getNotes();
    }

    /**
     * Go and fetch the notes to display.
     * 
     * @method getNotes
     */
    getNotes() {
        this.isLoading = true;
        Postit.loadPostits().then(this.loadNotes.bind(this));
    }

    /**
     * Load a set of notes into the component
     * 
     * @method loadNotes
     * @param  {Postit[]} notes     The array of notes to load
     */
    loadNotes(notes) {
        this.isLoading = false;
        this.notes = notes;
        //add an empty note, as creation placeholder
        this.addEmptyNote();
    }

    /**
     * Add a new empty note for editing
     * 
     * @method addEmptyNote
     */
    addEmptyNote() {
        //add new note to beginning of array, and begin editing it
        const note = new Postit();
        this.notes.unshift(note);
        this.editNote(note);
    }

    /**
     * Begin editing a specific note.
     * 
     * @method editNote
     * @param  {Postit} noteToEdit  The note to begin editing
     */
    editNote(noteToEdit) {
        if (noteToEdit.isDeleted || noteToEdit.isSaving) {
            return;
        }
        //only one note editable at a time, so save other notes first
        for (let note of this.notes) {
            //don't auto-save first note, as it's not yet been 'created'
            if (note.isEditing && note != this.notes[0]) {
                note.save();
            }
        }
        noteToEdit.edit();
    }

    /**
     * Save a specific note.
     * 
     * @method saveNote
     * @param  {Postit} note    The note to save
     */
    saveNote(note) {
        note.save().then(() => {
            //do anything further as necessary
        });
        //if saved note is first in list, auto-add a new note
        if (!this.notes[0].isNew) {
            this.addEmptyNote();
        }
    }

    /**
     * Save a specific note.
     * 
     * @method saveNote
     * @param  {Postit} note    The note to save
     */
    deleteNote(note) {
        note.deleteNote().then(() => {
            //find index of deleted note
            for (let i = this.notes.length-1; i >= 0; i--) {
                if (this.notes[i] === note) {
                    //remove deleted note from array
                    this.notes.splice(i, 1);
                    break;
                }
            }
        });
    }

}
