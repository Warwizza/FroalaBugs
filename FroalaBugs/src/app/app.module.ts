import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DynamicToolbarUpdateComponent } from './dynamic-toolbar-update/dynamic-toolbar-update.component';
import { ConsoleErrorComponent } from './console-error/console-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicToolbarUpdateComponent,
    ConsoleErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
