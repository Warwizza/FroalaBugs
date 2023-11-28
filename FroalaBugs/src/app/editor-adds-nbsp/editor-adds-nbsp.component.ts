import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-editor-adds-nbsp',
  templateUrl: './editor-adds-nbsp.component.html',
  styleUrls: ['./editor-adds-nbsp.component.css']
})
export class EditorAddsNbspComponent implements OnInit {

  froalaOptions: Object = {
    toolbarButtons: ['insertContent'],
    htmlAllowedTags: ['span', 'custom-tag']
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
    this.editor.html.insert(this.addStartAndEndBlocksIntoHtml(`
        <custom-tag>
          <custom-tag>
            &lt;The content goes here&gt;
          </custom-tag>         
        </custom-tag>
    `));
  }

  public initialize(initControls) {
    this.initControls = initControls;
    this.initControls.initialize();
    this.editor = this.initControls.getEditor();
  }

  private addStartAndEndBlocksIntoHtml(mailTemplate: string): string {
    const doc: Document = this.createDomParser(mailTemplate);
    const customTagCollection = doc.getElementsByTagName("custom-tag");

    for (let i = 0; i < customTagCollection.length; i++) {
      const openCustomTagBorderSpanTag = document.createElement('span');
      openCustomTagBorderSpanTag.setAttribute('contenteditable', 'false');
      openCustomTagBorderSpanTag.textContent = 'open custom tag number ' + i;
      openCustomTagBorderSpanTag.classList.add('block-border');

      const closeCustomTagBorderSpanTag = document.createElement('span');
      closeCustomTagBorderSpanTag.setAttribute('contenteditable', 'false');
      closeCustomTagBorderSpanTag.textContent = 'close custom tag number ' + i;
      closeCustomTagBorderSpanTag.classList.add('block-border');

      customTagCollection[i].parentNode.insertBefore(openCustomTagBorderSpanTag, customTagCollection[i]);
      customTagCollection[i].parentNode.insertBefore(closeCustomTagBorderSpanTag, customTagCollection[i].nextSibling);
    }

    return doc.body.innerHTML;
  }

  private createDomParser(html: string): Document {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html");
  }
}
