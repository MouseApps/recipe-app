import { Component } from '@angular/core';

/**
 * main app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * recipe app
   */
  title = 'recipe-ui';
  /**
   * if cheeseburger is opened
   */
  public opened: boolean;
}
