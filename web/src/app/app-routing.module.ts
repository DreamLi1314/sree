
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from "./widget/error/error.component";

const appRoutes: Routes = [
   {
      path: "portal",
      loadChildren: "app/portal/app-portal.module#AppPortalModule",
   },
   {
      path: "report",
      loadChildren: "app/report/app-report.module#AppReportModule",
   },
   {
      path: "admin",
      loadChildren: "app/admin/app-admin.module#AppAdminModule",
   },
   {
      path: "**",
      redirectTo: "portal"
   }
];

@NgModule({
   imports: [
     RouterModule.forRoot(
       appRoutes,
       // { enableTracing: true } // <-- debugging purposes only
     )
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule {}
