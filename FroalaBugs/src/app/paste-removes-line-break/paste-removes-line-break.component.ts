import { Component, OnInit } from '@angular/core';

import FroalaEditor from 'froala-editor';
import { FroalaOptions, ToolbarButtons } from 'froala-editor';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins/lists.min.js';

@Component({
  selector: 'app-paste-removes-line-break',
  templateUrl: './paste-removes-line-break.component.html',
  styleUrls: ['./paste-removes-line-break.component.css'],
  standalone: true,
  imports: [FroalaEditorModule]
})
export class PasteRemovesLineBreakComponent implements OnInit {

  froalaOptions: Partial<FroalaOptions> = {};

  editor = null;
  initControls = null;
  value = null;

  constructor() { }

  ngOnInit(): void {
    FroalaEditor.DefineIconTemplate('material_design', '<i class="material-symbols-outlined">[NAME]</i>');
    FroalaEditor.ICON_DEFAULT_TEMPLATE = 'material_design';
    FroalaEditor.DefineIcon('formatOL', { NAME: 'format_list_numbered' });
    FroalaEditor.DefineIcon('formatUL', { NAME: 'format_list_bulleted' });

    let toolbarButtonsFroala: ToolbarButtons = {
      moreText: { buttons: [], buttonsVisible: 0 },
      moreParagraph: { buttons: ['formatUL', 'formatOL'], buttonsVisible: 2 },
      moreRich: { buttons: [], buttonsVisible: 0 },
      moreMisc: { align: '', buttons: [], buttonsVisible: 0 },
      trackChanges: { buttons: [], buttonsVisible: 0 }
    };

    this.froalaOptions = {
      enter: FroalaEditor.ENTER_BR,
      toolbarButtons: toolbarButtonsFroala
    }
  }

  public initialize(initControls) {
    this.initControls = initControls;
    this.initControls.initialize();
    this.editor = this.initControls.getEditor();
  }
}
