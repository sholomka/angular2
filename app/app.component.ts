import { Component } from '@angular/core';

import { TodosComponent } from './components/todos/todos.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = 'New winner';
    }
}
