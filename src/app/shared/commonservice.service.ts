import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../teacher';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) { }

  getdata()
  {
    return this.http.get<Teacher[]>("http://localhost:3000/teacher");
  }
}
