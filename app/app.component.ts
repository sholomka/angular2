import { Component } from '@angular/core';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoFormComponent } from './todo/todo-form.component';
import { Todo } from './todo/todo';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent, TodoFormComponent]
})
export class AppComponent {
    title: string;
    todos: Todo[];

    constructor() {
        this.title = 'New winner';
        this.todos = []
    }

    onTodoAdded(todo: Todo) {
        this.todos.push(todo);
    }
}
