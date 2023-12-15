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

  navigateDynamicToolbarUpdate(): void {
    this._router.navigate(['/dynamic-toolbar-update']);
  }

  navigateAddTextCustomBlock(): void {
    this._router.navigate(['/add-text-custom-block']);
  }

  navigateDragBlock(): void {
    this._router.navigate(['/drag-block']);
  }

  navigateEditorAddsNbsp() {
    this._router.navigate(['/add-nbsp']);
  }

  navigatePasteRemovesLineBreaks() {
    this._router.navigate(['/paste-removes-line-break']);
  }

  navigateListInCustomTag() {
    this._router.navigate(['/list-custom-tag']);
  }

  closeBugs(): void {
    this._router.navigate(['/']);
  }
}
