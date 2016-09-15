import { Component, OnInit } from '@angular/core';

import { ITodo } from '../../shared/todo.model';
import {TodoService} from "../../shared/todo.service";

@Component({
    selector: 'todos',
    templateUrl: './app/components/todos/todos.component.html',
    styleUrls: ['./app/components/todos/todos.component.css']
})

export class TodosComponent implements OnInit {
    todos: ITodo[];

    constructor(private todoService: TodoService) {
        this.todos = [];
    }

    ngOnInit() {
        this.todoService.getTodos().then(todo => this.todos = todo);
    }

    onTodoCreated(todo: ITodo): void {
        this.todoService.addTodo(todo).then(todo => {this.todos.push(todo)});
    }

    onTodoDeleted(todo: ITodo): void {
        this.todoService.deleteTodo(todo).then(todo => {
            let index = this.todos.indexOf(todo);

            if (index > -1) {
                this.todos.splice(index, 1);
            }
        });
    }

    onTodoToggled(todo: ITodo): void {
        this.todoService.saveTodo(todo).then(todo => {});
    }
}