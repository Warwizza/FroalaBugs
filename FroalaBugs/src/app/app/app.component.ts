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

  navigatePasteCleanUp(): void {
    this._router.navigate(['/paste-cleanup']);
  }

  navigateEditorAddsNbsp() {
    this._router.navigate(['/add-nbsp']);
  }

  closeBugs(): void {
    this._router.navigate(['/']);
  }
}
