
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppAdminComponent } from "./app-admin.component";

const appRoutes: Routes = [
   {
      path: "",
      component: AppAdminComponent,
   }
];

@NgModule({
   imports: [
     CommonModule,
     RouterModule.forChild(appRoutes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppAdminRoutingModule {}
