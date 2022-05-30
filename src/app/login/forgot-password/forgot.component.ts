import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/dbServices/RegistrationService';
import { ForgotRequest } from 'src/app/model/forgotRequest';
import { PasswordChange } from 'src/app/model/passwordChange';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {


  request:ForgotRequest;
  isUserExist=false;
  userName:string|undefined;
  password1:string|undefined;
  password2:string|undefined;
  passChangeToken:PasswordChange|undefined;

  // showing user not found error message
  error='';

  // showing user found success message
  success='';

  // showing mesage for if the both passwords are not mateched
  passwordMatch="";

  // showing message for if password updation is success
  changeSuccess="";

  // showing message for if password updation is failure
  changefailure="";

  constructor(private regService:RegistrationService) { }

  ngOnInit(): void {
  }

  searchUser(form:NgForm){ 
    this.request={
      username:form.value.username
    }
    console.log(this.request.username);

    // get the user if already registered
      this.regService.getUser(this.request).subscribe(data=>{
          this.error="";
          this.userName=data.username;
          this.success="*User is exist continue to change your password!" 
          this.isUserExist=true;
      },err=>{
          this.success="";
          this.error="*user not exist!... please enter valid username or email"
          this.isUserExist=false;
      })
  }


  // change the password according to his name
  onChangePassword(form:NgForm){
    this.password1=form.value.enterPassword;
    this.password2=form.value.reEnterPassword;
    if(this.password1===this.password2){

        this.passChangeToken={
          username:this.userName,
          password:form.value.reEnterPassword
        }

        this.regService.changeUserPassword(this.passChangeToken).subscribe(data=>{
          this.passwordMatch="";
          this.changefailure="";
          this.changeSuccess="*you password is changed successfully!..."
        },err=>{
            this.changeSuccess="";
            this.changefailure="*your password is not changed try with another credentials!.."
        })
    }else{
      this.passwordMatch="*you entered both passwords must be match!...";
    }

  }

}
