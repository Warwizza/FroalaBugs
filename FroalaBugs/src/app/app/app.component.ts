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

  navigateAddTextCustomBlock(): void {
    this._router.navigate(['/add-text-custom-block'])
  }

  navigateDragBlock(): void {
    this._router.navigate(['/drag-block'])
  }

  navigateBoldTest(): void {
    this._router.navigate(['/bold-test'])
  }


  closeBugs(): void {
    this._router.navigate(['/']);
  }
}
