
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppPortalComponent } from './app-portal.component';
import { PortalReportComponent } from "./report/portal-report.component";
import { WelcomePageComponent } from "./welcome/welcome-page.component";

const appRoutes: Routes = [
   {
      path: "",
      component: AppPortalComponent,
      children: [
        {
          path: "tab/report",
          component: PortalReportComponent
        },
        {
          path: "tab/portal",
          component: WelcomePageComponent
        },
        {
          path: "",
          redirectTo: "tab/portal"
        }
      ]
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
export class AppPortalRoutingModule {}
