import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicToolbarUpdateComponent } from './dynamic-toolbar-update/dynamic-toolbar-update.component';
import { AddTextBeforeAfterInsertedCustomBlockComponent } from './add-text-before-inserted-custom-block/add-text-before-inserted-custom-block.component';
import { DragBlockComponent } from './drag-block/drag-block.component';
import { EditorAddsNbspComponent } from './editor-adds-nbsp/editor-adds-nbsp.component';
import { PasteRemovesLineBreakComponent } from './paste-removes-line-break/paste-removes-line-break.component';
import { ListInCustomTagNotWorkingComponent } from './list-in-custom-tag-not-working/list-in-custom-tag-not-working.component';

const routes: Routes = [
  { path: 'dynamic-toolbar-update', component: DynamicToolbarUpdateComponent },
  { path: 'add-text-custom-block', component: AddTextBeforeAfterInsertedCustomBlockComponent },
  { path: 'drag-block', component: DragBlockComponent },
  { path: 'add-nbsp', component: EditorAddsNbspComponent },
  { path: 'paste-removes-line-break', component: PasteRemovesLineBreakComponent },
  { path: 'list-custom-tag', component: ListInCustomTagNotWorkingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
