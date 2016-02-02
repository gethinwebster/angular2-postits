export default class Postit {
    constructor() {
        this.title = '';
        this.body = '';
        this.isNew = true;
        this.isEditing = true;
    }
    edit() {
        this.isEditing = true;
    }
    save() {
        this.isEditing = false;
        if (this.title || this.body) {
            this.isNew = false;
        }
    }
}
