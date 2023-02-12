import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private API: string = '/assets/courses.json';

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(delay(1000), first());
  }
}
