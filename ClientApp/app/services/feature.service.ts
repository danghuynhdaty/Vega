import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Response } from "@angular/http";

@Injectable()
export class FeatureService {

  constructor(private http: Http
  ) { }

  // tslint:disable-next-line:typedef
  getFeature() {
    return this.http.get("/api/feature/getall")
                    .map((res: Response) => res.json());
  }
}
