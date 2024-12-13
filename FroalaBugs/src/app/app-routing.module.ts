import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTextBeforeAfterInsertedCustomBlockComponent } from './add-text-before-inserted-custom-block/add-text-before-inserted-custom-block.component';
import { PasteRemovesLineBreakComponent } from './paste-removes-line-break/paste-removes-line-break.component';
import { ToolbarButtonsNoActiveStyleWithMaterialIconsComponent } from './toolbar-buttons-no-active-style-with-material-icons/toolbar-buttons-no-active-style-with-material-icons.component';

const routes: Routes = [
  { path: 'add-text-custom-block', component: AddTextBeforeAfterInsertedCustomBlockComponent },
  { path: 'paste-removes-line-break', component: PasteRemovesLineBreakComponent },
  { path: 'toolbar-active-style', component: ToolbarButtonsNoActiveStyleWithMaterialIconsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
