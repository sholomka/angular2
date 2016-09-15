import  { Component, EventEmitter, Output } from '@angular/core';
import {TodoService} from "../../shared/todo.service";

import { Todo } from '../../shared/todo.model';

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todo-form/todo-form.component.css']
})

export class TodoFormComponent {
    constructor(private todoService: TodoService) {}

    add(input: HTMLInputElement): void {
        let title = input.value;
        input.value = '';

        if (title) {
            let todo = new Todo(title);
            this.todoService.addTodo(todo);
        }
    }
}