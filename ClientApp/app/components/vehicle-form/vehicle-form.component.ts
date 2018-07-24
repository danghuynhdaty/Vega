import { FeatureService } from "./../../services/feature.service";
import { ModelService } from "./../../services/model.service";
import { MakeService } from "./../../services/make.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vehicle-form",
  templateUrl: "./vehicle-form.component.html",
  styleUrls: ["./vehicle-form.component.css"]
})
export class VehicleFormComponent implements OnInit {

  makes: any[] = [];
  vehicle: any = {};
  models: any[] = [];
  features: any[] = [];

  constructor(
    private makeService: MakeService,
    private modelService: ModelService,
    private featureService: FeatureService) { }

  ngOnInit(): any {
    this.makeService.getMakes()
      .subscribe((makes: any) => this.makes = makes);

    this.featureService.getFeature()
      .subscribe((features: any) => this.features = features );
  }

  onMakeChange(): any {
    if (this.vehicle.make) {
      this.modelService.getModelByMakeId(this.vehicle.make)
        .subscribe(models => this.models = models);
    }
  }

}
