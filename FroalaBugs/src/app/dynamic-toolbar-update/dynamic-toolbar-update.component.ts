import { Component, OnInit } from '@angular/core';

import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-dynamic-toolbar-update',
  templateUrl: './dynamic-toolbar-update.component.html',
  styleUrls: ['./dynamic-toolbar-update.component.css']
})
export class DynamicToolbarUpdateComponent implements OnInit {

  firstEditorOptions: FroalaOptions = {
    toolbarButtons: ['bold', 'italic', 'markdown']
  }

  editor = null;
  initControls = null;
  value = null;

  constructor() { }

  ngOnInit(): void {
    FroalaEditor.DefineIcon('alert', { SVG_KEY: 'help' });
    FroalaEditor.RegisterCommand('alert', {
      title: 'Hello',
      focus: false,
      undo: false,
      refreshAfterCallback: false,

      callback: function () {
        alert('Hello!');
      }
    });
  }

  public initialize(initControls) {
    this.editor = initControls;
    this.editor.initialize();
  }

  addToolbarButton() {
    console.log(' ');
    console.log('The toolbarButtons array before pushing the underline button:');
    console.log(this.firstEditorOptions.toolbarButtons);
    this.firstEditorOptions.toolbarButtons.push('underline');
    console.log(' ');
    console.log('The toolbarButtons array after pushing the underline button:');
    console.log(this.firstEditorOptions.toolbarButtons);

    this.reinitializeEditor();
  }

  reinitializeEditor(): void {
    if (this.editor) {
      this.editor.destroy();
      //Added a timeout to make sure the code does not run to fast.
      setTimeout(() => {
        this.editor.initialize();
      }, 1000);
    }
  }
}

export interface FroalaOptions {
  toolbarButtons: string[];
}
