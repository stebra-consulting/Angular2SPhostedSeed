import { Component } from 'angular2/core';
import { MyComponent } from './message.component';

@Component({
    selector: 'my-app',
    template: `<div>Hello Angular 2!</div> <br> <my-component></my-component>`,
    directives: [MyComponent]
})

export class AppComponent {
    constructor() {
    }
}

