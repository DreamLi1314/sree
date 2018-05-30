import { Type } from "@angular/core";
import { BindingEditorComponent } from "./editor/binding-editor.component";
import { EditorTitleBar } from './editor/titlebar/editor-title-bar';

export const MODULE_COMPONENTS: Type<any>[] = [
  BindingEditorComponent,
  EditorTitleBar
];
