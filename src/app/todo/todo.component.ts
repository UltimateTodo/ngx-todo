import { TodoOptions } from './todo';
import { Component, OnInit } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  /**
   * @public
   */
  public todosList: TodoOptions[] = [];

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   */
  public ngOnInit(): void { }

  /**
   * @public
   */
  public onAddTodo(e: TodoOptions): void {
    this.todosList.push(e);
  }
}
