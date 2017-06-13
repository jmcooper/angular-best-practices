import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class UserRepositoryService {
  currentUser:any;

  constructor(private http: Http) {}

  save(user): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api/users/register', JSON.stringify(user), options)
      .map((response: Response) => {
        const responseJson = response.json();
        localStorage.setItem('jwt', responseJson.jwt);
        this.currentUser = responseJson.user;
        return this.currentUser;
      })
      .catch((error) => { return Observable.throw(error.statusText); });
  }

  enroll(classId): Observable<any> {
    return this.http.put(`/api/users/enroll/${classId}`, {})
      .delay(2000)
      .catch((error) => { return Observable.throw(error.statusText); });
  }

  drop(classId): Observable<any> {
    return this.http.delete(`/api/users/drop/${classId}`, {})
      .delay(2000)
      .catch((error) => { return Observable.throw(error.statusText); });
  }

  signIn(credentials): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const jwt = localStorage.getItem('jwt');

    const options = new RequestOptions({headers: headers});

    return this.http.post('/api/users/signin', JSON.stringify(credentials), options)
      .map((response: Response) => {
        const responseJson = response.json();
        localStorage.setItem('jwt', responseJson.jwtToken);
        this.currentUser = responseJson.user;
        return responseJson.user;
      })
      .catch((error) => { return Observable.throw(error.statusText); });
  }

  getCurrentUser() {
    const jwt = localStorage.getItem('jwt');

    if (!jwt)
      return Observable.empty();

    const headers = new Headers({'Authorization': `Bearer ${jwt}`});
    const options = new RequestOptions({headers: headers});

    return this.http.get(`/api/users/current`, options)
      .map((response) => this.currentUser = response.json())
  }
}

