import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/dbServices/customerService';
import { CustomerDetailsModel } from 'src/app/model/customerDetailsModel';
import { Request } from 'src/app/model/request';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  users:CustomerDetailsModel[];

  p:number=1;

  searchText:any;

  constructor(private userService:CustomerService,private router:Router) { }

  ngOnInit(): void {
     this.userService.getCustomers().subscribe(data=>{
      this.users=data;
     })
  }

  onDelete(id:number){
    this.userService.deleteCustomers(id).subscribe(data=>{
          console.log(data)
         this.ngOnInit();
    },err=>{
      console.log("these is an error data");
      console.log(err);
    })
  }
}
