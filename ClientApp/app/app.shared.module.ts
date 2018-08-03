import * as Raven from "raven-js";
import { AppErrorHandler } from "./app.error-handler";
import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastyModule } from "ng2-toasty";

import { VehicleService } from "./services/vehicle.service";
import { VehicleFormComponent } from "./components/vehicle-form/vehicle-form.component";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { HomeComponent } from "./components/home/home.component";

Raven.config(
  "https://bb149d677e13440c8633f1dcc62b3008@sentry.io/1255659"
).install();

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    VehicleFormComponent
  ],
  imports: [
    ToastyModule.forRoot(),
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "vehicles/new", component: VehicleFormComponent },
      { path: "**", redirectTo: "home" }
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    VehicleService
  ]
})
export class AppModuleShared {}
