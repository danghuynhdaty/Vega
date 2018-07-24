import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Response } from "@angular/http";

@Injectable()
export class ModelService {

  constructor(private http: Http) { }

  // tslint:disable-next-line:typedef
  getModelByMakeId(id: number) {
    return this.http.get("/api/model/getbymakeid/"+id)
                    .map((res: Response) => res.json());
  }

}
