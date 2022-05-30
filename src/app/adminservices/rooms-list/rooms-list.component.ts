import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServices } from 'src/app/dbServices/roomServices';
import { RoomModel } from 'src/app/model/roomModel';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  rooms:RoomModel[]|undefined;

  p:number=1;

  searchText:any;

  constructor(private roomsService:RoomServices,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe(data=>{
      this.rooms=data;
    })
  }

  onDelete(id:number){
    this.roomsService.deleteRoom(id).subscribe(data=>{
    this.router.navigate(['../delete-room'],{relativeTo:this.activatedRoute});
  });
  }



}
