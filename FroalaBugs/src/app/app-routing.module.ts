import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicToolbarUpdateComponent } from './dynamic-toolbar-update/dynamic-toolbar-update.component';
import { ConsoleErrorComponent } from './console-error/console-error.component';
import { AddTextBeforeAfterInsertedCustomBlockComponent } from './add-text-before-inserted-custom-block/add-text-before-inserted-custom-block.component';
import { DragBlockComponent } from './drag-block/drag-block.component';

const routes: Routes = [
  { path: 'dynamic-toolbar-update', component: DynamicToolbarUpdateComponent },
  { path: 'console-error', component: ConsoleErrorComponent },
  { path: 'add-text-custom-block', component: AddTextBeforeAfterInsertedCustomBlockComponent },
  { path: 'drag-block', component: DragBlockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
