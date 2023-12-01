import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-paste-removes-line-break',
  templateUrl: './paste-removes-line-break.component.html',
  styleUrls: ['./paste-removes-line-break.component.css']
})
export class PasteRemovesLineBreakComponent implements OnInit {

  froalaOptions: Object;

  editor = null;
  initControls = null;
  value = null;

  constructor() { }

  ngOnInit(): void {
    this.froalaOptions = {
      enter: FroalaEditor.ENTER_BR,
      toolbarButtons: ['formatOL', 'formatUL']
    }
  }

  public initialize(initControls) {
    this.initControls = initControls;
    this.initControls.initialize();
    this.editor = this.initControls.getEditor();
  }
}
