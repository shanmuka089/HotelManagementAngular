import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RoomModel } from "../model/roomModel";



@Injectable({
    providedIn:"root"
})
export class RoomServices{

    constructor(private httpClient:HttpClient){}

    getRooms():Observable<RoomModel[]>{
        return this.httpClient.get<RoomModel[]>("http://localhost:8080/com.htm/room");
    }

    saveRooms(data:any){
        return this.httpClient.post<RoomModel>("http://localhost:8080/com.htm/room/",data);
    }

    getRoom(data:number){
        return this.httpClient.get<RoomModel>("http://localhost:8080/com.htm/room/"+data);
    }

    updateRoom(id:number,data:any){
        return this.httpClient.put<RoomModel>("http://localhost:8080/com.htm/room/"+id,data);
    }

    deleteRoom(id:number){
       return this.httpClient.delete<RoomModel>("http://localhost:8080/com.htm/room/"+id);
     }

}