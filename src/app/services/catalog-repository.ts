import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { UserRepositoryService } from './user-repository';

@Injectable()
export class CatalogRepositoryService {
  constructor(private userRepository:UserRepositoryService) {}

  getCatalog():Observable<any[]> {
    const subject = new Subject<any>();
    const currentUser = this.userRepository.currentUser || {classes:[]};
    const catalogWithEnrollmentStatus =
      catalog.map(catalogClass => {
        let enrolled = {enrolled: currentUser.classes.includes(catalogClass.classId)};
        return Object.assign(catalogClass, enrolled)
      });
    setTimeout(() => {subject.next(catalogWithEnrollmentStatus); subject.complete();}, 200);

    return subject;
  }
}

const courses = [{
  courseNumber: 'PO101',
  courseName: 'Intro to Potions',
  creditHours: 3,
  description: '...'
}, {
  courseNumber: 'HIS105',
  courseName: 'Ancient History of Magic',
  creditHours: 4,
  description: '...'
},{
  courseNumber: 'CH101',
  courseName: 'Intro to Charms',
  creditHours: 4,
  description: '...'
},{
  courseNumber: 'CH205',
  courseName: 'Creating Advanced Charms',
  creditHours: 4,
  description: '...'
},{
  courseNumber: 'SP101',
  courseName: 'Intro Spell Casting',
  creditHours: 4,
  description: '...'
},{
  courseNumber: 'SP201',
  courseName: 'Advanced Spell Casting',
  creditHours: 4,
  description: '...'
}];

const catalog = [{
  classId: '24ab7b14-f935-44c1-b91b-8598123ea54a',
  course: courses[0],
  professor: 'Abramius Darksbayn',
  seatsAvailable: 23,
  days: 'MWF',
  time: 11
}, {
  classId: 'cebbc5ba-f49a-4708-b3dc-51a346b3231e',
  course: courses[0],
  professor: 'Philosifus Siebrand',
  seatsAvailable: 9,
  days: 'MWF',
  time: 12
}, {
  classId: '6130cdd4-071a-4559-8072-35f0fbec5516',
  course: courses[0],
  professor: 'Abramius Darksbayn',
  seatsAvailable: 14,
  days: 'THF',
  time: 2
}, {
  classId: 'dd0343e9-50b2-4f1d-8b87-93c0b34f3d35',
  course: courses[1],
  professor: 'Antonia Clavell',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  course: courses[2],
  professor: 'Meriel Dufaux',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  course: courses[3],
  professor: 'Adranus Klaus',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  course: courses[4],
  professor: 'Ragnvald Graupnar',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  course: courses[5],
  professor: 'Philosifus Siebrand',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  course: courses[2],
  professor: 'Phoebe Chabon',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  course: courses[3],
  professor: 'Sycily Soule',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  course: courses[4],
  professor: 'Heldebald Cincebeaux',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
}, {
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  course: courses[5],
  professor: 'Gerlinda Weinschroot',
  seatsAvailable: 28,
  days: 'THF',
  time: 11
}];
