import { Component, OnInit } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * @constructor
   */
  constructor() { }

  /**
   *  @public
   *  @type: method<life cycle hook>
   *  @return: void
   *  @description: N/A
   */
  public ngOnInit(): void { }
}
