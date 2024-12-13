import { Component } from '@angular/core';

import FroalaEditor from 'froala-editor';
import { FroalaOptions, ToolbarButtons } from 'froala-editor';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';

@Component({
  selector: 'app-toolbar-buttons-no-active-style-with-material-icons',
  templateUrl: './toolbar-buttons-no-active-style-with-material-icons.component.html',
  styleUrl: './toolbar-buttons-no-active-style-with-material-icons.component.css',
  standalone: true,
  imports: [FroalaEditorModule]
})
export class ToolbarButtonsNoActiveStyleWithMaterialIconsComponent {

  froalaOptions: Partial<FroalaOptions> = {};

  editor = null;
  initControls = null;
  value = null;

  constructor() { }

  ngOnInit(): void {
    this.setMaterialSymbolsIcons();

    let toolbarButtonsFroala: ToolbarButtons = {
      moreText: { buttons: ['bold', 'italic', 'underline'], buttonsVisible: 3 },
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

  setMaterialSymbolsIcons() {
    FroalaEditor.DefineIconTemplate('material_design', '<i class="material-symbols-outlined">[NAME]</i>');
    FroalaEditor.ICON_DEFAULT_TEMPLATE = 'material_design';
    FroalaEditor.DefineIcon('bold', { NAME: 'format_bold' });
    FroalaEditor.DefineIcon('italic', { NAME: 'format_italic' });
    FroalaEditor.DefineIcon('underline', { NAME: 'format_underlined' });
    FroalaEditor.DefineIcon('formatOL', { NAME: 'format_list_numbered' });
    FroalaEditor.DefineIcon('formatUL', { NAME: 'format_list_bulleted' });
  }
}
