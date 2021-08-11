import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit 
{

  

  employees: Employee[] | undefined;

  constructor(private employeeServices:EmployeeService) {}

  ngOnInit(): void 
  {
    this.employees = this.employeeServices.onGet()
  }

  

}
