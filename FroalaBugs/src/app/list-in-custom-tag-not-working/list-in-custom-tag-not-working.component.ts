import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-list-in-custom-tag-not-working',
  templateUrl: './list-in-custom-tag-not-working.component.html',
  styleUrls: ['./list-in-custom-tag-not-working.component.css']
})
export class ListInCustomTagNotWorkingComponent implements OnInit {

  froalaOptions: Object;

  editor = null;
  initControls = null;
  value = null;

  constructor() { }

  ngOnInit(): void {
    this.froalaOptions = {
      enter: FroalaEditor.ENTER_BR,
      toolbarButtons: ['insertContent1', 'insertContent2', 'insertContent3', '|', 'formatOL', 'formatUL'],
      htmlAllowedTags: ['ul', 'ol', 'li', 'br', 'span', 'custom-tag']
    }

    // Custom button 1
    FroalaEditor.DefineIcon('insertContent1', { NAME: 'insertContent', SVG_KEY: 'help' });
    var self = this;
    FroalaEditor.RegisterCommand('insertContent1', {
      title: 'Insert HTML',
      focus: true,
      undo: true,
      refreshAfterCallback: true,
      callback: function () {
        self.insertContent1();
      }
    });

    // Custom button 2
    FroalaEditor.DefineIcon('insertContent2', { NAME: 'insertContent', SVG_KEY: 'star' });
    var self = this;
    FroalaEditor.RegisterCommand('insertContent2', {
      title: 'Insert HTML',
      focus: false,
      undo: true,
      refreshAfterCallback: true,
      callback: function () {
        self.insertContent2();
      }
    });
  }

  public initialize(initControls) {
    this.initControls = initControls;
    this.initControls.initialize();
    this.editor = this.initControls.getEditor();
  }

  private insertContent1() {
    this.editor.html.insert(this.addStartAndEndBlocksIntoHtml(`
      <custom-tag>
          Hello Froala!
      </custom-tag>
    `));
  }

  private insertContent2() {
    this.editor.html.insert(this.addStartAndEndBlocksIntoHtml(`
      Bullet point will appear before this text
      <custom-tag>
          Hello Froala!
      </custom-tag>
    `));
  }

  private addStartAndEndBlocksIntoHtml(mailTemplate: string): string {
    const doc: Document = this.createDomParser(mailTemplate);
    const customTagCollection = doc.getElementsByTagName("custom-tag");

    for (let i = 0; i < customTagCollection.length; i++) {
      const openCustomTagBorderSpanTag = document.createElement('span');
      openCustomTagBorderSpanTag.setAttribute('contenteditable', 'false');
      openCustomTagBorderSpanTag.textContent = 'block delimiter';
      openCustomTagBorderSpanTag.classList.add('block-border');

      const closeCustomTagBorderSpanTag = document.createElement('span');
      closeCustomTagBorderSpanTag.setAttribute('contenteditable', 'false');
      closeCustomTagBorderSpanTag.textContent = 'block delimiter';
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

  resetEditor(): void {
    this.editor.html.set('');
  }
}
