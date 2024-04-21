import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../config/environment';
import { WorkshopDetail } from '../interface/workshop';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/common';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(private http: HttpClient) { }

  getWorkshops(): Observable<ApiResponse<WorkshopDetail[]>> {
    const params = new HttpParams()
      .set('path', 'available-workshops')
      
    return this.http.get<ApiResponse<WorkshopDetail[]>>(environment.apiUrl, { params });
  }
}
