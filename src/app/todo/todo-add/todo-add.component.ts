import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';

/**
 * @component
 */
@Component({
  selector: 'todo-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  public todoAddForm: FormGroup;

  /**
   * @constructor
   */
  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.todoAddForm = this.fb.group({
      task: new FormControl(null, []),
      isCompleted: new FormControl(false, [])
    });
  }

  public onTodoSubmit(form: FormGroup, value: AbstractControl): void {
    console.log(value);
  }
}
