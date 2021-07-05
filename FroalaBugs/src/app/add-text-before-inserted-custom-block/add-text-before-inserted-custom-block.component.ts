import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-add-text-before-inserted-custom-block',
  templateUrl: './add-text-before-inserted-custom-block.component.html',
  styleUrls: ['./add-text-before-inserted-custom-block.component.css']
})
export class AddTextBeforeAfterInsertedCustomBlockComponent implements OnInit {

  froalaOptions: Object = {
    toolbarButtons: ['insertContent'],
    codeMirror: false,
    enter: FroalaEditor.ENTER_DIV,
    quickInsertEnabled: false,
    attribution: false,
    pastePlain: true,
    htmlExecuteScripts: false,
    wordPasteModal: false,
    placeholderText: 'Edit here.',
    charCounterCount: false,
    imageEditButtons: ['imageRemove', 'imageDisplay', 'imageAlign', 'imageSize'],
    imageDefaultAlign: 'left',
    imageDefaultDisplay: 'inline',
    fontFamilyDefaultSelection: 'Roboto',
    fontSizeDefaultSelection: '14',
    wordPasteKeepFormatting: false,
    videoEditButtons: [],
    paragraphFormat: {
      N: 'normal',
      H1: 'heading 1',
      H2: 'heading 2'
    },
    htmlAllowedTags: ['h1', 'h2', 'strong', 'em', 'u', 'div', 'ul', 'ol', 'li', 'img', 'br', 'a', 'p', 'span', 'custom-tag'],
    htmlDoNotWrapTags: ['custom-tag']
  };

  editor = null;
  initControls = null;
  value = null;

  constructor() { }

  ngOnInit() {
    // Custom button
    FroalaEditor.DefineIcon('insertContent', { NAME: 'insertContent', SVG_KEY: 'help' });
    var self = this;
    FroalaEditor.RegisterCommand('insertContent', {
      title: 'Insert HTML',
      focus: true,
      undo: true,
      refreshAfterCallback: true,
      callback: function () {
        self.insertContent();
      }
    });
  }

  private insertContent() {
    this.editor.html.insert(`
      <span id=span-id1 class=block-border contenteditable="false">
        Block for users with an account
      </span>
      
      <custom-tag id=block-id1 name=block>
        <div></div>
      </custom-tag>
      
      <span id=span-id2 class=block-border contenteditable="false">
        Block for users with an account
      </span>`);
  }

  public initialize(initControls) {
    this.initControls = initControls;
    this.initControls.initialize();
    this.editor = this.initControls.getEditor();
  }
}
