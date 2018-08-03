import { VehicleService } from "./../../services/vehicle.service";
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Route,
  Router
} from "../../../../node_modules/@angular/router";
import { Observable } from "../../../../node_modules/rxjs/Observable";
import "rxjs/add/observable/forkJoin";
@Component({
  selector: "app-vehicle-form",
  templateUrl: "./vehicle-form.component.html",
  styleUrls: ["./vehicle-form.component.css"]
})
export class VehicleFormComponent implements OnInit {
  makes: any;
  models: any;
  features: any;
  vehicle: any = {
    features: [],
    contact: {}
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) {
    route.params.subscribe(p => {
      this.vehicle.id = +p.id;
    });
  }

  ngOnInit(): void {
    let source: any = [
      this.vehicleService.getMakes(),
      this.vehicleService.getFeature()
    ];
    if (this.vehicle.id) {
      source.push(this.vehicleService.getVehicle(this.vehicle.id));
    }
    Observable.forkJoin(source).subscribe(
      data => {
        this.makes = data[0];
        this.features = data[1];
        if (this.vehicle.id) {
          this.vehicle = data[2];
        }
      },
      err => {
        if (err.status === 404) {
          this.router.navigate(["/home"]);
        }
      }
    );
  }

  onMakeChange(): void {
    if (this.vehicle.makeId) {
      this.vehicleService
        .getModelByMakeId(this.vehicle.makeId)
        .subscribe((models: any) => (this.models = models));
    }
    delete this.vehicle.modelId;
  }

  onFeatureToggle(featureId: number, $event: any): void {
    if ($event.target.checked) {
      this.vehicle.features.push(featureId);
    } else {
      let index: number = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }

  submit(): any {
    this.vehicleService
      .create(this.vehicle)
      .subscribe((x: any) => console.log(x));
  }
}
