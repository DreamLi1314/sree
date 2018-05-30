import {Component, Input} from '@angular/core';
import {ObjectModel} from '../../widget/model/object-model';

@Component({
  selector: "binding-editor",
  templateUrl: "./binding-editor.component.html",
  styleUrls: ["./binding-editor.component.scss"]
})
export class BindingEditorComponent {
  @Input() objectModel: ObjectModel;
}
