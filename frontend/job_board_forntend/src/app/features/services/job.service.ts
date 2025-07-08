import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:1337/api/jobs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get(API_URL);
  }

  getJob(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  createJob(payload: any): Observable<any> {
    return this.http.post(API_URL, payload);
  }

  updateJob(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, { data });
  }

  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
