import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employees: Employee[] = 
  [

    {
      id: 1,
      name: 'Saravanan',
      phone: 9751152529,
      email: 'saravananvinay12@gmail.com'
    },

    {
      id: 2,
      name: 'Sankar',
      phone: 8939178607,
      email: 'asudhjoy12@gmail.com'
    }
  
  ];


  onGet() 
  {
    return this.employees;
  }

  
}
