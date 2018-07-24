import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Response } from "@angular/http";

@Injectable()
export class VehicleService {

  constructor(private http: Http) { }

  // tslint:disable-next-line:typedef
  getFeature() {
    return this.http.get("/api/feature/getall")
      .map((res: Response) => res.json());
  }
  // tslint:disable-next-line:typedef
  getMakes() {
    return this.http.get("/api/make/getall")
      .map((res: Response) => res.json());
  }

  // tslint:disable-next-line:typedef
  getModelByMakeId(id: number) {
    return this.http.get("/api/model/getbymakeid/" + id)
      .map((res: Response) => res.json());
  }
}
