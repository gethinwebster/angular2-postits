export default class Postit {
    constructor() {
        this.title = '';
        this.body = '';
    }
    edit() {
        this.isEditing = true;
    }
    save() {
        this.isEditing = false;
    }
}
