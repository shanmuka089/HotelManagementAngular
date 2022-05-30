import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../dbServices/bookingService';
import { RegistrationService } from '../dbServices/RegistrationService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private regService:RegistrationService,private router:Router) { }

  ngOnInit(): void {
    
  }

  onNavigate(){
    if(this.regService.isUserSignedin()){
       this.router.navigateByUrl('user-profile/booking-room');
    }else{
      this.router.navigateByUrl('log-in');
    }

  }

}
