import { Injectable } from '@angular/core';

// injectable decorator tells angular that this service might
// itself have injected dependencies
// if we ever want to inject a service into another service
// injectable deocrator is a must.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  // defining a service to return the list of employees.
  getEmployees() {
  	return [
  	{"id": 1, "name": "Andrew", "age": 30},
  	{"id": 2, "name": "Brandon", "age": 25},
  	{"id": 3, "name": "Christina", "age": 26},
  	{"id": 4, "name": "Elena", "age": 28}
  ];
  }
}
