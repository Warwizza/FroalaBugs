import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DynamicToolbarUpdateComponent } from './dynamic-toolbar-update/dynamic-toolbar-update.component';
import { AddTextBeforeAfterInsertedCustomBlockComponent } from './add-text-before-inserted-custom-block/add-text-before-inserted-custom-block.component';
import { DragBlockComponent } from './drag-block/drag-block.component';
import { PasteCleanupComponent } from './paste-cleanup/paste-cleanup.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditorAddsNbspComponent } from './editor-adds-nbsp/editor-adds-nbsp.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicToolbarUpdateComponent,
    AddTextBeforeAfterInsertedCustomBlockComponent,
    DragBlockComponent,
    PasteCleanupComponent,
    EditorAddsNbspComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
