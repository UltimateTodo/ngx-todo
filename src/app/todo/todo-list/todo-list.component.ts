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
   */
  @Input()
  public list: TodoOptions[];

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   */
  public ngOnInit(): void { }
}
