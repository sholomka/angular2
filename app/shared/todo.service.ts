import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {ITodo} from "./todo.model";

@Injectable()

export class TodoService {
    private todosUrl = 'app/todos';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getTodos(): Promise<ITodo[]> {
       return this.http
           .get(this.todosUrl)
           .toPromise()
           .then(res => res.json().data)
           .catch(this.handleError);
    }

    addTodo(todo: ITodo): Promise<ITodo> {
        let body = JSON.stringify(todo),
            options = new RequestOptions({headers: this.headers});

        return this.http
            .post(this.todosUrl, body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    saveTodo(todo: ITodo): Promise<ITodo> {
        let url = `${this.todosUrl}/${todo.id}`,
            body = JSON.stringify(todo),
            options = new RequestOptions({headers: this.headers});

        return this.http
            .put(url, body, options)
            .toPromise()
            .then(() => todo)
            .catch(this.handleError);
    }


    deleteTodo(todo: ITodo): Promise<ITodo> {
        let url = `${this.todosUrl}/${todo.id}`,
            options = new RequestOptions({headers: this.headers});

        return this.http
            .delete(url, options)
            .toPromise()
            .then(() => todo)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {

        console.log('Произошла ошибка', error);

        return Promise.reject(error.message || error);
    }
}