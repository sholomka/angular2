import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoItem} from "./components/todo-item/todo-item.component";
import {TodoFormComponent} from "./components/todo-form/todo-form.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TodoListComponent, TodoItem, TodoFormComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
