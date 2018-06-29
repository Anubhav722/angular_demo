import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';

// injectable decorator tells angular that this service might
// itself have injected dependencies
// if we ever want to inject a service into another service
// injectable deocrator is a must.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // since we don't have a working webserver to fetch data.
  // we'll be fetching data from a file.
  private _url: string = "/assets/data/employees.json"

  // declaring http client in a service to make requests.
  constructor(private http: HttpClient) { }

  // defining a service to return the list of employees.
  getEmployees(): Observable<IEmployee[]> {
  	return this.http.get<IEmployee[]>(this._url);
  }
}
