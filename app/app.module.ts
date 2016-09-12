import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TodoListComponent} from "./todo/todo-list.component";
import {TodoItem} from "./todo/todo-item.component";
import {TodoFormComponent} from "./todo/todo-form.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TodoListComponent, TodoItem, TodoFormComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
