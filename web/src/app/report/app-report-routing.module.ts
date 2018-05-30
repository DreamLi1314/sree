
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppReportComponent } from "./app-report.component";

const appRoutes: Routes = [
   {
      path: "",
      component: AppReportComponent
   }
];

@NgModule({
   imports: [
     RouterModule.forChild(appRoutes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppReportRoutingModule {}
