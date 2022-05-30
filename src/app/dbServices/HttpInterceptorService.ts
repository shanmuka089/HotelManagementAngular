import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { RegistrationService } from "./RegistrationService";
@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

    constructor(private authService: RegistrationService) { }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isUserSignedin() && this.authService.getToken()) {
            const request = req.clone({
                headers: new HttpHeaders({
                    'Authorization': this.authService.getToken()
                })
            });
            return next.handle(request).pipe(
				catchError(err => {
					if(err instanceof HttpErrorResponse && err.status === 401) {
						this.authService.signout();
					}
					return throwError(err);
				})
			);
        }
       
		return next.handle(req);
    }

}