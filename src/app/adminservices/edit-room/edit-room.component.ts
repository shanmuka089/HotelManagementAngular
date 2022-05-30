import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServices } from 'src/app/dbServices/roomServices';
import { RoomModel } from 'src/app/model/roomModel';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  room: RoomModel | undefined;
  roomNum:number;
  comforts=["Ac","non-Ac"];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private roomservice: RoomServices) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParans => {
      this.roomNum=+ queryParans['roomsId'];
    });

    this.roomservice.getRoom(this.roomNum).subscribe(room=>{
        this.room=room;
        console.log(room);
    })
  }

  onSubmit(form:NgForm){
    this.roomservice.updateRoom(form.value.roomId,form.value).subscribe(room=>{
      this.router.navigate(['../show-rooms'],{relativeTo:this.activatedRoute});
    })
  }
}
