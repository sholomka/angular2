import { Component } from '@angular/core';
import { TodoListComponent } from './todo/todo-list.component';
import { Todo } from './todo/todo';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent]
})
export class AppComponent {
    title: string;
    todos: Todo[];

    constructor() {
        this.title = 'New winner';
        this.todos = []
    }

    addToDo(input: HTMLInputElement) {
        let title = input.value;
        this.todos.push(new Todo(title));
        input.value = '';
    }
}
