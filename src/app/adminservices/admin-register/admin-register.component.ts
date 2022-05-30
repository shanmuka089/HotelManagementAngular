import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/dbServices/RegistrationService';
import { Request } from 'src/app/model/request';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  constructor(private authService: RegistrationService) { }

  username: string = '';
  password: string = '';
  usermail: string = '';


  selectedRoles: string[] = [];
  error: string = '';
  success: string = '';

  ngOnInit(): void {

    if (this.authService.isUserSignedin) {
      this.selectedRoles.push('ROLE_ADMIN');
      this.selectedRoles.push('ROLE_USER');
    } else {
      this.selectedRoles.push('ROLE_USER');
    }
  }



  doSignup(form: NgForm) {

    console.log(this.selectedRoles);
    const request:Request = { userId: form.value.userId, username: form.value.username, usermail: form.value.usermail, password: form.value.password, selectedRoles: this.selectedRoles };
    console.log(request);
    this.authService.signup(request).subscribe((result) => {
      console.log(result);
      this.error = "";
      this.success = "*you registration is successfull go back & signIn!..";
    }, (err) => {
      this.success = "";
      this.error = '*Something went wrong during signup!..';
    });
  }
}

