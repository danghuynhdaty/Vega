import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MakeService } from "./services/make.service";
import { VehicleFormComponent } from "./components/vehicle-form/vehicle-form.component";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { HomeComponent } from "./components/home/home.component";
import { ModelService } from "./services/model.service";
import { FeatureService } from "./services/feature.service";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        VehicleFormComponent
    ],
    imports: [
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
        MakeService,
        ModelService,
        FeatureService
    ]
})
export class AppModuleShared {
}
