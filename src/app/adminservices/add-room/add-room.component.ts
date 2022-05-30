import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServices } from 'src/app/dbServices/roomServices';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  
  comforts=["Ac","non-Ac"];

  constructor(private roomService:RoomServices,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  room={
    roomId:'',
    roomComfort:'',
    noOfBeds:'',
    roomRent:'',
    roomCondition:'',
    roomUse:false
  }
  
  onSubmit(form:NgForm){
    this.room.roomId=form.value.roomId;
    this.room.roomComfort=form.value.room_comfort;
    this.room.noOfBeds=form.value.no_beds;
    this.room.roomRent=form.value.room_rent;
    this.room.roomCondition=form.value.room_condition;
    this.room.roomUse=form.value.is_use;

    console.log(this.room.roomUse);
    this.roomService.saveRooms(this.room).subscribe(response=>{
      console.log(response);
    })
    this.router.navigate(['../show-rooms'],{relativeTo:this.activatedRoute});
  }


}
