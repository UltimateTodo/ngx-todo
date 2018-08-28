import { TodoOptions } from './../todo';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  /**
   * @public
   */
  @Input()
  public item: TodoOptions;

  /**
   * @constructor
   */
  constructor(private cdRef: ChangeDetectorRef) { }

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnInit(): void { }
}
