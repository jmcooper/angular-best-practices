import { Component } from '@angular/core';

import { DataRepositoryService } from "../services/data-repository.service"

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  classes: any[];
  visibleClasses: any[];

  constructor(public dataRepository: DataRepositoryService) { }

  ngOnInit() {
    this.dataRepository.getCatalog()
      .subscribe(classes => { this.classes = classes; this.applyFilter('') });
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.dataRepository.enroll(classToEnroll.classId)
      .subscribe(
        null,
        (err) => { console.error(err); classToEnroll.processing = false }, //add a toast message or something
        () => { classToEnroll.processing = false; classToEnroll.enrolled = true; },
      );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.dataRepository.drop(classToDrop.classId)
      .subscribe(
        null,
        (err) => { console.error(err); classToDrop.processing = false }, //add a toast message or something
        () => { classToDrop.processing = false; classToDrop.enrolled = false; }
      );
  }

  applyFilter(filter) {
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
