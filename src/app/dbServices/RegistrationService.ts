import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Request } from "../model/request";
import { ForgotRequest } from "../model/forgotRequest";
import { PasswordChange } from "../model/passwordChange";

@Injectable({
    providedIn:"root"
})
export class RegistrationService{

	private baseUrl = 'http://localhost:8080/';

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }   
	signin(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'signIn', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((response) => {
			sessionStorage.setItem('user', request.username);
			console.log(response.token);
			sessionStorage.setItem('role',JSON.stringify(response.role));
			sessionStorage.setItem('token', 'HTTP_TOKEN ' + response.token);
			return response;
		}));
	}

	getUser(request: ForgotRequest): Observable<ForgotRequest> {
		return this.http.post<ForgotRequest>(this.baseUrl + 'get-user',request);
	}

	changeUserPassword(request: PasswordChange): Observable<PasswordChange> {
		return this.http.post<PasswordChange>(this.baseUrl + 'change-user-pass',request);
	}



	signup(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'signUp', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {                                                         
			return resp;
		}));
	}
	
	getSignedInUserRoles(){
		return JSON.parse(sessionStorage.getItem('role'));
	}
	
	isUserSignedin() {
		return sessionStorage.getItem('token') !== null;
	}

	getSignedinUser() {
		return sessionStorage.getItem('user') as string;
	}
	signout() {
		sessionStorage.clear();
	}

	getToken() {
		let token = sessionStorage.getItem('token') as string;
		return token;
	}

}