import {Directive, ElementRef} from 'angular2/angular2';

@Directive({
    selector: '[autofocus]'
})
export class Autofocus {
    constructor(el : ElementRef) {
        el.nativeElement.focus();
    }    
}
