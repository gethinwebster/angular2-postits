/* tslint:disable:no-unused-variable typedef */
import { Component } from 'angular2/core';
import {
    afterEach,
    beforeEach,
    describe,
    fdescribe,
    xdescribe,
    expect,
    it,
    fit,
    xit,
    beforeEachProviders,
    injectAsync,
    TestComponentBuilder
} from 'angular2/testing';

import { PostitNotes } from './postit-notes';

describe('PostitNote', () => {
    it('should initially display loading message', injectAsync([TestComponentBuilder], tcb => {
        return new Promise(resolve => {
            tcb.createAsync(PostitNotes)
                .then(fixture => {
                    fixture.detectChanges();
                    let compiled = fixture.nativeElement;
                    expect(compiled.querySelector('div.loading')).toHaveText('Loading...');
                    resolve();
                });
        });
    }));
    it('should display the `new postit` form after loading', injectAsync([TestComponentBuilder], tcb => {
        return new Promise(resolve => {
            tcb.createAsync(PostitNotes)
                .then(fixture => {
                    fixture.detectChanges();
                    return fixture.componentInstance.loading.then(() => {
                        fixture.detectChanges();
                        let compiled = fixture.nativeElement;
                        let postit = compiled.querySelector('postit-note');
                        console.log(compiled, postit);
                        expect(postit).toBeDefined();
                        expect(postit.querySelector('input')).toBeDefined();
                        expect(postit.querySelector('textarea')).toBeDefined();
                        resolve();
                    });
                });
        });
    }));
});
