import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bold-test',
  templateUrl: './bold-test.component.html',
  styleUrls: ['./bold-test.component.css']
})
export class BoldTestComponent implements OnInit {

  firstEditorOptions: FroalaOptions = {
    toolbarButtons: ['bold', 'italic'],
    htmlAllowedTags: ['strong', 'em', 'div', 'p']
  }

  editor = null;
  form: FormGroup

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      editor: ['', []]
    });
  }

  public initialize(initControls) {
    this.editor = initControls;
    this.editor.initialize();
  }

  insertHtml() {
    this.form.get('editor').patchValue('<b>test</b>')
  }

  logHtml() {
    console.log(this.form.get('editor').value);

  }

}

export interface FroalaOptions {
  toolbarButtons: string[];
  htmlAllowedTags: string[];
}
