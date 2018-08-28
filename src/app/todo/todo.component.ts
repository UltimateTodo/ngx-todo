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
   * @type: TodoOptions[]
   */
  public todosList: TodoOptions[] = [];

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnInit(): void { }

  /**
   * @public
   * @return: void
   * @description: a helper method that adds
   * a new todo to the todos list.
   */
  public onAddTodo(e: TodoOptions): void {
    this.todosList.push(e);
  }
}
