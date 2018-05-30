import {NgModule} from '@angular/core';

import {WidgetModule} from '../widget/widget.module';
import {MODULE_COMPONENTS} from './index.components';
import {MODULE_DIRECTIVES} from './index.directives';
import {MODULE_PIPES} from './index.pipes';
import {BindingModule} from '../binding/binding.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppPortalRoutingModule} from './app-portal-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {AppPortalComponent} from './app-portal.component';


@NgModule({
  declarations: [
    AppPortalComponent,
    ...MODULE_COMPONENTS,
    ...MODULE_PIPES,
    ...MODULE_DIRECTIVES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    WidgetModule,
    BindingModule,
    AppPortalRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppPortalComponent]
})
export class AppPortalModule {

}
