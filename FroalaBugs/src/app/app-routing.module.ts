import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicToolbarUpdateComponent } from './dynamic-toolbar-update/dynamic-toolbar-update.component';
import { ConsoleErrorComponent } from './console-error/console-error.component';

const routes: Routes = [
  { path: 'dynamic-toolbar-update', component: DynamicToolbarUpdateComponent },
  { path: 'console-error', component: ConsoleErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
