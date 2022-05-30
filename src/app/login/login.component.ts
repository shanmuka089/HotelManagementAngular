import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../dbServices/RegistrationService';
import { SharedService } from '../dbServices/sharedService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup|undefined

  error:string|undefined;

  role:string[]=[];

  constructor(private authService:RegistrationService,private sharedService:SharedService,private regService:RegistrationService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'username': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required])
    })
  }

  onSubmit(){

    this.authService.signin(this.loginForm.value).subscribe(response=>{
      this.role=this.regService.getSignedInUserRoles();
      
      if(this.role.includes('ROLE_ADMIN',0)){
            this.sharedService.assignRole.emit('ROLE_ADMIN');
      }else{
          this.sharedService.assignRole.emit('ROLE_USER');
      }
     this.router.navigateByUrl('user-profile/booking-room');
     
    },err=>{
      console.log(err.error);
      this.error=err.error.message;
    })
   
  }

}
