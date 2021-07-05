import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-drag-block',
  templateUrl: './drag-block.component.html',
  styleUrls: ['./drag-block.component.css']
})
export class DragBlockComponent implements OnInit {

  froalaOptions: Object = {
    toolbarButtons: ['insertContent'],
    immediateAngularModelUpdate: true,
    codeMirror: false,
    enter: FroalaEditor.ENTER_DIV,
    quickInsertEnabled: false,
    pastePlain: true,
    htmlExecuteScripts: false,
    wordPasteModal: false,
    charCounterCount: false,
    lineBreakerTags: ['null'],
    imageEditButtons: ['imageAlign', 'imageRemove', 'imageDisplay', 'imageSize'],
    imageDefaultAlign: 'left',
    imageDefaultDisplay: 'inline',
    fontFamilyDefaultSelection: 'Roboto',
    fontSizeDefaultSelection: '14',
    wordPasteKeepFormatting: false,
    htmlAllowedTags: ['h1', 'h2', 'strong', 'em', 'u', 'div', 'ul', 'ol', 'li', 'img', 'br', 'a', 'p', 'span', 'custom-tag'],
    imagePaste: false,
    useClasses: false,
    linkAlwaysBlank: true,
    listAdvancedTypes: false,
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <span id=span-id1 class=block-border contenteditable="false">
        Block for users with an account
      </span>

      <custom-tag id=block-id1 name=block>
        <div></div>
      </custom-tag>

      <span id=span-id2 class=block-border contenteditable="false">
        Block for users with an account
      </span>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    `);
  }

  public initialize(initControls) {
    this.initControls = initControls;
    this.initControls.initialize();
    this.editor = this.initControls.getEditor();
  }
}
