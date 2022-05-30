import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/dbServices/bookingService';
import { RegistrationService } from 'src/app/dbServices/RegistrationService';
import { BookingHistoryModel } from 'src/app/model/bookingHistoryModel';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit {

  registrationform:FormGroup;
  genders=['male','female']
  username="";
  
  user_roles=[
    {name:'User', value:'ROLE_USER', selected: false},
		{name:'Admin', value:'ROLE_ADMIN', selected: false}
  ]

  selectedRoles: string[] = [];

  onChangeCategory(event: any, role: any) {
		this.selectedRoles.push(role.value);
	}

  constructor(private service:RegistrationService,private router:Router,private activateUrl:ActivatedRoute,private bookingService:BookingService) { }

  ngOnInit(): void {

    
    this.registrationform=new FormGroup({
      'userFirstName': new FormControl('',[Validators.required]),
      'userLastName': new FormControl('',[Validators.required]),
      'userMail': new FormControl('',[Validators.required,Validators.email]),
      'noPersons':new FormControl('',[Validators.required]),
      'userGender':new FormControl('',[Validators.required]),
      'userCity': new FormControl('',[Validators.required]),
      'userMobile': new FormControl('',[Validators.required]),
      'checkInDate': new FormControl('',[Validators.required]),
      'checkOutDate': new FormControl('',[Validators.required]),
    })
  }

  bookHistory:BookingHistoryModel;

  onSubmit(){

    if(this.service.isUserSignedin()){
      this.username=this.service.getSignedinUser();

      this.bookHistory={
        username:this.username,
        userFirstName:this.registrationform.value.userFirstName,
        userLastName:this.registrationform.value.userLastName,
        userMail:this.registrationform.value.userMail,
        noPersons:this.registrationform.value.noPersons,
        userGender:this.registrationform.value.userGender,
        userCity:this.registrationform.value.userCity,
        checkInDate:this.registrationform.value.checkInDate,
        checkOutDate:this.registrationform.value.checkOutDate
      }

      if(this.bookingService.bookNow(this.bookHistory)){
        this.router.navigate(["checkOut"],{relativeTo:this.activateUrl});
      }
    }
  }

}
