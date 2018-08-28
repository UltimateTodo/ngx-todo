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
   */
  public todoAddForm: FormGroup;

  /**
   * @public
   */
  @Output()
  public add: EventEmitter<TodoOptions> = new EventEmitter<TodoOptions>();

  /**
   * @constructor
   */
  constructor(private fb: FormBuilder) { }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.todoAddForm = this.fb.group({
      task: new FormControl(null, [Validators.required]),
      isCompleted: new FormControl(false, [])
    });
  }

  /**
   * @public
   */
  public onTodoSubmit(form: FormGroup, value: any): void {
    if (form.valid && !!value.task) {
      this.add.emit(value);
      this.todoAddForm.reset();
      this.todoAddForm.get('task').setErrors(null);
    }
  }
}
