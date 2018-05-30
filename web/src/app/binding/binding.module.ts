import { NgModule } from "@angular/core";


import { WidgetModule } from "../widget/widget.module";
import { MODULE_DIRECTIVES } from './index.directives';
import { MODULE_PIPES } from './index.pipes';
import { MODULE_COMPONENTS } from "./index.components";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    ...MODULE_COMPONENTS,
    ...MODULE_PIPES,
    ...MODULE_DIRECTIVES
  ],
  imports: [
    WidgetModule
  ],
  exports: [
    ...MODULE_COMPONENTS,
    ...MODULE_PIPES,
    ...MODULE_DIRECTIVES
  ],
  providers: []
})
export class BindingModule {

}
