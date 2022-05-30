import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookingHistoryModel } from "../model/bookingHistoryModel";
import { Paymentdetails } from "../model/payemntDetails";

@Injectable({
    providedIn:"root"
})
export class BookingService{


    bookingsHistory:BookingHistoryModel;

    paymentService:Paymentdetails;

    constructor(private httpCLient:HttpClient){}
    getBookings(name:string):Observable<BookingHistoryModel[]>{
        return this.httpCLient.get<BookingHistoryModel[]>("http://localhost:8080/com.htm/booking/"+name);
    }


    getAllBookings():Observable<BookingHistoryModel[]>{
        return this.httpCLient.get<BookingHistoryModel[]>("http://localhost:8080/com.htm/booking");
    }

    getCurrentBookings(name:string):Observable<BookingHistoryModel[]>{
        return this.httpCLient.get<BookingHistoryModel[]>("http://localhost:8080/com.htm/my-booking/"+name);
    }

    // deleteCurrentBookings(name:string):Observable<any>{
    //     return this.httpCLient.delete<any>("http://localhost:8080/com.htm/my-booking/"+name);
    // }

    saveBookings(data:BookingHistoryModel):Observable<BookingHistoryModel>{
        return this.httpCLient.post<BookingHistoryModel>("http://localhost:8080/com.htm/booking",data);
    }

    bookNow(model:BookingHistoryModel):Boolean{
        this.bookingsHistory=model;
        return true;
    }

    payService(details:Paymentdetails){
        this.paymentService=details;
    }
}