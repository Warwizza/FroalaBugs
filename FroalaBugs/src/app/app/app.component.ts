import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _router: Router
  ) { }


  navigateConsoleError(): void {
    this._router.navigate(['/console-error']);
  }

  navigateDynamicToolbarUpdate(): void {
    this._router.navigate(['/dynamic-toolbar-update']);
  }

  closeBugs(): void {
    this._router.navigate(['/']);
  }
}
