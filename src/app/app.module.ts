// Modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { HeaderModule } from './shared/components/header/header.module';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { MaterialModule } from './shared/modules/material/material.module';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  declarations: [
    AppComponent
    , TodoComponent
    , TodoAddComponent
    , TodoItemComponent
    , TodoListComponent
  ],
  imports: [
    BrowserModule
    , HeaderModule
    , MaterialModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
