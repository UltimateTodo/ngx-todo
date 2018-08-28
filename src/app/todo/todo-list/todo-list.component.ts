import { TodoOptions } from './../todo';
import { Component, OnInit, Input } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  /**
   * @public
   * @type: TodoOptions[]
   */
  @Input()
  public list: TodoOptions[];

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
}
