//mocked API methods: loadPostits, savePostit, deletePostit

function mock() {
    let args = arguments;
    return new Promise(resolve => window.setTimeout(() => {
        resolve(...args);
    }, 1000))
}

function loadPostits() {
    return mock([])
}

function savePostit(postit) {
    return mock(postit);
}

function deletePostit(postit) {
    return mock(true);
}

/**
 * @class postit
 * @module  models
 */
export default class Postit {
    static loadPostits() {
        return loadPostits();
    }
    
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
        if (this.title || this.body) {
            this.isSaving = true;
            this.isNew = false;
            this.isEditing = false;
            return savePostit(this).then(() => {
                this.isSaving = false;
            });
        }
        return new Promise(resolve => resolve());
    }

    deleteNote() {
        if (!this.isNew) {
            this.isDeleted = true;
            this.isSaving = true;
            this.isEditing = false;
            return deletePostit(this).then(() => {
                this.isSaving = false;
            });
        }
        return new Promise(resolve => resolve());
    }
}
