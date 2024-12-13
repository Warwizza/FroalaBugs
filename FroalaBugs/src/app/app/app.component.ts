import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {

  constructor(
    private _router: Router
  ) { }

  navigateAddTextCustomBlock(): void {
    this._router.navigate(['/add-text-custom-block']);
  }

  navigatePasteRemovesLineBreaks() {
    this._router.navigate(['/paste-removes-line-break']);
  }

  navigateToolbarNoActiveStyle() {
    this._router.navigate(['/toolbar-active-style'])
  }

  closeBugs(): void {
    this._router.navigate(['/']);
  }
}
