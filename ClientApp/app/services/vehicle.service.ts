import { Injectable, Inject } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Response } from "@angular/http";

@Injectable()
export class VehicleService {
  constructor(private http: Http) {}

  getFeature(): any {
    return this.http
      .get("/api/features/getall")
      .map((res: Response) => res.json());
  }

  getMakes(): any {
    return this.http
      .get("/api/makes/getall")
      .map((res: Response) => res.json());
  }

  getModelByMakeId(id: number): any {
    return this.http
      .get("/api/models/getbymakeid/" + id)
      .map((res: Response) => res.json());
  }

  create(vehicle: any): any {
    // let headers: any = new Headers();
    // headers.append("Content-Type", "application/json");
    // let options: any = new RequestOptions({ headers: headers });
    return this.http.post("/api/vehicles", vehicle).map(res => res.json());
  }
}
