import { VehicleService } from "./../../services/vehicle.service";
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
    private vehicleService: VehicleService) { }

  ngOnInit(): any {
    this.vehicleService.getMakes()
      .subscribe((makes: any) => this.makes = makes);

    this.vehicleService.getFeature()
      .subscribe((features: any) => this.features = features);
  }

  onMakeChange(): any {
    if (this.vehicle.make) {
      this.vehicleService.getModelByMakeId(this.vehicle.make)
        .subscribe(models => this.models = models);
    }
  }

}
