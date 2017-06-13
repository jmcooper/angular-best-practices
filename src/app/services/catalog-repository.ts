import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http'

@Injectable()
export class CatalogRepositoryService {
  constructor(private http: Http) {}

  getCatalog():Observable<any[]> {
    return this.http.get(`/api/catalog`).map((response: Response) => {
      return response.json();
    }).catch((error) => {return Observable.throw(error.statusText) });
  }

  getCourse(courseNumber):Observable<any[]> {
    return this.http.get(`/api/catalog/${courseNumber}`).map((response: Response) => {
      return response.json();
    }).catch((error) => {return Observable.throw(error.statusText) });
  }
}

