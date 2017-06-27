import { Component } from '@angular/core';

import { CatalogRepositoryService } from "../services/catalog-repository"
import { UserRepositoryService } from "../services/user-repository";

@Component({
  styleUrls: ['../styles/catalog.css'],
  templateUrl: '../templates/catalog.html'
})
export class CoursesComponent {
  classes:any[];
  visibleClasses:any[];

  constructor(private catalogRepository:CatalogRepositoryService, private userRepository:UserRepositoryService) {}

  ngOnInit() {
    this.catalogRepository.getCatalog()
      .subscribe(classes => { this.classes = classes; this.applyFilter('')});
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId)
      .subscribe(
        null,
        (err) => {console.error(err); classToEnroll.processing = false}, //add a toast message or something
        () => {classToEnroll.processing = false; classToEnroll.enrolled=true;},
      );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId)
      .subscribe(
        null,
        (err) => { console.error(err); classToDrop.processing = false}, //add a toast message or something
        () => {classToDrop.processing = false; classToDrop.enrolled=false;}
      );
  }

  private applyFilter(filter) {
    if (!filter)
      return this.visibleClasses = this.classes;

    if (filter === 'GEN') {
      return this.visibleClasses = this.classes.filter(c =>
        !c.course.courseNumber.startsWith('CH') &&
        !c.course.courseNumber.startsWith('PO') &&
        !c.course.courseNumber.startsWith('SP'));
    }

    return this.visibleClasses = this.classes.filter(c => c.course.courseNumber.startsWith(filter));
  }
}
