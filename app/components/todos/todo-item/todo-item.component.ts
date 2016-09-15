import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../shared/todo.model';

@Component({
    selector: 'todo-item',
    templateUrl: './app/components/todos/todo-item/todo-item.component.html',
    styleUrls: ['./app/components/todos/todo-item/todo-item.component.css']
})

export class TodoItem {
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter();
    @Output() toggled = new EventEmitter();

    constructor() {
        this.deleted = new EventEmitter<Todo>();
        this.toggled = new EventEmitter<Todo>();
    }

    toggle() {
        this.todo.done = !this.todo.done;
        this.toggled.emit(this.todo);
    }

    delete() {
        this.deleted.emit(this.todo);
    }
}