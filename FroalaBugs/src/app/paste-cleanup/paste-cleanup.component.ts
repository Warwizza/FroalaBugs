import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paste-cleanup',
  templateUrl: './paste-cleanup.component.html',
  styleUrls: ['./paste-cleanup.component.css']
})
export class PasteCleanupComponent implements OnInit {

  editor1 = null;
  editor2 = null;

  pasteBeforeEditorOptions: FroalaOptions = {
    toolbarButtons: ['bold'],
    imagePaste: false,
    events: {
      'paste.beforeCleanup': function (clipboard_html) {
        return removeAllImageTags(clipboard_html);
      }
    }
  };

  pasteAfterEditorOptions: FroalaOptions = {
    toolbarButtons: ['bold'],
    imagePaste: false,
    events: {
      'paste.afterCleanup': function (clipboard_html) {
        return removeAllImageTags(clipboard_html);
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  public initialize1(initControls) {
    this.editor1 = initControls;
    this.editor1.initialize();
  }
  public initialize2(initControls) {
    this.editor2 = initControls;
    this.editor2.initialize();
  }

}

export interface FroalaOptions {
  toolbarButtons: string[];
  imagePaste: boolean;
  events: any;
}

function removeAllImageTags(clipboard_html: string): string {
  console.log(clipboard_html);
  const parser = new DOMParser();
  var doc: Document = parser.parseFromString(clipboard_html, "text/html");

  const imgCollection = doc.getElementsByTagName("img");
  for (let i = 0; i < imgCollection.length; i++) {
    imgCollection[i].remove();
  }

  console.log(doc.body.innerHTML);
  return doc.body.innerHTML;
}

