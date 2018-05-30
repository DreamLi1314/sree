
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MODULE_COMPONENTS } from "./index.components";
import { MODULE_DIRECTIVES } from "./index.directives";
import { MODULE_PIPES } from "./index.pipes";
import { ModelService } from "./services/model.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
   imports: [
     CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      NgbModule.forRoot()
   ],
   declarations: [
      ...MODULE_COMPONENTS,
      ...MODULE_PIPES,
      ...MODULE_DIRECTIVES
   ],
   entryComponents: [
   ],
   exports: [
      ...MODULE_COMPONENTS,
      ...MODULE_PIPES,
      ...MODULE_DIRECTIVES
   ],
   providers: [
     ModelService
   ]
})
export class WidgetModule {
}
