import {Component, View, Output, EventEmitter} from 'angular2/core';
import {NgIf} from 'angular2/common';

import Postit from '../../models/postit';

import {Autofocus} from '../../directives/Autofocus';

@Component({
    selector: 'postit-note',
    properties: ['model']/*,
    events: ['save', 'edit', 'delete']*/
})

@View({
    directives: [NgIf, Autofocus],
    templateUrl: 'components/postit-note/postit-note.html'
})

export class PostitNote {
    /**
     * @event save
     * @property {Postit} model     The Postit to save
     */
    @Output() save:
        EventEmitter<any> = new EventEmitter();
    /**
     * @event edit
     * @property {Postit} model     The Postit to edit
     */
    @Output() edit:
        EventEmitter<any> = new EventEmitter();
    /**
     * @event delete
     * @property {Postit} model     The Postit to delete
     */
    @Output() delete:
        EventEmitter<any> = new EventEmitter();

    model: Postit;

    /**
     * Trigger this component's `save` event
     * 
     * @method saveNote description]
     * @param  {event} event    The event that triggered the save action
     */
    saveNote(event): void {
        event.preventDefault();
        console.log('saving note...', this.model);
        this.save.next(this.model);
    }

    /**
     * Trigger this component's `edit` event
     * 
     * @method editNote
     * @param  {event} event    The event that triggered the edit action
     */
    editNote(event): void {
        if (!this.model.isEditing) {
            event.preventDefault();
            console.log('editing note...', this.model);
            this.edit.next(this.model);
        }
    }

    /**
     * Trigger this component's `delete` event
     * 
     * @method deleteNote
     * @param  {event} event    The event that triggered the delete action
     */
    deleteNote(event): void {
        event.preventDefault();
        console.log('deleting note...', this.model);
        this.delete.next(this.model);
    }
}
