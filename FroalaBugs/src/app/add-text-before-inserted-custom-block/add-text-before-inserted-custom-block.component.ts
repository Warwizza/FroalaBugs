import { Component, OnInit } from '@angular/core';

import FroalaEditor from 'froala-editor';
import { FroalaOptions } from 'froala-editor';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';

@Component({
    selector: 'app-add-text-before-inserted-custom-block',
    templateUrl: './add-text-before-inserted-custom-block.component.html',
    styleUrls: ['./add-text-before-inserted-custom-block.component.css'],
    standalone: true,
    imports: [FroalaEditorModule]
})
export class AddTextBeforeAfterInsertedCustomBlockComponent implements OnInit {

  froalaOptions: Partial<FroalaOptions> = {
    immediateAngularModelUpdate: true,
    codeMirror: false,
    enter: FroalaEditor.ENTER_BR,
    quickInsertEnabled: false,
    attribution: false,
    htmlExecuteScripts: false,
    theme: 'gray',
    wordPasteModal: false,
    placeholderText: 'Type here',
    charCounterCount: false,
    toolbarButtons: ['insertContent'],
    key: 'demo-key',
    fontFamilyDefaultSelection: 'Roboto',
    fontSizeDefaultSelection: '14',
    wordPasteKeepFormatting: false,
    htmlAllowedTags: ['br', 'header', 'footer'],
    imagePaste: false,
    useClasses: false,
    linkAlwaysBlank: true,
    listAdvancedTypes: false,
    videoEditButtons: [],
    htmlAllowedAttrs: ['href', 'src', 'data', 'data-.*', 'contenteditable', 'style', 'height', 'width', 'draggable', 'class', 'frameborder', 'allowfullscreen', 'target', 'id', 'name'],
    htmlAllowedStyleProps: ['height', 'width', 'display', 'margin', 'text-align', 'vertical-align', 'float'],
    pasteAllowedStyleProps: ['height', 'width', 'display', 'text-align'],
    wordAllowedStyleProps: ['height', 'width', 'display', 'text-align'],
    zIndex: 1000,
    toolbarSticky: false
  };

  editor = null;
  initControls = null;
  value = null;

  constructor() { }

  ngOnInit() {
    FroalaEditor.ICON_DEFAULT_TEMPLATE = 'svg';
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
      <header class=block-border contenteditable="false">
        Block for users with an account
      </header>
      <br />
      <footer class=block-border contenteditable="false">
        Block for users with an account
      </footer>
    `);
  }

  public initialize(initControls) {
    this.initControls = initControls;
    this.initControls.initialize();
    this.editor = this.initControls.getEditor();
  }
}
