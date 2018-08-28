import { TodoOptions } from './../todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  /**
   * @public
   * @type: FormGroup
   */
  public todoAddForm: FormGroup;

  /**
   * @public
   * @type: EventEmitter<TodoOptions>
   */
  @Output()
  public add: EventEmitter<TodoOptions> = new EventEmitter<TodoOptions>();

  /**
   * @constructor
   *
   * @param: {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnInit(): void {
    this.todoAddForm = this.fb.group({
      task: new FormControl(null, [Validators.required]),
      isCompleted: new FormControl(false, [])
    });
  }

  /**
   * @public
   * @return: void
   * @description: submit handler for a todo.
   */
  public onTodoSubmit(form: FormGroup, value: any): void {
    if (form.valid && !!value.task) {
      this.add.emit(value);
      this.todoAddForm.reset();
      this.todoAddForm.get('task').setErrors(null);
    }
  }
}
