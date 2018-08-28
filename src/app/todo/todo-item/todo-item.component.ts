import { TodoOptions } from './../todo';
import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

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
   * @type: number
   */
  @Input()
  public id: number;

  /**
   * @public
   * @type: TodoOptions
   */
  @Input()
  public item: TodoOptions;

  /**
   * @public
   * @type: EventEmitter<number>
   */
  @Output()
  public remove: EventEmitter<number> = new EventEmitter<number>();

  /**
   * @constructor
   *
   * @param: {cdRef<ChangeDetectorRef>}
   */
  constructor(private cdRef: ChangeDetectorRef) { }

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
   * @description: emits remove event
   * to the parent element.
   */
  public onRemove(e: any): void {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.remove.emit(this.id);
  }
}
