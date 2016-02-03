// mocked API methods: loadPostits, savePostit, deletePostit

function mock(obj: any): Promise<any> {
    console.log('mocking...');
    return new Promise(resolve => window.setTimeout(() => {
        console.log('mocking:return', obj);
        resolve(obj);
    }, 1000));
}

function loadPostits(): Promise<Array<Postit>> {
    return mock([]);
}

function savePostit(postit: Postit): Promise<Postit> {
    return mock(postit);
}

function deletePostit(postit: Postit): Promise<Postit> {
    return mock(postit);
}

/**
 * @class postit
 * @module  models
 */
export default class Postit {

    title: string = '';
    body: string = '';
    isNew: boolean = true;
    isEditing: boolean = true;
    isSaving: boolean = false;
    isDeleted: boolean = false;

    static loadPostits(): Promise<Array<Postit>> {
        return loadPostits();
    }

    edit(): void {
        this.isEditing = true;
    }

    save(): Promise<Postit> {
        if (this.title || this.body) {
            this.isSaving = true;
            this.isNew = false;
            this.isEditing = false;
            return savePostit(this).then(() => {
                this.isSaving = false;
                return this;
            });
        }
        return new Promise(resolve => resolve(this));
    }

    deleteNote(): Promise<Postit> {
        if (!this.isNew) {
            this.isDeleted = true;
            this.isSaving = true;
            this.isEditing = false;
            return deletePostit(this).then(() => {
                this.isSaving = false;
                return this;
            });
        }
        return new Promise(resolve => resolve(this));
    }
}
