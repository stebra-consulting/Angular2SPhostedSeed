import { Component } from 'angular2/core';

@Component({
    selector: "my-component",
    template: ` <h3>{{ title }}</h3> `
})

export class MyComponent {
    title: string = "this is a string variable from my-component";
}