import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './shared/todo.data';

import { AppComponent }  from './app.component';

import {TodosComponent} from "./components/todos/todos.component";
import {TodoListComponent} from "./components/todos/todo-list/todo-list.component";
import {TodoItem} from "./components/todos/todo-item/todo-item.component";
import {TodoFormComponent} from "./components/todos/todo-form/todo-form.component";

import {TodoService} from "./shared/todo.service";

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ AppComponent, TodosComponent, TodoListComponent, TodoFormComponent, TodoItem],
  bootstrap: [ AppComponent ],
  providers: [TodoService]
})
export class AppModule { }
