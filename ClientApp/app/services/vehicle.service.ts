import { Endpoint } from "./../shared/endpoint";
import { SaveVehicle } from "./../models/vehicle";
import { Injectable, Inject } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Response } from "@angular/http";

@Injectable()
export class VehicleService {
  constructor(private http: Http, private endpoint: Endpoint) {}

  getFeature(): any {
    return this.http
      .get("/api/features/getall")
      .map((res: Response) => res.json());
  }

  getMakes(): any {
    return this.http
      .get(this.endpoint.makes)
      .map((res: Response) => res.json());
  }

  getModelByMakeId(id: number): any {
    return this.http
      .get("/api/models/getbymakeid/" + id)
      .map((res: Response) => res.json());
  }

  create(vehicle: SaveVehicle): any {
    return this.http
      .post(this.endpoint.vehicles, vehicle)
      .map(res => res.json());
  }

  getVehicle(id: number): any {
    return this.http.get(this.endpoint.vehicles + id).map(res => res.json());
  }

  update(vehicle: SaveVehicle): any {
    return this.http
      .put(this.endpoint.vehicles + vehicle.id, vehicle)
      .map(res => res.json());
  }

  delete(id: number): any {
    return this.http.delete(this.endpoint.vehicles + id).map(res => res.json());
  }
}
