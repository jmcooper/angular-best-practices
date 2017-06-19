import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserRepositoryService {
  currentUser:any;

  constructor() {}

  save(user): Observable<any> {
    this.currentUser = Object.assign({}, user);

    let subject = new Subject<any>();
    subject.next(this.currentUser);
    subject.complete();
    return subject;
  }

  enroll(classId): Observable<any> {
    if (!this.currentUser)
      return Observable.throw('User not signed in');

    if (this.currentUser.classes.includes[classId])
      return Observable.throw('Already enrolled');

    this.currentUser.classes.push(classId)

    return Observable.empty().delay(1000);
  }

  drop(classId): Observable<any> {
    if (!this.currentUser)
      return Observable.throw('User not signed in');

    if (!this.currentUser.classes.includes(classId))
      return Observable.throw('Not enrolled');

    this.currentUser.classes = this.currentUser.classes.filter(c => c.classId !== classId);

    return Observable.empty().delay(1000);
  }

  signIn(credentials): Observable<any> {
    //Never, ever check credentials in client-side code.
    //This code is only here to supply a fake endpoint for signing in.
    if (credentials.email !== 'me@whitebeards.edu' || credentials.password !== 'super-secret')
      return Observable.throw('Invalid login');

    this.currentUser = {
      userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
      firstName: 'Jim',
      lastName: 'Cooper',
      email: 'me@whitebeards.edu',
      classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a']
    };

    return Observable.empty();
  }

  getSchedule() {

  }
}

const users = [{
  userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
  firstName: 'Jim',
  lastName: 'Cooper',
  email: 'someones-email@gmail.com',
  password: 'supersecret',
  classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a']
}];

