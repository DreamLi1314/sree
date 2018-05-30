import { NgModule } from "@angular/core";

import { AppAdminComponent } from "./app-admin.component";
import { WidgetModule } from "../widget/widget.module";
import { MODULE_COMPONENTS } from "./index.components";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppAdminRoutingModule } from "./app-admin-routing.module";
import { MODULE_DIRECTIVES } from "./index.directives";

@NgModule({
  declarations: [
    AppAdminComponent,
    ...MODULE_COMPONENTS,
    ...MODULE_DIRECTIVES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppAdminRoutingModule,
    WidgetModule
  ],
  providers: [],
  bootstrap: [AppAdminComponent]
})
export class AppAdminModule {

}
