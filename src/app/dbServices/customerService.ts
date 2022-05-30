import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerDetailsModel } from "../model/customerDetailsModel";
import { Request } from "../model/request";

@Injectable({
    providedIn:'root'
})
export class CustomerService{

    constructor(private httpCLient:HttpClient){
    }

    getCustomers():Observable<CustomerDetailsModel[]>{
        return this.httpCLient.get<CustomerDetailsModel[]>("http://localhost:8080/com.htm/customers");
    }

    updateCustomers(id:number,obj:Request):Observable<Request>{
        return this.httpCLient.put<Request>("http://localhost:8080/com.htm/users/"+id,obj);
    }

    deleteCustomers(id:number){
        return this.httpCLient.delete<any>("http://localhost:8080/com.htm/customers/"+id);
    }

}