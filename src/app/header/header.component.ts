import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../dbServices/RegistrationService';
import { SharedService } from '../dbServices/sharedService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isSignedIn:boolean=false;

 
  users='';
  
  role2='ROLE_ADMIN';
  role1='ROLE_USER'

  constructor(private regServices:RegistrationService,private sharedService:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.sharedService.assignRole.subscribe(data=>{
      this.users=data;
      this.isSignedIn=this.regServices.isUserSignedin();
    })
    
    
  }

  onSignOut(){
    this.regServices.signout();
    this.isSignedIn=this.regServices.isUserSignedin();
    this.ngOnInit();
    this.router.navigateByUrl("/signOut");
   
  }

}
