import {NgModule} from '@angular/core';

import {WidgetModule} from '../widget/widget.module';
import {AppReportComponent} from './app-report.component';
import {MODULE_COMPONENTS} from './index.components';
import {MODULE_DIRECTIVES} from './index.directives';
import {MODULE_PIPES} from './index.pipes';
import {BindingModule} from '../binding/binding.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppReportRoutingModule} from './app-report-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {MODULE_SERVICES} from './index.services.provider';


@NgModule({
  declarations: [
    AppReportComponent,
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
    AppReportRoutingModule
  ],
  providers: [
    ...MODULE_SERVICES
  ],
  bootstrap: [AppReportComponent]
})
export class AppReportModule {

}
