import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IReport } from './reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private baseURL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  
  getStats(): Observable<IReport[]>{
    console.log(window.location.href);
    return this.httpClient.get<IReport[]>(`${this.baseURL}/report/stats/get`);
  }

}
