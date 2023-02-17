import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private API: string = 'api/courses';

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      //delay(1000),
      first()
    );
  }

  loadById(id: string){
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(data: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, data).pipe(first());
  }
}
